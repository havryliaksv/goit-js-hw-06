const refs = {
  counter: document.querySelector("#value"),
  counterIncrement: document.querySelector('[data-action="increment"]'),
  counterDecrement: document.querySelector('[data-action="decrement"]'),
};
let counterValue = 0;

refs.counterIncrement.addEventListener("click", onClickIncrement);
refs.counterDecrement.addEventListener("click", onClickDecrement);

function onClickIncrement() {
  counterValue += 1;
  refs.counter.textContent = counterValue;
}

function onClickDecrement() {
  counterValue -= 1;
  refs.counter.textContent = counterValue;
}
