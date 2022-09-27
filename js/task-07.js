const refs = {
  input: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.input.addEventListener("input", function () {
  refs.text.style.fontSize = `${this.value}px`;
});
