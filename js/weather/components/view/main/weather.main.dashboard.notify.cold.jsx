import React, { useState, useEffect } from 'react';
const MODULE_ID = 'DashboardNotifyCold';
// var _timeHandler;
function DashboardNotifyCold(props) {
  let tempMin = props.value | 0;
  useEffect(function () {
    let maxHeight = 60;
    let cssHeight = maxHeight - tempMin / 100 * maxHeight;
    var coldElem = document.getElementById('cold');
    coldElem.style.height = String(cssHeight) + '%'
  });
  return (
    <div class="main-notify-item notify-item-cold-bk">
      <div class="notify-item-cold notify-item-detail notify-item-text">低溫</div>
      <div class="bar-chart-item">
        <div class="bar-cold-background"></div>
        <div class="bar-cold-value" id='cold'>{tempMin}</div>
      </div>
    </div>
  );
}

export default DashboardNotifyCold;
