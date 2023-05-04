const refs = {
  input: document.querySelector("#validation-input"),
};

refs.input.addEventListener("blur", onBlurInput);

function onBlurInput() {
  if (
    refs.input.value.length < Number(refs.input.getAttribute("data-length"))
  ) {
    if (!refs.input.classList.contains("invalid")) {
      refs.input.classList.add("invalid");
    }
    if (refs.input.classList.contains("valid")) {
      refs.input.classList.remove("valid");
    }
  } else {
    if (!refs.input.classList.contains("valid")) {
      refs.input.classList.add("valid");
    }
    if (refs.input.classList.contains("invalid")) {
      refs.input.classList.remove("invalid");
    }
  }
}
