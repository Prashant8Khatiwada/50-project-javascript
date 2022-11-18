const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);
for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

// runs when dragging starts
function dragStart() {
  //   fill.classList.add("hold");
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}

// runs when dragging stops
function dragEnd() {
  this.className = "fill";
}

// runs when draged over somethings
function dragOver(e) {
  e.preventDefault();
}

// runs when dragged image enter another box
function dragEnter() {
  this.className += " hovered";
}

// runs when dragged image leave other box
function dragLeave() {
  this.className = "empty";
}

// runs when dragged image is dropped
function dragDrop() {
  this.className = "empty";
  this.append(fill);
}
