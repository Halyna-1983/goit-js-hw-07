// Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.

// Створи змінну counterValue в якій буде зберігається поточне значення   лічильника.
// Створи функції increment і decrement для збільшення і зменшення значення   лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу


// Відео Репети - Модуль 5, заняття 9, 1:53:23

const counterValueEl = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

console.log(counterValueEl);

let counterValue = 0;

function increment() {
 counterValue += 1;
 counterValueEl.textContent = counterValue;
}

incrementBtn.addEventListener('click', increment);

function decrement() {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
   }
   
decrementBtn.addEventListener('click', decrement);



