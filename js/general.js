
var timerIndex = 1;
let sel_id = 'announce-ind-item-sel';
$(document).ready(function(){
  var cv_hot = document.getElementById('hot-pie'); 
  var context = cv_hot.getContext('2d');
  loopDot(timerIndex);
   setInterval(() => {
    timerIndex++;
    loopDot(timerIndex);
    if (timerIndex>6) {
      timerIndex = 1;
    }
   }, 5000);
  console.log( "ready!" );
});

function loopDot(index) {
  let dotId = "#ind-" + index;
  var lastDotId =  "#ind-" + (index - 1);
  if(index == 1) {
    lastDotId =  "#ind-" + 6;
  }
  $(dotId).addClass(sel_id);
  $(lastDotId).removeClass(sel_id)
}