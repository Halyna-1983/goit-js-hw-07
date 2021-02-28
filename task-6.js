// Напиши скрипт, який би при втраті фокуса на інпут, перевіряв його вміст на правильну кількість символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символів"
// />
// Скільки символів має бути в інпут, вказується в його атрибуті data-length.
// Якщо введена відповідна кількість, то border інпут стає зеленим,   якщо неправильне - червоним.
// Для додавання стилів, використовуй CSS-класи valid і invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const input = document.querySelector('#validation-input');
const length = Number(input.getAttribute("data-length"));


input.addEventListener('blur', onInputBlur);


function onInputBlur() {
        
    //console.dir(event.currentTarget.value)
    
    if(input.value.length === length){
        input.classList.add("valid");
        input.classList.remove("invalid");
        
        } else { 
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
};

//************************************************************************************** */
// const userInput = document.querySelector('#validation-input');
// const checkLength = Number(userInput.getAttribute('data-length'));

// const toValidate = (newEvent) => {
//     const measurement = newEvent.currentTarget.value.length;
//     if (measurement === checkLength) {
//         userInput.classList.remove('valid')
//         userInput.classList.remove('invalid')
//         userInput.classList.add('valid')

//     } else {
//         userInput.classList.remove('valid')
//         userInput.classList.remove('invalid')
//         userInput.classList.add('invalid')
//     }
// }
// userInput.addEventListener('change', toValidate);