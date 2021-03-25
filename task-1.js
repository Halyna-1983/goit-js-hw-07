// Напиши скрипт, який виконає наступні операції.
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item. Вийде 'У списку 3 категорії.'.
// Для кожного елемента li.item в списку ul#categories, знайде і виведе в консоль текст заголовка елемента (тега h2) і кількість елементів в категорії (всіх вкладених в нього елементів li).
// Наприклад, для першої категорії вийде:
// Категорія: Тварини
// Кількість елементів: 4


// const ulQuantityEl = document.querySelectorAll('#categories li.item');
// //console.log(ulQuantityEl);
// console.log(`У списку ${ulQuantityEl.length} категорії.`);




//  const navTitleEl = document.querySelectorAll('.item');
//  //console.log(navTitleEl);

// const informationEl = navTitleEl => {
//   const itemTextContent = navTitleEl.querySelector('h2');
  
//   const itenLength = navTitleEl.querySelectorAll('li');
//     console.log(`Категорія: ${itemTextContent.textContent}`);
//     console.log(`Кількість елементів: ${itenLength.length}`)
// }

// console.log(navTitleEl.forEach(item => informationEl(item)));

//********************************************************* */

// Рішення Романа


const ulQuantityEl = document.querySelectorAll('#categories li.item');
// берем всі елементи "li" класу item що є нащадками (під елементом) лемента з ід categories
console.log(`У списку ${ulQuantityEl.length} категорії.`);
// оздруковуємо кількість елементів 


//  const navTitleElAll = document.querySelectorAll('.item');
//  тут беремо всі елементи з  класом item  і це не правильно ... так як в завданні прямо прописано "списку ul#categories" добавивши ще один список .. mycategories2 - скріпт не буде виконуватись праильно
// ти вже витягнула 
//   const ulQuantityEl = document.querySelectorAll('#categories li.item'); - то чому не оперувати з ними 
  
// одиним словом правильно буде  так 


const navCategoriesItemList = document.querySelectorAll('#categories li.item'); 
  //берем всі елементи "li" класу item що є нащадками (під елементом) лемента з ід categories  в даному випадку в нас буде масив з елементів ... ми розібємо цю випадайку categories на окремі елементи items i будем по черзі з ними оперувати 
console.log(`У списку ${navCategoriesItemList.length} категорії.`);


const informationEl = navTitleEl => {
//створюємо метод informationEl з параметром  navTitleEl (просто назва параметру) який буде передаватися в метод
  const itemTextContent = navTitleEl.querySelector('h2');
  // витягуємо елемент h2 з елементу що прийшов 
  const itenLength = navTitleEl.querySelectorAll('li');
  // витягуємо елемент li з елементу що прийшов   
    console.log(`Категорія: ${itemTextContent.textContent}`);
    console.log(`Кількість елементів: ${itenLength.length}`)
}

console.log(navCategoriesItemList.forEach(itemInList=> informationEl( itemInList )));
    // а тепер саме цікавіше .... з navCategoriesItemList пробігаємось по всіх елементах масиву і передаємо в метод informationEl



// виходить так пишу псевдокод 

//   navCategoriesItemList  це в нас масив з елементів 
// 1 -
//  <li class="item">
//               <h2>Тварини</h2>
         
//               <ul>
//                 <li>Кіт</li>
//                 <li>Хом'як</li>
//                 <li>Кінь</li>
//                 <li>Папуга</li>
//               </ul>
//             </li>

// 2 
//  <li class="item">
//               <h2>Продукти</h2>
         
//               <ul>
//                 <li>Хліб</li>
//                 <li>Петрушка</li>
//                 <li>Сир</li>
//               </ul>
//             </li>

// 3 .. і так далі 


// ми кажемо ...
// пробіжись по всіх елементах forEach і елемент який ти витягнув  itemInList (будьб  яка назва ) передай в метод  informationEl
// виходить візьметься елемет 1 
//   <li class="item">
//               <h2>Тварини</h2>
         
//               <ul>
//                 <li>Кіт</li>
//                 <li>Хом'як</li>
//                 <li>Кінь</li>
//                 <li>Папуга</li>
//               </ul>
//             </li>
// і передасться в   
//   informationEl
// там в свою чергу візьметься селектор h потім  li і все роздрукується
// потім візьметься елемент 2 і повториться операція

//****************************************************************************** */

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