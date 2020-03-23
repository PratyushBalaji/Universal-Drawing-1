const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;

canvas.addEventListener('mousedown', start);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stop);

window.addEventListener('resize', resizeCanvas);

function start(e){
    isDrawing = true;
}

function draw({clientX: x, clientY: y}){
    if(!isDrawing) return;
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#171717";

    ctx.lineTo(x, y)
    ctx.stroke();
}

function stop(){
    isDrawing = false;
    ctx.beginPath();
}

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();