const listEl = document.querySelectorAll(".item");

console.log(`Number of categories: `, listEl, 3);

listEl.forEach((el) =>
  console.log(`Category: `, el.firstElementChild.textContent),
  console.log(`Elements: `, el.lastElementChild.children.length)
);