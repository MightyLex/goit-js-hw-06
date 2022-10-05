const formRef = document.querySelector('.login-form')
// console.log(formRef);

formRef.addEventListener('submit', onFormSubmit)

function onFormSubmit (event){
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const userMail = formElements.email.value;
    const usePass = formElements.password.value;
    
    const formData = {
        UserMail: userMail,
        UserPassword: usePass,
    }

    if (userMail.length > 0 & usePass.length > 0) {
        
        console.log(formData);
        formRef.reset()
    
    } 
    else {console.log(alert("Нужно больше данных :D "))};

}