const getCountListItem = (listSelector) =>
  !document.querySelector(listSelector)
    ? 0
    : document.querySelector(listSelector).children.length;

console.log(`Number of categories: ${getCountListItem("#categories")}`);

const getDescriptionListCategories = () => {
  const listCategories = document.querySelector("#categories").children;
  [...listCategories].forEach((item) => {
    console.log(`Category: ${item.querySelector("h2").textContent}`);
    console.log(`Elements: ${item.querySelectorAll("ul li").length}`);
  });
};
getDescriptionListCategories();
