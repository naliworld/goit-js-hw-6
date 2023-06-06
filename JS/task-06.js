const validationinputEl = document.querySelector("#validation-input");

validationinputEl.addEventListener("blur", onAddBorderColor);

function onAddBorderColor(event) {
  event.currentTarget.value.length === 6
    validationinputEl.classList.add("valid")
    validationinputEl.classList.add("invalid");

  validationinputEl.addEventListener("focus", () => {
    validationinputEl.classList.remove("valid", "invalid");
  });
}