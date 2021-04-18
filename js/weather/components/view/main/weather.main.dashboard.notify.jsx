import React, { useState, useEffect } from 'react';
const MODULE_ID = 'DashboardNotify';
import DashboardNotifyHot from './weather.main.dashboard.notify.hot';
import DashboardNotifyCold from './weather.main.dashboard.notify.cold';
import DashboardNotifyHumi from './weather.main.dashboard.notify.humi';
const checker = require('../../../helper/base.checker')
const GET_CITY_API = 'https://www.metaweather.com/api/location/search/?query='
const GET_WEATHER_API = 'https://www.metaweather.com/api/location/'
// var _timeHandler;
var previousData = null;
var prevCity = "";
function DashboardNotify(props) {
  const [max, checkMax] = useState(50);
  const [min, checkMin] = useState(50);
  const [humi, checkHumi] = useState(50);

  useEffect(function () {
    if (previousData != null && prevCity == props.city) {
      let showData = previousData[props.index];
      checkMax(showData.max_temp);
      checkMin(showData.min_temp);
      checkHumi(showData.humidity);
    } else {
      prevCity = props.city;
      previousData = null;
      fetchData(GET_CITY_API + props.city, function getId(queryRet) {
        if (checker.isAry(queryRet)) {
          let id = queryRet[0].woeid;
          fetchData(GET_WEATHER_API + id, function getId(weather) {
            if (checker.isObj(weather)) {
              previousData = weather.consolidated_weather;
              let showData = weather.consolidated_weather[0];
              checkMax(showData.max_temp);
              checkMin(showData.min_temp);
              checkHumi(showData.humidity);
              console.log('Today, Max %s, Min %s, Humi: %s', showData.max_temp, showData.min_temp, showData.humidity)
            }
          })
        } else {
          console.log('fetch id fail')
        };
      });
    }
  }, [props.city, props.index]);
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
