'use strict';

// Constants and Types
var WeatherActionType = require('../type/weather.action.type');
var AppDispatcher = require('../dispatcher/weather.dispatcher');

var WeatherActions = {
  locatChange: function () {
    AppDispatcher.dispatch({
      actionType: WeatherActionType.LOCATION_CHANGE,
    });
  }
};

module.exports = WeatherActions;