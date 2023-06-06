const inputFont = document.querySelector("#font-size-control");
const textFontSize = document.querySelector("#text");

inputFont.addEventListener("input", () => {
  textFontSize.style.fontSize = `${inputFont.value}px`;
});