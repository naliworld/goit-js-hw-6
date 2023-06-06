const InputEl = document.querySelector("#name-input");
const OutputEl = document.querySelector("#name-output");

InputEl.addEventListener("input", onInputValueField);

function onInputValueField(event) {
  event.preventDefault;

  OutputEl.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    OutputEl.textContent = "Anonymous";
  }
}