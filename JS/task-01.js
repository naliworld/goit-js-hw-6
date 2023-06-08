const listEl = document.querySelectorAll(".item");

const getNumberOfItem = () => {
  quantityItem = listEl.length;
  console.log(`Number of categories: `, quantityItem);
}

listEl.forEach((el) =>
  console.log(`Category: `, el.firstElementChild.textContent),
  console.log(`Elements: `, el.lastElementChild.children.length)
);