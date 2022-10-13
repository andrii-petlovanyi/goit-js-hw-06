const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// === CreateElements ==
// тут зробив без шаблонів

const mainList = document.querySelector(".gallery");

// for (let image of images) {
//   const item = document.createElement('li');
//   const imageItem = document.createElement('img');
//   imageItem.src = image.url;
//   imageItem.alt = image.alt;
//   item.append(imageItem);
//   mainList.append(item);
// }

// ===Create Template ==
//  додавання на кожній ітерації

// for (let image of images) {
//   mainList.insertAdjacentHTML('beforeend', `
//   <li>
//     <img src=${image.url} alt=${image.alt}/>
//   </li>
//   `);
// }

// === аось тут з шаблонами, як просили в дз ===

// const makeListImgMarkup = ({ url, alt }) => {
//   return `
//   <li class='gallery__item'>
//     <img src=${url} alt="${alt}"/>
//   </li>
//   `;
// };

// const makeListImagesValueMarkup = images.map(makeListImgMarkup).join("");
// mainList.insertAdjacentHTML("beforeend", makeListImagesValueMarkup);

// === Reduce ====
const galleryMarkup = images.reduce(
  (prev, { url, alt }) =>
    prev +
    `
  <li class='gallery__item'>
    <img src=${url} alt="${alt}"/>
  </li>
  `,
  ""
);

mainList.insertAdjacentHTML("beforeend", galleryMarkup);
