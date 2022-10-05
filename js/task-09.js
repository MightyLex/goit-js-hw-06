function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector(".change-color")
const spanRef = document.querySelector(".color")
const bodyRef = document.querySelector("body")

btnRef.addEventListener("click", onChangeColor)

function onChangeColor() {
  const color =  getRandomHexColor()
  // console.log(color);
  spanRef.textContent = color
  bodyRef.style.backgroundColor = color

}