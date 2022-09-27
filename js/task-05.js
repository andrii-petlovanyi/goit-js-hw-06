const refs = {
  input: document.querySelector("#name-input"),
  outputTxt: document.querySelector("#name-output"),
};

// === if/else ===

// refs.input.addEventListener("input", (event) => {
//   if (event.data) {
//     refs.outputTxt.textContent = event.currentTarget.value;
//   } else {
//     refs.outputTxt.textContent = "Anonymous";
//   }
// });

// === Ternary operator ===

refs.input.addEventListener("input", (event) => {
  refs.outputTxt.textContent = event.data
    ? event.currentTarget.value
    : "Anonymous";
});