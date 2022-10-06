const categoriesRef = document.querySelector("#categories");
const catListRef = categoriesRef.querySelectorAll(".item");


console.log("Number of categories: ", catListRef.length);

catListRef.forEach((element) => {
    const category = element.children[0].textContent;
    console.log("Category: ",category);

    const amount = element.children[1].children.length;
    console.log("Elements: ", amount);
    
});

// console.log("Category: ", catListRef[0].children[0].textContent);
// const animalsList = catListRef[0].children[1];
// console.log("Elements: ", animalsList.children.length);

// console.log("Category: ", catListRef[1].children[0].textContent);
// const productList = catListRef[1].children[1];
// console.log("Elements: ", productList.children.length);

// console.log("Category: ", catListRef[2].children[0].textContent);
// const tehnologiesList = catListRef[2].children[1];
// console.log("Elements: ", tehnologiesList.children.length);
