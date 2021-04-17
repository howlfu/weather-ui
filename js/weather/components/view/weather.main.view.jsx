// External Modules
var React = require('react');
var createReactClass = require('create-react-class');
var WeatherTopView = require('./weather.top.view');
var WeatherBottView = require('./weather.bottom.view');
import WeatherDashView from './weather.dash.view'
//
var WeatherMainView = createReactClass({
  render: function () {
    return (
      <React.Fragment>
        <WeatherTopView />
        <WeatherDashView />
        <WeatherBottView />
      </React.Fragment>

    )
  },

  _uiGetMainPage: function () {
    return (<div className="main">
      <div class="main-page page-dashboard">
      </div>
    </div>);
  }
});
export default WeatherMainView;
