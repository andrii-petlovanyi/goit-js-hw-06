const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const obj = {};
  const formData = new FormData(event.currentTarget);
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  if (email.length && password.length) {
    formData.forEach((value, name) => {
      console.log(`${name} : ${value}`);
    });
    // formData.forEach((value, name) => {
    //   obj[name] = value;
    // });
    // console.log(obj);
    // console.log(formData);
    form.reset();
  } else {
    alert("Заповніть, будь ласка, всі поля форми!");
  }
}
