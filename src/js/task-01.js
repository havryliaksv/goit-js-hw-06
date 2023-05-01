const getCountListItem = (listSelector) =>
  !document.querySelector(listSelector)
    ? 0
    : document.querySelector(listSelector).children.length;

console.log(`Number of categories: ${getCountListItem("#categories")}`);
