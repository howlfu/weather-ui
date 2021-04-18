import React, { useState, useEffect } from 'react';
const MODULE_ID = 'DashboardNotifyCold';
// var _timeHandler;
function DashboardNotifyCold(props) {
  // const [date, checkTime] = useState(new Date());
  // useEffect(function () {
  //   _timeHandler = setInterval(checkTime(new Date()), 30 * 1000);
  //   return function cleanup() {
  //     setTimeout(_timeHandler);
  //   }
  // });
  let tempMin = props.value | 0
  return (
    <div class="main-notify-item notify-item-cold-bk">
      <div class="notify-item-cold notify-item-detail notify-item-text">低溫</div>
      <div class="bar-chart-item">
        <div class="bar-cold-background"></div>
        <div class="bar-cold-value">{tempMin}</div>
      </div>
    </div>
  );
}

export default DashboardNotifyCold;
