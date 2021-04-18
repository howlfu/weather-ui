// External Modules
var React = require('react');
var createReactClass = require('create-react-class');
var WeatherTopView = require('./weather.top.view');
var WeatherBottView = require('./weather.bottom.view');
import WeatherDashView from './weather.dash.view'
//
var WeatherMainView = createReactClass({
  getInitialState: function () {
    return {
      cityName: 'Taipei'
    };
  },

  render: function () {
    return (
      <React.Fragment>
        <WeatherTopView />
        <WeatherDashView city={this.state.cityName} />
        <WeatherBottView cb={this.getInputCity} />
      </React.Fragment>

    )
  },
  getInputCity: function (name) {
    console.log('back city: %s', name)
    this.setState({ cityName: name })
  }
});
export default WeatherMainView;
