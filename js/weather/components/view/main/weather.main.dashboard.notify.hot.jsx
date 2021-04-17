import React, { useState, useEffect } from 'react';
const MODULE_ID = 'DashboardNotifyHot';
// var _timeHandler;
function DashboardNotifyHot() {
  // const [date, checkTime] = useState(new Date());
  // useEffect(function () {
  //   _timeHandler = setInterval(checkTime(new Date()), 30 * 1000);
  //   return function cleanup() {
  //     setTimeout(_timeHandler);
  //   }
  // });
  return (
    <div class="main-notify-item notify-item-hot-bk">
      <div class="notify-item-hot notify-item-detail notify-item-text">高溫</div>
      <div class="bar-chart-item">
        <div class="bar-hot-background"></div>
        <div class="bar-hot-value">50</div>
      </div>
    </div>
  );
}

export default DashboardNotifyHot;
