// External Modules
var React = require('react');
var createReactClass = require('create-react-class');
import DashboardDatetime from './main/weather.main.dashboard.datetime'
//
var WeatherDashView = createReactClass({
  render: function () {
    return (<div className="main">
      <div class="main-page page-dashboard">
        <DashboardDatetime />
      </div>
    </div>);
  }
});
export default WeatherDashView;
