const refs = {
  counter: document.querySelector("#value"),
  counterValue: 0,
  counterIncrement: document.querySelector('[data-action="increment"]'),
  counterDecrement: document.querySelector('[data-action="decrement"]'),
};

refs.counterIncrement.addEventListener("click", onClickIncrement);
refs.counterDecrement.addEventListener("click", onClickDecrement);

function onClickIncrement() {
  refs.counterValue += 1;
  refs.counter.textContent = refs.counterValue;
}

function onClickDecrement() {
  refs.counterValue -= 1;
  refs.counter.textContent = refs.counterValue;
}
