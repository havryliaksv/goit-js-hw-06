const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const makeIngredientCard = (ingredient) => {
  const ingredientRef = document.createElement("li");
  ingredientRef.textContent = ingredient;
  ingredientRef.classList.add("item");
  return ingredientRef;
};

const addIngredientListElements = (
  ingredientsListSelector,
  ingredientsArray
) => {
  const listIngredientsRef = document.querySelector(ingredientsListSelector);
  listIngredientsRef
    ? listIngredientsRef.append(...ingredientsArray)
    : console.log(`Element "${ingredientsListSelector}" not found`);
};

const ingredientsListElements = ingredients.map(makeIngredientCard);
addIngredientListElements("#ingredients", ingredientsListElements);
