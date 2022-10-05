function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const crtBtn = document.querySelector('button[data-create]')
const dstrBtn = document.querySelector('button[data-destroy]')
const amount = document.querySelector('input')
const boxArea = document.querySelector('#boxes')

