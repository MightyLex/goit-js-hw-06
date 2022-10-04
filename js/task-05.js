const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');


nameInputRef.addEventListener('input', ()=> {

    if (nameInputRef.value) {        
        nameOutputRef.textContent = event.currentTarget.value
    }
    else nameOutputRef.textContent = "Anonymous"

})