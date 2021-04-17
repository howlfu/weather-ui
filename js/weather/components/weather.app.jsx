// External Modules
var React = require('react');
var createReactClass = require('create-react-class');
// Constants and Types

var EHomeSigPropType = require('../types/ehomesig.prop.type');
// var EboxUiAudioRefType = require('../types/eboxui.audio.ref.type');
// var EboxUiConstant = require('../types/eboxui.constant');
var HexActionType = require('../../core/types/hex.action.type');
var HexRemoteActionType = require('../../core/types/hex.remote.action.type');

// Modules
var EHomeSigActions = require('../action/ehomesig.action');
var HexL10nMgr = require('../../core/io/hex.l10n.mgr');
// var HexAudioMgr = require('../../core/io/hex.audio.mgr');
var HexProjMgr = require('../../core/io/hex.proj.mgr');
var HexProcessEventMgr = require('../../core/io/hex.process.event.mgr');
var HexHeartBeatMgr = require('../../core/io/hex.heartbeat.mgr');
// var HexLifeCycleHelperClass =  require('../../core/components/helper/hex.lifecycle.helper.class');
// var EboxUiConsoleMsgHandler = require('../io/eboxui.console.msg.handler');
// var EboxUiRunModeMgr = require('../io/eboxui.run.mode.mgr');

// Stores

var HexLangStore = require('../../core/stores/hex.lang.store');
var EHomeSigPrefStore = require('../stores/ehomesig.pref.store');
// var HexConsoleStore = require('../../core/stores/hex.console.store');
// var HexViewStatStore = require('../../core/stores/hex.view.stat.store');

// React Modules
var HexComponentMixin = require('../../core/ui/components/hex.component.mixin');
// var HexConsole = require('../../core/components/hex.console.react');
var EhomeSigMainView = require('./view/ehomesig.main.view');
// var EboxUiIdleView = require('./view/eboxui.idle.view.react');

// Tools
var checker = require('../../core/tools/hex.checker');
var logger = require('../../core/tools/hex.logger');
var packageInfo = require('../../core/io/hex.app-info.mgr').getInfo();

const MODULE_ID = 'EHomeSigApp';
const MAIN_ID = 'MAIN';

var _appName = packageInfo.nameFull;
var _appVersion = 'v' + packageInfo.version + ' r' + packageInfo.buildNo;

var _l10nRev;
var _pref;
var _viewParam;
var _langId = null;

// Use Proto Render
// HexComponentMixin.setIsPrototypeRender(false);

var EHomeSigApp = createReactClass({
  lifeCycleHelper: null,
  mixins: [HexComponentMixin],
  _newVersionData: null,

  // Render functions
  // -----------------------------------------------------------------
  _mxRenderDetail: function () {
    // _pref = this.mxGetState(EHomeSigPropType.PREF);
    return (
      <EhomeSigMainView l10n_rev={_l10nRev} pref={_pref} />
    );
  },



  // Public functions
  // -----------------------------------------------------------------

  // Override functions
  // -----------------------------------------------------------------

  _mxInit: function () {

    HexProjMgr.init();
    // var logLevel = EHomeSigPrefStore.getLogLevel();
    // logger.setLogLevel(logLevel);


    _pref = EHomeSigPrefStore.getAll().toJS();
    // this.mxSetInitStat(EHomeSigPropType.PREF, EHomeSigPrefStore.getAll());



    HexProcessEventMgr.init();
    HexProcessEventMgr.addListener(
      HexRemoteActionType.LOG, this._onMainThreadLog);
    HexProcessEventMgr.addAppCloseHandler(this._onAppClose);

    HexLangStore.addDataActionListener(this._onLangChange);
    EHomeSigPrefStore.addDataActionListener(this._onPrefChange);

    this._updateL10N();

    this._printLogoConsole();

    // Set full screen
    HexProcessEventMgr.setFullScreen(EHomeSigPrefStore.getIsFullScreen());

    var _this = this;
    global.window.onbeforeunload = function (e) {
      var isNeverClose = EHomeSigPrefStore.getIsNeverClose();
      if (isNeverClose == true) {
        return false;
      }
      return;
    };
  },

  _mxUpdateProps: function () {
    _l10nRev = HexL10nMgr.getRev();
    // _pref = this.mxGetState(EHomeSigPropType.PREF);
    // _viewParam = this.mxGetState(EHomeSigPropType.VIEW_PARAM);
  },

  // Private functions
  // -----------------------------------------------------------------



  _printLogoConsole: function () {
    var logStyBase = 'padding: 5px;line-height:40px';
    var logStyMain = 'background: #323334; color: #ffffff; ' + logStyBase;
    var logStyMainSub = 'background: #dce1e5; color: #323334;' + logStyBase;
    var logStyMainSplit = 'background: #7a7d80;' + logStyBase;
    console.log('%c%c %s - %s %c%c http://www.hexsave.com ',
      logStyMainSplit, logStyMain, _appName, _appVersion,
      logStyMainSplit, logStyMainSub);
  },

  _updateL10N: function () {
    HexL10nMgr.set(HexLangStore.getAll());
    HexL10nMgr.setLangList(HexLangStore.getList());

    _langId = HexL10nMgr.getLangId();
  },

  _updateLang: function (pref) {
    // Notify Lang change
    var newLang = EHomeSigPrefStore.getLang();
    logger.info('NEW LANG: ' + newLang, MODULE_ID);
    setTimeout(function () {
      EHomeSigActions.changeLang(newLang);
    }, 0);
  },


  // Event functions
  // -----------------------------------------------------------------

  _onMainThreadLog: function (data) {
    if (checker.isNonEmptyStr(data)) {
      logger.infoMain(data, MAIN_ID);
    }
  },

  _onLangChange: function () {
    //this.mxUpdateStatVal(EHomeSigPropType.L10N, HexLangStore.getAll());
    //this.mxUpdateStatVal(EHomeSigPropType.LANG_LIST, HexLangStore.getList());

    this._toggleLangCss(_langId, false);
    this._updateL10N();
    this._toggleLangCss(_langId, true);

    this.mxUpdateStatVal(EHomeSigPropType.L10N_REV, HexL10nMgr.getRev());
  },

  _toggleLangCss: function (langId, isEnabled) {
    if (!checker.isNonEmptyStr(langId)) {
      return;
    }
    var sheet = this._ensureLangCss(langId);
    if (sheet != null) {
      sheet.disabled = !isEnabled;
    }

  },

  _ensureLangCss: function (langId) {
    var href = this._getCssHref(langId);
    var sheet = this._getCssEntry(href);
    if (sheet == null) {
      var link = $('<link />', {
        rel: 'stylesheet',
        type: 'text/css',
        href: href
      });
      $('head').append(link);
    }
    return this._getCssEntry(href);
  },

  _getCssHref: function (langId) {
    return 'css/lang-' + langId.toLowerCase() + '.css';
  },

  _getCssEntry: function (href) {
    var styleSheets = document.styleSheets;
    for (var i = 0; i < styleSheets.length; i++) {
      if (checker.isSetNonNull(styleSheets[i].href) &&
        styleSheets[i].href.indexOf(href) > -1) {
        return styleSheets[i];
      }
    }
    return null;
  },

  _onPrefChange: function () {
    this.mxUpdateStatVal(
      EHomeSigPropType.PREF, EHomeSigPrefStore.getAll());
    // Preform Settings update
    if (EHomeSigPrefStore.isLangChanged()) {
      this._updateLang(EHomeSigPrefStore.getLang());
    }

    // if (EHomeSigPrefStore.isVolChanged()) {
    //   HexAudioMgr.setMuted(!EHomeSigPrefStore.getVol());
    // }

    if (EHomeSigPrefStore.isFullScreenChanged()) {
      HexProcessEventMgr.setFullScreen(EHomeSigPrefStore.getIsFullScreen());
    }
  },

  _onViewStatChange: function () {
    this.mxUpdateStatVal(
      EHomeSigPropType.VIEW_PARAM, HexViewStatStore.getViewParam());
  },

  _onAppClose: function () {
    // Let it go, let it go...
    return true;
  }

});

module.exports = EHomeSigApp;
