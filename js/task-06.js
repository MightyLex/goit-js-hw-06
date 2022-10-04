const inputRef = document.querySelector('#validation-input')
const inputNeededLength = inputRef.dataset.length
console.log(inputNeededLength);

inputRef.addEventListener("blur", (event) => {
    if (Number(event.currentTarget.value.length) === Number(inputNeededLength)) {
        inputRef.classList.remove('valid', 'invalid')
        inputRef.classList.add('valid')
        console.log('ok');
    } else {
        inputRef.classList.remove('valid', 'invalid')
        inputRef.classList.add('invalid')
        console.log('bad');
    } 
})