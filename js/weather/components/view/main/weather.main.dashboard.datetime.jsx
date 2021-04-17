import React, { useState, useEffect } from 'react';

var ClockHelper = require('../../../helper/clock.helper');
const MODULE_ID = 'DashBoardDateTime';
var _timeHandler;
function DashboardDatetime() {
  const [date, checkTime] = useState(new Date());
  useEffect(function () {
    _timeHandler = setInterval(checkTime(new Date()), 30 * 1000);
    return function cleanup() {
      setTimeout(_timeHandler);
    }
  });
  return (
    <div className='main-date-time'>
      <div className='main-time'>{ClockHelper.getHourMinuteString(date)}</div>
      <div className='main-date'>{ClockHelper.getDateWeekdayStringEn(date)}</div>
    </div>
  );
}

export default DashboardDatetime;
