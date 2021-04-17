// External Modules
var Immutable = require('immutable');
var EventEmitter = require('events').EventEmitter;

// Constants and Types
var HexActionType = require('../types/hex.action.type');


// Tools
var checker = require('../helper/base.checker');

var HexStore = Object.assign({}, EventEmitter.prototype, {
  _idActionChange: null,
  _data: null,
  _actionHelper: null,
  _dispatcher: null,
  
  getReady: function(dispacher, actionCore) {
    init();
    setDispatcher(dispacher)
    setActionCore(actionCore)
  },
  init: function() {

  },

  setDispatcher: function (dispatcher) {
    this._dispatcher = dispatcher
    this._dispatcher.register(this._onDataUpdated.bind(this));
  },

  _onDataUpdated: function (actionType) {
    // Implemeneted by subclass
  },
  
  setActionCore: function (actionCore) {
    this._actionHelper = actionCore
  },
  emitAction: function (actionType, data) {
    this.emit(this._idActionChange, actionType, data);
  },
  emitEvent: function (eventId) {
    this.emit(eventId);
  },
  addDataActionListener: function (callback) {
    this.on(this._idActionChange, callback);
  },
  addEventListener: function (eventId, callback) {
    this.on(eventId, callback);
  },
  removeDataActionListener: function (callback) {
    this.removeListener(this._idActionChange, callback);
  },
  removeEventListener: function (eventId, callback) {
    this.removeListener(eventId, callback);
  },

});

module.exports = HexStore;