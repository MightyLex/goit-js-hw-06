const plus = document.querySelector('button[data-action="increment"]');
const minus = document.querySelector('button[data-action="decrement"]');

console.log(plus.dataset);
console.log(minus.dataset);

const valueRef = document.querySelector("#value");
let counterValue = 0;


plus.addEventListener("click", () => {
    console.log("click +");
    counterValue += 1;
    console.log(counterValue);
    valueRef.textContent = counterValue
});

minus.addEventListener("click", () => {
    console.log("click -");
    counterValue -= 1;
    console.log(counterValue);
    valueRef.textContent = counterValue
});
