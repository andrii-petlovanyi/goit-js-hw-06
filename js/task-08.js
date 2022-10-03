const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  if (email.length && password.length) {
    formData.forEach((value, name) => {
      console.log(`${name} : ${value}`);
      form.reset();
    });
  } else {
    alert("Заповніть, будь ласка, всі поля форми!");
  }
}
