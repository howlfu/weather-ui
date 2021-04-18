import React, { useState, useEffect } from 'react';
const MODULE_ID = 'DashboardNotify';
import DashboardNotifyHot from './weather.main.dashboard.notify.hot';
import DashboardNotifyCold from './weather.main.dashboard.notify.cold';
import DashboardNotifyHumi from './weather.main.dashboard.notify.humi';
const checker = require('../../../helper/base.checker')
const GET_CITY_API = 'https://www.metaweather.com/api/location/search/?query='
const GET_WEATHER_API = 'https://www.metaweather.com/api/location/'
// var _timeHandler;
function DashboardNotify(props) {
  const [max, checkMax] = useState(50);
  const [min, checkMin] = useState(50);
  const [humi, checkHumi] = useState(50);
  useEffect(function () {
    fetchData(GET_CITY_API + props.city, function getId(queryRet) {
      if (checker.isAry(queryRet)) {
        let id = queryRet[0].woeid;
        fetchData(GET_WEATHER_API + id, function getId(weather) {
          if (checker.isObj(weather)) {
            let todayData = weather.consolidated_weather[0];
            checkMax(todayData.max_temp);
            checkMin(todayData.min_temp);
            checkHumi(todayData.humidity);
            console.log('Today, Max %s, Min %s, Humi: %s', todayData.max_temp, todayData.min_temp, todayData.humidity)
          }
        })
      } else {
        console.log('fetch id fail')
      }
      ;
    });
  });
  return (
    <div class="main-notify-container" >
      <div class="main-notify">
        <React.Fragment>
          <DashboardNotifyHot value={max} />
          <DashboardNotifyCold value={min} />
          <DashboardNotifyHumi value={humi} />
        </React.Fragment>
      </div>
    </div >
  );
}

function fetchData(url, cb) {
  fetch(url, {})
    .then((response) => {
      console.log(response);
      return response.json();
    }).then((jsonData) => {
      console.log(jsonData);
      if (jsonData != null) {
        cb(jsonData)
      }
    }).catch((err) => {
      cb(null);
      console.log('錯誤:', err);
    });
}
export default DashboardNotify;
