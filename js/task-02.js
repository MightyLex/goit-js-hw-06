const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const listEL = document.querySelector("#ingredients");

const products = [];

ingredients.forEach((ingredient) => {
  const listItemEl = document.createElement("li");

  listItemEl.textContent = ingredient;

  listItemEl.classList.add("item");

  products.push(listItemEl);
});

console.log(products);

// ingredients.map(ingredient => {
//   const listItemEl = document.createElement("li");

//   listItemEl.textContent = ingredient;

//   listItemEl.classList.add("item");

//   products.push(listItemEl);
// })

listEL.append(...products);
