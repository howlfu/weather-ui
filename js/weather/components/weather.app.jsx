// External Modules
var React = require('react');
var createReactClass = require('create-react-class');
//
import WeatherMainView from './view/weather.main.view';

const MODULE_ID = 'WeatherApp';
const MAIN_ID = 'MAIN';

var WeatherApp = createReactClass({
  render: function () {
    return <WeatherMainView />;
  }
});

export default WeatherApp;
