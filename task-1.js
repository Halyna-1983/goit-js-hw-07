// Напиши скрипт, який виконає наступні операції.
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item. Вийде 'У списку 3 категорії.'.
// Для кожного елемента li.item в списку ul#categories, знайде і виведе в консоль текст заголовка елемента (тега h2) і кількість елементів в категорії (всіх вкладених в нього елементів li).
// Наприклад, для першої категорії вийде:
// Категорія: Тварини
// Кількість елементів: 4


const ulQuantityEl = document.querySelectorAll('#categories li.item');
//console.log(ulQuantityEl);
console.log(`У списку ${ulQuantityEl.length} категорії.`);




 const navTitleEl = document.querySelectorAll('.item');
 //console.log(navTitleEl);

const informationEl = navTitleEl => {
  const itemTextContent = navTitleEl.querySelector('h2');
  
  const itenLength = navTitleEl.querySelectorAll('li');
    console.log(`Категорія: ${itemTextContent.textContent}`);
    console.log(`Кількість елементів: ${itenLength.length}`)
}

console.log(navTitleEl.forEach(item => informationEl(item)));

//  const textTitle = navTitleEl.querySelectorAll('.item');
//  const numTextTitle = textTitle.forEach(title => {
//  console.log(`Категорія: ${textTitle.textContent}`);
//  });

//   const navLength = navTitleEl.querySelectorAll('ul');
//   const numLength = textTitle.forEach(title => {
//     console.log(`Кількість елементів: ${navLength.children.length}`);
//     });








// const asd = element => {
//     const textTitle = document.querySelector('h2');
//     console.log(`Категорія: ${textTitle.textContent}`);
   
//     const navLength = navTitle.querySelector('ul');
//     console.log(`Кількість елементів: ${navLength.children.length}`);
//  };


 

//  const textTitle = document.querySelector('h2');
//  console.log(`Категорія: ${textTitle.textContent}`);

//  const navLength = navTitle.querySelector('ul');
//  console.log(`Кількість елементів: ${navLength.children.length}`);






// const itemsLi = navItem.querySelectorAll('li');


// const navItem = document.querySelector('li.item');

// // console.log(navItem.h2);

// const itemsLi = navItem.querySelectorAll('li');

// const itemLength = itemsLi.length;


// //const firstElChild = elem.firstElementChild;

// console.log(`Категория: ${navTitle}`);
// console.log(navItem);
// console.log(itemsLi);
// console.log(itemLength);
// console.log(navItem.children.length);