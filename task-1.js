const navTitle = document.querySelector('h2');


const navItem = document.querySelector('li.item');

// console.log(navItem.h2);

const itemsLi = navItem.querySelectorAll('li');

const itemLength = itemsLi.length;


//const firstElChild = elem.firstElementChild;
console.log(navTitle);
 console.log(`Категория: ${navTitle}`);
console.log(navItem);
console.log(itemsLi);
console.log(itemLength);
console.log(navItem.children.length);