const mainList = document.querySelector('#categories');
console.log('Number of categories: ', mainList.childElementCount);
console.log('');
console.log('Category: ', mainList.children[0].firstElementChild.textContent);
console.log('Elements: ', mainList.children[0].lastElementChild.childElementCount);
console.log('');
console.log('Category: ', mainList.children[1].firstElementChild.textContent);
console.log('Elements: ', mainList.children[1].lastElementChild.childElementCount);
console.log('');
console.log('Category: ', mainList.children[2].firstElementChild.textContent);
console.log('Elements: ', mainList.children[2].lastElementChild.childElementCount);