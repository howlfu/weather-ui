const ID_NOTIFY = 'notify';
const CN_NOTIFY_REPORT = '.notify-status-report';
const CN_NOTIFY_DATE = '.notify-status-date';
const CN_NOTIFY_TITLE = '.notify-status-title';
const CN_NOTIFY_CAL_DATE = '.notify-status-cal-date';

const CN_NOTIFY_STATUS = '.notify-status';

const STAT_NOTIFY_NORMAL = 0;
const STAT_NOTIFY_ABNORMAL = 1;
const STAT_NOTIFY_DANGER = 2;
const STAT_NOTIFY_MANUAL = 3;
const STAT_NOTIFY_EARTHQUAKE = 4;
const STAT_NOTIFY_ABNORMAL_MANUAL = 13;
const STAT_NOTIFY_DANGER_MANUAL = 23;

var notifyStatusClassMap = {};
notifyStatusClassMap[STAT_NOTIFY_NORMAL] = 'notify-status-normal';
notifyStatusClassMap[STAT_NOTIFY_ABNORMAL] = 'notify-status-abnormal';
notifyStatusClassMap[STAT_NOTIFY_DANGER] = 'notify-status-danger';
notifyStatusClassMap[
  STAT_NOTIFY_ABNORMAL_MANUAL] = 'notify-status-abnormal-manual';
notifyStatusClassMap[
  STAT_NOTIFY_DANGER_MANUAL] = 'notify-status-danger-manual';
notifyStatusClassMap[
  STAT_NOTIFY_EARTHQUAKE] = 'notify-status-earthquake';

var _urlVars = null;

function getUrlVars() {
  var vars = [];
  var hash;
  var hashes = window.location.href.slice(
    window.location.href.indexOf('?') + 1).split('&');
  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}

function ensureUrlVars() {
  if (_urlVars == null) {
    _urlVars = getUrlVars();
  }
}

function getUrlVar(key) {
  ensureUrlVars();
  return _urlVars[key];
}

function isNotifyParam() {
  return getUrlVar(ID_NOTIFY) !== undefined;
}

function switchNotifyContent(switchClassName) {
  var notifyParam = getUrlVar(ID_NOTIFY);
  if (notifyParam !== undefined) {
    $(CN_NOTIFY_REPORT).show();
    var cnNormal = notifyStatusClassMap[STAT_NOTIFY_NORMAL];
    var cnTarget = notifyStatusClassMap[notifyParam];
    if (notifyParam !== cnNormal) {
      $(CN_NOTIFY_STATUS).removeClass(cnNormal);
      $(CN_NOTIFY_STATUS).addClass(cnTarget);
    }
  } else {
    $(switchClassName).show();
  }
}

function switchNotifyDate() {
  switchNotifyContent(CN_NOTIFY_DATE);
}

function switchNotifyTitle() {
  switchNotifyContent(CN_NOTIFY_TITLE);
}

function switchNotifyCalDate() {
  switchNotifyContent(CN_NOTIFY_CAL_DATE);
}