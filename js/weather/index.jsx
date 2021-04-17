var React = require('react');
var createReactClass = require('create-react-class');
var ReactDOM = require('react-dom');
import WeatherApp from './components/weather.app';
const MODULE_ID = 'INDEX';

ReactDOM.render(<WeatherApp />,
  document.getElementById('content')
);