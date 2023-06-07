const listEl = document.querySelectorAll(".item");

console.log(`Number of categories: `, 3);

listEl.forEach((el) =>
  console.log(`Category:  ${el.firstElementChild.textContent}`),
  console.log(`Elements: `, 12)
);