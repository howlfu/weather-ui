// External Modules
var React = require('react');
var createReactClass = require('create-react-class');
var WeatherTopView = require('./weather.top.view');
var WeatherBottView = require('./weather.bottom.view');
import WeatherDashView from './weather.dash.view'
//
var _indexInterval;
var WeatherMainView = createReactClass({
  getInitialState: function () {
    let defaultCity = 'Taipei';
    this.getInputCity(defaultCity)
    return {
      cityName: defaultCity,
      index: 0
    };
  },

  render: function () {
    return (
      <React.Fragment>
        <WeatherTopView />
        <WeatherDashView city={this.state.cityName} index={this.state.index} />
        <WeatherBottView cb={this.getInputCity} />
      </React.Fragment>

    )
  },
  getInputCity: function (name) {
    clearInterval(_indexInterval);
    this.setState({ index: 0 })
    this.setState({ cityName: name })
    _indexInterval = setInterval(function addIndex() {
      var curIndex = this.state.index
      if (curIndex >= 5) {
        this.setState({ index: 0 })
      } else {
        curIndex++
        this.setState({ index: curIndex })
      }
    }.bind(this), 5000);
  }
});
export default WeatherMainView;
