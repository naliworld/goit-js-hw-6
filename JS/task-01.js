const listEl = document.querySelectorAll(".item");

console.log(`Number of categories:`, listEl.length);

listEl.forEach((el)  => {
  console.log(`Categories:`, el.firstElementChild.textContent);
  console.log(`Elements:`, el.lastElementChild.children.length);
});
