// Напиши скрипт для створення галереї зображень по масиву даних.
// В HTML є список ul#gallery.
// <ul id="gallery"></ul>
// Використовуй масив об'єктів images для створення тегів img вкладених в li. Для створення розмітки використовуй шаблонні рядки і insertAdjacentHTML().

// Всі елементи галереї повинні додаватися в DOM за одну операцію вставки.
// Додай мінімальне оформлення галереї флексбоксами або грід через   css-класи.


const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  // ******************************************************************************
// Теоретично мав би добавляти 1 елемент, aле...

//   const option = galleryImages[0];

// const imageEl = document.createElement('img');
// imageEl.src = option.url;
// imageEl.textContent = option.alt;

// console.log(imageEl);
// ********************************************************************************


// Метод Old-school

// const imagesContainerElements = document.querySelector('#gallery');

// const elements = [];
// for(let i = 0; i < images.length; i+=1){
//   const option = images[i];
//    const imageEl = document.createElement('img');
//    imageEl.src = option.url;
//    imageEl.textContent = option.alt;
//    imageEl.width = 640;

// elements.push(imageEl);
// }

// console.log(elements);

// imagesContainerElements.append(...elements);
// ***************************************************************************************************


// Новий метод через .map()

// const imagesContainerElements = document.querySelector('#gallery');

// const elements = images.map(option => {
//   const imageEl = document.createElement('img');
//    imageEl.src = option.url;
//    imageEl.textContent = option.alt;
//    imageEl.width = 640;

//    return imageEl;
// }); 

// console.log(elements);

// imagesContainerElements.append(...elements);
//**************************************************************************************************** */


//Пишемо ФУНКЦІЮ для створення разметки фото

const imagesContainerElements = document.querySelector('#gallery');

const createImagesSection = (options) => {
 return options.map(option => {
  const imageEl = document.createElement('img');
   imageEl.src = option.url;
   imageEl.textContent = option.alt;
   imageEl.width = 450;
   imageEl.height = 250;

   return imageEl;
}); 
}

const elements = createImagesSection(images);
imagesContainerElements.append(...elements);

//********************************************************************************* */

//Рішення Романа 1

// const  imagesContainerElement = document.querySelector('#gallery');
// const insetImagefunction = (imgElement, parent) => {
// let template = `<li><img src="${imgElement.url}" alt="${imgElement.alt}" class="myImg"></li>`;
// console.log(template);
// parent.insertAdjacentHTML("afterend", template);
// };


// images.forEach(img=>insetImagefunction(img, imagesContainerElement));

//******************************************************** */

//Рішення Романа 2

const  imagesContainerElement = document.querySelector('#gallery');
const insetImagefunction = (imgElement) => {
let template = `<li><img src="${imgElement.url}" alt="${imgElement.alt}" class="myImg"></li>`;
return template;
};
let  fulltemplate='';

images.forEach(img=> fulltemplate+= insetImagefunction(img));
console.log(fulltemplate);
imagesContainerElement.insertAdjacentHTML("afterend", fulltemplate);



//****************************************************************************************************** */

// Пишемо ФУНКЦІЮ для створення карточки обєкта(елемента), а потім її можна застосувати до всього масиву
// десь помилка!!! Текс видає, фото ні (((


// ця строка повинна бути весь час
// const imagesContainerElements = document.querySelector('#gallery');

// const pictureEl = document.createElement('article');

// const srcEl = document.createElement('src');
// srcEl.src = images.url;

// const descriptionEl = document.createElement('alt')
// descriptionEl.textContent = images.alt;

// const widthEl = document.createElement('width');
// widthEl.width = 640;

// pictureEl.append(srcEl, descriptionEl, widthEl);

//console.log(pictureEl);

//console.log(images);

                      //    ||
                     //    \\//
// const makeImagesCard = image => {
//   const pictureEl = document.createElement('article');

//   const srcEl = document.createElement('src');
//   srcEl.src = images.url;

//   const descriptionEl = document.createElement('alt')
//   descriptionEl.textContent = images.alt;

//   const widthEl = document.createElement('width');
//   widthEl.width = 640;

//   pictureEl.append(srcEl, descriptionEl, widthEl);
// }
                      //    ||
                     //    \\//
// const makeImagesCard = ({url, alt, width}) => {
//   const pictureEl = document.createElement('article');

//   const srcEl = document.createElement('image');
//   srcEl.src = url;

//   const descriptionEl = document.createElement('alt')
//   descriptionEl.textContent = alt;

//   const widthEl = document.createElement('width');
//   widthEl.width = 640;

//   pictureEl.append(srcEl, descriptionEl, widthEl);

//   return pictureEl;
// }

// console.log(images);

// //console.log(makeImagesCard(images[2]));

//                       //    ||
//                      //    \\//

// const elements = images.map(makeImagesCard);
// console.log(elements);


// imagesContainerElements.append(...elements);

// Добавляє одне фото 

// galleryElement.src = 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// galleryElement.alt = 'White and Black Long Fur Cat';
// galleryElement.width = 640;
//   console.log(galleryElement);

//   document.body.append(galleryElement);
//******************************************************************************************************







