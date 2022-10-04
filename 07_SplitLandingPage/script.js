// for splitting page
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

left.addEventListener("mouseenter", () => {
  container.classList.remove("hover-right");
  container.classList.add("hover-left");
});
right.addEventListener("mouseenter", () => {
  container.classList.remove("hover-left");
  container.classList.add("hover-right");
});

// for search bar
const button = document.querySelector(".search-btn");
const search = document.querySelector(".search");
const input = document.querySelector(".input");

button.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});

// for blurry loading

const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".container");

let load = 0;
let int = setInterval(blurry, 15);
function blurry() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  loadText.innerHTML = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
  container.classList.remove("hover-right");
  container.classList.remove("hover-left");
}
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
