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

  const abs = document.querySelector('#gallery')

  const makeGallery = options => {
return options.map(options => {
  const imagesElement = document.createElement('img');
  imagesElement.textContent = option.alt;

return imagesElement;
})
  }

// const galleryElement = document.createElement('#gallery');

// const asd = images.map(option => {
//     const imagesElement = document.createElement('img');
//     imagesElement.textContent = option;

//     return imagesElement;
// });

const element = makeGallery(images);
abs.append(...element);



// galleryElement.src = 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// galleryElement.alt = 'White and Black Long Fur Cat';
// galleryElement.width = 640;
//   console.log(galleryElement);

//   document.body.append(galleryElement);



