import React, { useState, useEffect } from 'react';
const MODULE_ID = 'DashboardNotifyCold';
// var _timeHandler;
function DashboardNotifyCold() {
  // const [date, checkTime] = useState(new Date());
  // useEffect(function () {
  //   _timeHandler = setInterval(checkTime(new Date()), 30 * 1000);
  //   return function cleanup() {
  //     setTimeout(_timeHandler);
  //   }
  // });
  return (
    <div class="main-notify-item notify-item-cold-bk">
      <div class="notify-item-cold notify-item-detail notify-item-text">低溫</div>
      <div class="bar-chart-item">
        <div class="bar-cold-background"></div>
        <div class="bar-cold-value">10</div>
      </div>
    </div>
  );
}

export default DashboardNotifyCold;
