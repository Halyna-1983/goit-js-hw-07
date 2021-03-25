// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.


const createBoxes = amount => {
    console.log('text2');
    console.log(amount);

    const divContainerElement = document.querySelector('div#boxes');
    let divWidth = 30;
    let divHeight = 30;
    let colorR = 0;
    let colorG = 0;
    let colorB = 0;

    //let template = `<li><img src="${imgElement.url}" alt="${imgElement.alt}" class="myImg"></li>`;

    for (let i = 0; i < amount; i+=1) {
        colorR = getRandomColor();
        colorG = getRandomColor();
        colorB = getRandomColor();
        const divEl = document.createElement('div');
        divEl.style.width = divWidth+"px";
        divEl.style.height = divHeight+"px";
        divEl.style.backgroundColor = `rgb(${colorR},${colorG},${colorB})`;

        divWidth += 10;
        divHeight += 10;
        divContainerElement.append(divEl);
      }
}

const getRandomColor =() => {
    return Math.floor(Math.random() * Math.floor(255));

}
const destroyBoxes = () => {
    const divContainerElement = document.querySelector('div#boxes');
    divContainerElement.innerHTML = '';
}

const renderBtn = document.querySelector('[data-action="render"]'); 
renderBtn.addEventListener('click', renderEvent);
function renderEvent() {
     const amountInput = document.querySelector('#controls input');
     createBoxes (amountInput.value) ; 
    console.log('text1');
   }
    
   
   const destroyBtn = document.querySelector('[data-action="destroy"]');
   destroyBtn.addEventListener('click', destroyEvent);
   function destroyEvent() {
    destroyBoxes();
  }



