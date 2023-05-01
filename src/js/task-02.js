const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const makeMarkupIngredientCard = (ingredient) => {
  const ingredientRef = document.createElement("li");
  ingredientRef.textContent = ingredient;
  ingredientRef.classList.add("item");
  return ingredientRef;
};

const addMarkupIngredientList = (ingredientsListSelector, ingredientsArray) => {
  const listIngredientsRef = document.querySelector(ingredientsListSelector);
  listIngredientsRef
    ? listIngredientsRef.append(...ingredientsArray)
    : console.log(`Element "${ingredientsListSelector}" not found`);
};

const markupIngredientsList = ingredients.map(makeMarkupIngredientCard);
addMarkupIngredientList("#ingredients", markupIngredientsList);
