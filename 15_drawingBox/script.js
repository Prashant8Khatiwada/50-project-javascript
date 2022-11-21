const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
// to increase or decrease size
const color = document.getElementById("color");
const clear = document.getElementById("clear");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const span = document.getElementById("size");
let size = 10;
let defaultColor = color.value;
let x;
let y;
let isPressed = false;

// color.addEventListener("change", () => {
//   let defaultColor = color.value;
// });
// to increase size
increase.addEventListener("click", () => {
  if (size < 40) {
    size = size + 5;
  }
  span.innerText = size;
});
// to decrease size
decrease.addEventListener("click", () => {
  if (size > 5) {
    size = size - 5;
  }
  span.innerText = size;
});

//to clear screen
// clear.addEventListener("click", window.locate.reload());

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});
canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});
canvas.addEventListener("mousemove", (e) => {
  if (isPressed === true) {
    x2 = e.offsetX;
    y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = defaultColor;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = defaultColor;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
