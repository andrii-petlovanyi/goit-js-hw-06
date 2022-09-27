function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('[type="number"]'),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

let boxSize = 30;

refs.destroyBtn.addEventListener("click", destroyBoxes);
refs.createBtn.addEventListener("click", createHandler);

function createHandler(amount) {
  amount = parseInt(refs.input.value);
  createBoxes(amount);
}

function createBoxes(amount) {
  const boxList = [];

  for (let i = 0; i <= amount; i += 1) {
    const boxMarkup = `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}"></div>`;
    boxSize += 10;
    boxList.push(boxMarkup);
  }

  refs.boxes.insertAdjacentHTML("beforeend", boxList.join(""));
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
  refs.input.value = "";
  boxSize = 30;
}
