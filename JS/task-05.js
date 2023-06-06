const fieldInputEl = document.querySelector("#name-input");
const fieldOutputEl = document.querySelector("#name-output");

fieldInputEl.addEventListener("input", onInputValueField);

function onInputValueField(event) {
  event.preventDefault;

  fieldOutputEl.textContent = event.currentTarget.value;
  
  if (event.currentTarget.value === "") {
    fieldOutputEl.textContent = "Anonymous";
  }
}