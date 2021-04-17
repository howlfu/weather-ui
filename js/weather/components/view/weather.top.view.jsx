// External Modules
var React = require('react');
var createReactClass = require('create-react-class');
//
var WeatherTopView = createReactClass({
  render: function () {
    return (
      <div class="top-nav-bar">
        <div class="logo">Weather Signage</div>
        <div class="top-item top-item-api"></div>
        <div class="top-item top-item-wifi"></div>
      </div>
    )
  }
});
module.exports = WeatherTopView;
