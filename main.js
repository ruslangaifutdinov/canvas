var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var w = window.innerWidth;
var h = window.innerHeight;
canvas.width = w;
canvas.height = h;
ctx.strokeStyle = '#28d1fa';
ctx.lineWidth = 17;
ctx.lineCap = 'round';
ctx.shadowBlur = 15;
ctx.shadowColor = '#28d1fa';

function radius(degree) {
    var factor = Math.PI / 180;
    return degree * factor;
}

function render() {
    var now = new Date();
    var today = now.toDateString();
    var time = now.toLocaleDateString();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var milliseconds = now.getMilliseconds();
    var newSeconds = seconds + (milliseconds / 1000);

    //Background field
    gradient = ctx.createRadialGradient(250, 250, 5, 250, 250, 300);
    gradient.addColorStop(0, '#09303a');
    gradient.addColorStop(1, 'black');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);

    //Hours
    ctx.beginPath();
    ctx.arc(250, 350, 200, radius(270), radius((hours * 14) - 90));
    ctx.stroke();

    //Minutes
    ctx.beginPath();
    ctx.arc(250, 350, 170, radius(270), radius((minutes * 6) - 90));
    ctx.stroke();

    //Seconds
    ctx.beginPath();
    ctx.arc(250, 350, 140, radius(270), radius((newSeconds * 6) - 90));
    ctx.stroke();

    //Central Date
    ctx.font = "25px Arial bold";
    ctx.fillStyle = '#28d1fa';
    ctx.fillText(today, 175, 350);

    //Central Time
    ctx.font = "14px Arial";
    ctx.fillStyle = '#28d1fa';
    ctx.fillText(time, 175, 380);
}
setInterval(render, 40);
render();