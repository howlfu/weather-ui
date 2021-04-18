// External Modules
var React = require('react');
var createReactClass = require('create-react-class');
//
var WeatherBottView = createReactClass({
  componentDidMount() {
    var input = document.getElementById("site-id");
    input.addEventListener("keyup", function (event) {
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        let retStr = input.value;
        console.log(retStr)
        this.props.cb(retStr)
      }
    }.bind(this));
  },
  render: function () {
    return (
      <div class="bottom-nav-bar">
        <div class="bottom-item-container">
          <div class="bottom-item bottom-item-area">
            <input class="bottom-item-input" type="text" id="site-id" defaultValue="Taipei" />
          </div>
        </div>
      </div>
    )
  }
});
module.exports = WeatherBottView;
