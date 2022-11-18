const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);
for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
}

function dragStart() {
  console.log("drag start");
  fill.classList.add("hold");
}
function dragEnd() {
  console.log("drag End");
  fill.classList.remove("hold");
}

function dragOver() {
  console.log("drag Over");
}
function dragEnter() {
  console.log("drag Enter");
}
function dragLeave() {
  console.log("drag Leave");
}
function dragDrop() {
  console.log("drag Drop");
}
