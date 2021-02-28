// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text 
// оновлюючи властивість font-size. В результаті при перетягуванні повзунка змінюватиметься розмір тексту.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const fontSizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

function fontSizeChange (event) {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
};

fontSizeEl.addEventListener('input', fontSizeChange);