// External Modules
var React = require('react');
var createReactClass = require('create-react-class');
import DashboardDatetime from './main/weather.main.dashboard.datetime'
import DashboardNotify from './main/weather.main.dashboard.notify'
import DashboardIndex from './main/weather.main.dashboard.index'
//
var WeatherDashView = createReactClass({
  render: function () {
    return (<div className="main">
      <div class="main-page page-dashboard">
        <React.Fragment>
          <DashboardDatetime />
          <DashboardNotify />
          <DashboardIndex />
        </React.Fragment>
      </div>
    </div>);
  }
});
export default WeatherDashView;
