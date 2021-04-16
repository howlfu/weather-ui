
var timerIndex = 1;
let sel_id = 'announce-ind-item-sel';
$(document).ready(function(){
  tryToPainPie()
  loopDot(timerIndex);
   setInterval(() => {
    timerIndex++;
    if (timerIndex>6) {
      timerIndex = 1;
    }
    loopDot(timerIndex);
    
   }, 5000);
  console.log( "ready!" );
});

$( window ).resize(function() {
  tryToPainPie();
});

function tryToPainPie() {
  paintHot([80,20], ['#00478a', '#95b524'], ['', '20']);
}

function paintHot(vauleAry, colorAry, labelAry) {
  var cv_humi = document.getElementById('humi-pie'); 
  var ctx = cv_humi.getContext('2d');
  //clear before draw for resize
	ctx.clearRect(0, 0, cv_humi.width, cv_humi.height);
  var lastend = 0;
  var myTotal = 0;

  for(var e = 0; e < vauleAry.length; e++)
  {
    myTotal += vauleAry[e];
  }
  let divElem = $("#humi-div")
  var rFator = divElem.width()
  if(divElem.width() > divElem.height()){
    rFator = divElem.height()
  }
  let r = rFator / 2 - 30
  var centerW = (divElem.width()) / 2;
  var centerH = (divElem.height()) / 2
  for (var i = 0; i < vauleAry.length; i++) {
    ctx.fillStyle = colorAry[i];
    ctx.strokeStyle ='white';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(centerW,centerH);
    var len =  (vauleAry[i]/myTotal) * 2 * Math.PI
    ctx.arc(centerW , centerH, r, lastend,lastend + len,false);
    ctx.lineTo(centerW,centerH);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle ='white';
    ctx.font = "20px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    var mid = lastend + len / 2
    ctx.fillText(labelAry[i],centerW + Math.cos(mid) * (r/2) , centerH + Math.sin(mid) * (r/2));
    lastend += Math.PI*2*(vauleAry[i]/myTotal);
  }
}

function loopDot(index) {
  let dotId = "#ind-" + index;
  var lastDotId =  "#ind-" + (index - 1);
  if(index == 1) {
    lastDotId =  "#ind-" + 6;
  }
  $(dotId).addClass(sel_id);
  $(lastDotId).removeClass(sel_id)
}