const btnIncrement = document.querySelector("[data-action = increment]");
const btnDecrement = document.querySelector("[data-action = decrement]");
const countervalue = document.querySelector("#value");

let value = 0;
btnIncrement.addEventListener("click", function () {
    value += 1; 
    countervalue.textContent = value 
    countervalue.style.color = 'blue'
});

btnDecrement.addEventListener("click", function () {
    countervalue.textContent -= 1;
    countervalue.style.color = 'red'
});