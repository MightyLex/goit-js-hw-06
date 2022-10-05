const inputRef = document.querySelector('#font-size-control')
const textRef = document.querySelector('#text')
inputRef.addEventListener('input', () => {
    // console.log(inputRef.value);
    
    textRef.style.fontSize = inputRef.value + 'px'
})