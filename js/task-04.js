const counterValue = document.querySelector("#value");
const countBtnDecr = document.querySelector('[data-action="decrement"]');
const countBtnInc = document.querySelector('[data-action="increment"]');

countBtnDecr.addEventListener("click", () => {
  counterValue.textContent = parseInt(counterValue.textContent) - 1;
});

countBtnInc.addEventListener("click", () => {
  counterValue.textContent = parseInt(counterValue.textContent) + 1;
});
