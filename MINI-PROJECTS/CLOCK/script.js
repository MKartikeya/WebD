const hour=document.querySelector(".hour");
const minute=document.querySelector(".min");
const second=document.querySelector(".sec");
function updateClock(){
    const currentDate=new Date();
    setTimeout(updateClock,1000);
    const hr= currentDate.getHours();
    const min=currentDate.getMinutes();
    const sec=currentDate.getSeconds();
    const hourDeg=((hr)/12)*360;
    const minDeg=(min/60)*360;
    hour.style.transform=`rotate(${hourDeg}deg)`
    minute.style.transform=`rotate(${minDeg}deg)`
    const secDeg=(sec/60)*360;
    second.style.transform=`rotate(${secDeg}deg)`
}
setInterval(updateClock, 1000);