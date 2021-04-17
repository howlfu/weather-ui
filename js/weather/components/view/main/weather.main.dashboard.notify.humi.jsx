import React, { useState, useEffect } from 'react';
const MODULE_ID = 'DashboardNotifyHumi';
// var _timeHandler;
function DashboardNotifyHumi() {
  // const [date, checkTime] = useState(new Date());
  useEffect(function () {
    tryToPainPie();
  });

  return (
    <div class="main-notify-item notify-item-humi-bk">
      <div class="notify-item-humi notify-item-detail notify-item-text">濕度</div>
      <div class="canvas-item" id="humi-div">
        <canvas id="humi-pie" ></canvas>
      </div>
    </div>
  );
}

function tryToPainPie() {
  paintHot([80, 20], ['#00478a', '#95b524'], ['', '20']);
}

function paintHot(vauleAry, colorAry, labelAry) {
  var cv_humi = document.getElementById('humi-pie');
  var ctx = cv_humi.getContext('2d');
  //clear before draw for resize
  ctx.clearRect(0, 0, cv_humi.width, cv_humi.height);
  var lastend = 0;
  var myTotal = 0;

  for (var e = 0; e < vauleAry.length; e++) {
    myTotal += vauleAry[e];
  }
  var divElem = document.getElementById('humi-div')
  var rFator = divElem.offsetWidth;
  if (divElem.offsetWidth > divElem.offsetHeight) {
    rFator = divElem.offsetHeight
  }
  let r = rFator / 2 - 30
  var centerW = (divElem.offsetWidth) / 2;
  var centerH = (divElem.offsetHeight) / 2
  for (var i = 0; i < vauleAry.length; i++) {
    ctx.fillStyle = colorAry[i];
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(centerW, centerH);
    var len = (vauleAry[i] / myTotal) * 2 * Math.PI
    ctx.arc(centerW, centerH, r, lastend, lastend + len, false);
    ctx.lineTo(centerW, centerH);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = 'white';
    ctx.font = "20px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    var mid = lastend + len / 2
    ctx.fillText(labelAry[i], centerW + Math.cos(mid) * (r / 2), centerH + Math.sin(mid) * (r / 2));
    lastend += Math.PI * 2 * (vauleAry[i] / myTotal);
  }
}

export default DashboardNotifyHumi;
