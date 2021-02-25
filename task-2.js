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
