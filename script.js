setInterval(()=>{
    var date=new Date();
    console.log(date);
    var hour=date.getHours();
    console.log(hour);
    var minute=date.getMinutes();
    var second=date.getSeconds();
var hr=(hour % 12 + minute / 60) * 30;
var min=6*(minute+second/60);
var sec=6*second;
document.getElementById('hour').style.transform=`rotate(${hr}deg)`;
document.getElementById('min').style.transform=`rotate(${min}deg)`;
document.getElementById('sec').style.transform=`rotate(${sec}deg)`;
console.log(document.getElementById('sec').style.transform);
},1000)