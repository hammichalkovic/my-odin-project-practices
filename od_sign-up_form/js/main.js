let firstName = document.getElementById('first_name'),
    lastName = document.getElementById('last_name'),
    email = document.getElementById('email'),
    phoneNumber = document.getElementById('phone_number'),
    password = document.getElementById('password'),
    passwordConfrm = document.getElementById('confirm_password'),
    formArr = [firstName, lastName, email, phoneNumber, password, passwordConfrm],
    submit = document.getElementById('create_account');

    function errorMessageSetting(item, value) {
        item.setCustomValidity(value);
        item.nextElementSibling.textContent = item.validationMessage;
    }


// submit.addEventListener('click', () => {

//     formArr.forEach(item => {
//         if (item.validity.tooShort ) {
//             item.setCustomValidity('* Can\'t be empty');
//         } 

//         item.nextElementSibling.textContent == item.validationMessage;
//     })

// })

// submit.addEventListener('click', () => {

// })

formArr.forEach(widget => {

    
    
    widget.addEventListener('focus', () => {
        errorMessageSetting(widget, '');
    })

    

});

firstName.addEventListener('focusout', () => {
    if (firstName.value == '') {
        errorMessageSetting(firstName, '* Can\'t be empty');
    } else if (firstName.validity.patternMismatch) {
        errorMessageSetting(firstName, '* Letters only');
    } 
})

