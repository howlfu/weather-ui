// External Modules
var React = require('react');
var createReactClass = require('create-react-class');
//
var WeatherBottView = createReactClass({
  render: function () {
    return (
      <div class="bottom-nav-bar">
        <div class="bottom-item-container">
          <div class="bottom-item bottom-item-area">
            <input class="bottom-item-input" type="text" id="site-id" value="Taipei" />
          </div>
        </div>
      </div>
    )
  }
});
module.exports = WeatherBottView;
