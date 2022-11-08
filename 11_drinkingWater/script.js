const glass = document.querySelectorAll(".glass");
const fill = document.getElementById("fill");
const remained = document.querySelector(".remaining");
const litre = document.querySelector(".litre");

updateBigCup();
glass.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});

function highlightCups(idx) {
  glass.forEach((cup, idx2) => {
    if (idx === idx2) {
      cup.classList.toggle("full");
    }
  });
  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".glass.full").length;
  const allCups = glass.length;

  if (fullCups === 0) {
    fill.style.visibility = "hidden";
    fill.style.height = "0px";
  } else {
    fill.style.visibility = "visible";
    fill.style.height = `${(fullCups / allCups) * 240}px`;
    fill.innerText = `${(fullCups / allCups) * 100}%`;
  }

  if (fullCups === allCups) {
    remained.style.visibility = "hidden";
  } else {
    remained.style.visibility = "visible";
    litre.innerText = `${2 - (250 * fullCups) / 1000}L Remaining`;
  }
  if (fullCups > 1) {
    remained.style.top = `${(allCups / fullCups) * 11}%`;
  }
}
