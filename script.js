const hourElement = document.getElementById("hour");
const minElement = document.getElementById("minutes");
const secElement = document.getElementById("seconds");
const ampmElement = document.getElementById("ampm");

function updateClock(){
  let h = new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();
  let ampm = "AM";

  if(h > 12){
    h = h - 12;
    ampm = "PM"
  }

  h = h < 10 ? "0" + h : h;
  min = min < 10 ? "0" + min : min ;
  sec = sec < 10 ? "0" + sec : sec;

  hourElement.innerText = h;
  minElement.inneText = min;
  secElement.innerText = sec;
  ampmElement.innerText = ampm;

setTimeout(()=>{
updateClock()
}, 1000)

}
updateClock()