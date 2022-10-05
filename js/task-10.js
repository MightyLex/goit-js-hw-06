function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const crtBtnRef = document.querySelector('button[data-create]')
const dstrBtnRef = document.querySelector('button[data-destroy]')
const inputRef = document.querySelector('input')
const boxAreaRef = document.querySelector('#boxes')


// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------

inputRef.addEventListener('change', (event) => {
  // zdes nado mb nado prosto target ?
  const quantity = event.currentTarget.value
  crtBtnRef.addEventListener("click", createBoxes(quantity))
  
})


function createBoxes(amount) {
  // console.log(amount);
  for (let i = 0; i < amount; i += 1) {
    // boxAreaRef.insertAdjacentHTML('afterbegin', '<div class="addedDiv">')
    const newDiv = document.createElement('div')
    const color = getRandomHexColor()
    newDiv.classList.add('addedDiv')

    const size = 30+10*i
    // console.log(size);
    newDiv.style.width = size +"px";
    newDiv.style.height = size +"px";
    newDiv.style.backgroundColor = color;  
    boxAreaRef.prepend(newDiv)
    
  }
}




dstrBtnRef.addEventListener('click', destroyBoxes)

function destroyBoxes() {
  boxAreaRef.innerHTML = ''
}