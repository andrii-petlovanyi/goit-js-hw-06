const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const mainList = document.querySelector("#ingredients");

const itemListArr = [];

for (let ingredient of ingredients) {
  const listItem = document.createElement("li");

  listItem.classList.add("item");
  listItem.textContent = ingredient;

  itemLisrArr.push(listItem);
}

mainList.append(...itemListArr);
