function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorDescriptionEl = document.querySelector(".color");
const colorChangeButtonEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");

colorChangeButtonEl.addEventListener("click", () => {
  colorDescriptionEl.textContent = getRandomHexColor();

  bodyEl.style.backgroundColor = `${colorDescriptionEl.textContent}`;
});