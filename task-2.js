// В HTML є пустий список ul#ingredients.
// Напиши скрипт, який для кожного елемента масиву ingredients
//  створить окремий li, після чого вставить всі li за одну операцію 
//  в список ul.ingredients. Для створення DOM-вузлів 
//  використовуй document.createElement().


const  ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  ];

  const ingredientsList = document.querySelector('#ingredients');

  const ingr = ingredients.map(option => {
    const ingredientsElement = document.createElement('li');
    ingredientsElement.textContent = option;

    return ingredientsElement;
  });


  console.log(ingr);

  ingredientsList.append(...ingr);
