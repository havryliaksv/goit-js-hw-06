const getCountListItem = (listSelector) =>
  !document.querySelector(listSelector)
    ? 0
    : document.querySelector(listSelector).children.length;

console.log(`Number of categories: ${getCountListItem("#categories")}`);

const getDescriptionListCategories = () => {
  const listCategories = document.querySelector("#categories").children;

  [...listCategories].forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
  });
};
getDescriptionListCategories();

console.log(document.body.lastElementChild);
