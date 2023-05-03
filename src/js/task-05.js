const refs = {
  inputName: document.querySelector("#name-input"),
  outputName: document.querySelector("#name-output"),
};

refs.inputName.addEventListener("input", onInputNameChange);

function onInputNameChange() {
  refs.outputName.textContent = refs.inputName.value
    ? refs.inputName.value
    : "Anonymous";
}
