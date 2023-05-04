function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector("#controls > input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  divBoxes: document.querySelector("#boxes"),
};

function createBoxes(amount) {
  let width = 30;
  let height = 30;
  let rowMarkup = ``;
  for (let i = 0; i < amount; i += 1) {
    rowMarkup += `<div style="width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()}"></div>`;
    width += 10;
    height += 10;
  }
  refs.divBoxes.innerHTML = rowMarkup;
  console.log(`Inserted ${amount} elements into "#boxes"`);
}

function destroyBoxes() {
  const countRemoveBoxes = refs.divBoxes.children.length;
  console.log(`Removed ${countRemoveBoxes} elements from "#boxes"`);
  refs.divBoxes.innerHTML = "";
}

refs.btnCreate.addEventListener("click", onClickBtnCreate);

function onClickBtnCreate() {
  const amount = refs.input.value ? refs.input.value : 0;
  createBoxes(amount);
}

refs.btnDestroy.addEventListener("click", onClickBtnDestroy);

function onClickBtnDestroy() {
  if (refs.divBoxes.children.length > 0) {
    destroyBoxes();
  }
}
