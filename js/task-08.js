const formLogin = document.querySelector("form.login-form");

formLogin.addEventListener("submit", onSubmitFormLogin);

// function onSubmitFormLogin(event) {
//   event.preventDefault();
//   const formElements = event.currentTarget.elements;
//   const email = formElements.email.value;
//   const password = formElements.password.value;
//   if (!email || !password) {
//     return alert("Всі поля форми мають бути заповнені!!!");
//   }

//   const formDataOut = { email, password };
//   console.log(formDataOut);
//   event.currentTarget.reset();
// }

function onSubmitFormLogin(event) {
  event.preventDefault();
  if (
    !event.currentTarget.elements.email.value ||
    !event.currentTarget.elements.password.value
  ) {
    return alert("Всі поля форми мають бути заповнені!!!");
  }
  const formData = new FormData(event.currentTarget);
  const formDataOut = {};
  formData.forEach((value, name) => {
    formDataOut[name] = value;
  });
  console.log(formDataOut);
  event.currentTarget.reset();
}
