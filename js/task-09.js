function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  refChangeColor: document.body,
  btnChangeColor: document.querySelector(".change-color"),
  textColorValue: document.querySelector(".color"),
};

refs.btnChangeColor.addEventListener("click", onClickBtnChangeColor);

function onClickBtnChangeColor() {
  const color = getRandomHexColor();
  refs.refChangeColor.style.backgroundColor = color;
  refs.textColorValue.textContent = color;
}
