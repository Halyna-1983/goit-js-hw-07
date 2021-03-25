// Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input), 
// підставляє його поточне значення в span#name-output. якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.


const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    
    if(event.currentTarget.value.length > 0){
        output.textContent = event.currentTarget.value;
        return;
    }  
    output.textContent ='незнайомець';
}

//**************************************************************** */

// Рішення Романа

// const input = document.querySelector('#name-input');
// const output = document.querySelector('#name-output');
// const defaultText = output.textContent;
// input.addEventListener('input', onInputChange);

// function onInputChange(event) {
//     console.log(event.currentTarget.value);  

//     if(event.currentTarget.value.length > 0){
//         output.textContent = event.currentTarget.value;
//     }else
//     {
//       output.textContent =defaultText;
//     }
// }

//************************************************************* */

// const inputRef = document.querySelector('#name-input');
// const outputRef = document.querySelector('#name-output');
// const changedText = (event) => {
//   if (event.target.value.length > 0) {
//     outputRef.textContent = event.target.value;
//   } else outputRef.textContent = "незнакомец";
// };

// inputRef.addEventListener("input", changedText);