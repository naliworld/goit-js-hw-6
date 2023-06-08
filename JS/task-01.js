const listEl = document.querySelectorAll(".item");

const getNumberOfItem = () => {
  quantityItem =listEl.children.length;
  console.log(`Number of categories: `, quantityItem.length);
}

listEl.forEach((el) =>
  console.log(`Category: `, el.firstElementChild.textContent),
  console.log(`Elements: `, el.lastElementChild.children.length)
);