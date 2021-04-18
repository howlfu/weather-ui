import React, { useState, useEffect } from 'react';
const MODULE_ID = 'DashboardNotifyHot';
// var _timeHandler;
function DashboardNotifyHot(props) {
  let tempMax = props.value | 0
  useEffect(function () {
    let maxHeight = 60;
    let cssHeight = maxHeight - tempMax / 100 * maxHeight;
    var coldElem = document.getElementById('hot');
    coldElem.style.height = String(cssHeight) + '%'
  });


  return (
    <div class="main-notify-item notify-item-hot-bk">
      <div class="notify-item-hot notify-item-detail notify-item-text">高溫</div>
      <div class="bar-chart-item">
        <div class="bar-hot-background"></div>
        <div class="bar-hot-value" id='hot'>{tempMax}</div>
      </div>
    </div>
  );
}

export default DashboardNotifyHot;
