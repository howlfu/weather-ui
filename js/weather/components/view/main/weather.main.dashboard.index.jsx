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
  let selDotCss = ' announce-ind-item-sel'
  let norDotCss = 'announce-ind-item'
  var cssAry = []
  for (let index = 0; index < 6; index++) {
    cssAry[index] = norDotCss
    if (props.index == index) {
      cssAry[index] = cssAry[index] + selDotCss;
    }
  }
  return (
    <div class="announce-ind">
      <div id="ind-1" class={cssAry[0]}></div>
      <div id="ind-2" class={cssAry[1]}></div>
      <div id="ind-3" class={cssAry[2]}></div>
      <div id="ind-4" class={cssAry[3]}></div>
      <div id="ind-5" class={cssAry[4]}></div>
      <div id="ind-6" class={cssAry[5]}></div>
    </div>
  );
}

export default DashboardIndex;
