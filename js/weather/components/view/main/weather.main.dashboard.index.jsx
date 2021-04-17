import React, { useState, useEffect } from 'react';

var ClockHelper = require('../../../helper/clock.helper');
const MODULE_ID = 'DashboardIndex';
// var _timeHandler;
function DashboardIndex(props) {
  // const [date, checkTime] = useState(new Date());
  // useEffect(function () {
  //   _timeHandler = setInterval(checkTime(new Date()), 30 * 1000);
  //   return function cleanup() {
  //     setTimeout(_timeHandler);
  //   }
  // });
  return (
    <div class="announce-ind">
      <div id="ind-1" class='announce-ind-item announce-ind-item-sel'></div>
      <div id="ind-2" class='announce-ind-item'></div>
      <div id="ind-3" class='announce-ind-item'></div>
      <div id="ind-4" class='announce-ind-item'></div>
      <div id="ind-5" class='announce-ind-item'></div>
      <div id="ind-6" class='announce-ind-item'></div>
    </div>
  );
}

export default DashboardIndex;
