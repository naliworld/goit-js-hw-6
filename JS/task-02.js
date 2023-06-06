const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

const elements = ingredients.map((el) => {
  
  const listEl = document.createElement("li");
  listEl.classList.add("item");
  listEl.textContent = el;
  return listEl;
});

ingredientsList.append(...elements);