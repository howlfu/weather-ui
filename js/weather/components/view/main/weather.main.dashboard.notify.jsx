import React, { useState, useEffect } from 'react';
const MODULE_ID = 'DashboardNotify';
import DashboardNotifyHot from './weather.main.dashboard.notify.hot';
import DashboardNotifyCold from './weather.main.dashboard.notify.cold';
import DashboardNotifyHumi from './weather.main.dashboard.notify.humi';

// var _timeHandler;
function DashboardNotify() {
  // const [date, checkTime] = useState(new Date());
  // useEffect(function () {
  //   _timeHandler = setInterval(checkTime(new Date()), 30 * 1000);
  //   return function cleanup() {
  //     setTimeout(_timeHandler);
  //   }
  // });
  return (
    <div class="main-notify-container" >
      <div class="main-notify">
        <React.Fragment>
          <DashboardNotifyHot />
          <DashboardNotifyCold />
          <DashboardNotifyHumi />
        </React.Fragment>
      </div>
    </div >
  );
}

export default DashboardNotify;
