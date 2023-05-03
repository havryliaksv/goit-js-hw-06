const refs = {
  input: document.querySelector("#validation-input"),
};

refs.input.addEventListener("blur", onBlurInput);

function onBlurInput() {
  if (
    refs.input.value.length < Number(refs.input.getAttribute("data-length"))
  ) {
    refs.input.classList.add("invalid");
    refs.input.classList.remove("valid");
  } else {
    refs.input.classList.add("valid");
    refs.input.classList.remove("invalid");
  }
}
