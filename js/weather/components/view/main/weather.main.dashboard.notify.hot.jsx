import React, { useState, useEffect } from 'react';
const MODULE_ID = 'DashboardNotifyHot';
// var _timeHandler;
function DashboardNotifyHot(props) {
  // const [date, checkTime] = useState(new Date());
  // useEffect(function () {
  //   _timeHandler = setInterval(checkTime(new Date()), 30 * 1000);
  //   return function cleanup() {
  //     setTimeout(_timeHandler);
  //   }
  // });
  let tempMax = props.value | 0
  return (
    <div class="main-notify-item notify-item-hot-bk">
      <div class="notify-item-hot notify-item-detail notify-item-text">高溫</div>
      <div class="bar-chart-item">
        <div class="bar-hot-background"></div>
        <div class="bar-hot-value">{tempMax}</div>
      </div>
    </div>
  );
}

export default DashboardNotifyHot;
