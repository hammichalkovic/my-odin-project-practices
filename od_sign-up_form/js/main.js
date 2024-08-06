let firstName = document.getElementById('first_name'),
    lastName = document.getElementById('last_name'),
    email = document.getElementById('email'),
    phoneNumber = document.getElementById('phone_number'),
    password = document.getElementById('password'),
    passwordConfrm = document.getElementById('confirm_password'),
    formArr = [firstName, lastName, email, phoneNumber, password, passwordConfrm],
    submit = document.getElementById('create_account'),
    myForm = document.getElementById('myform');

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

// formArr.forEach(widget => {

    
    
    
//     widget.addEventListener('focus', () => {
//         widget.validity.valid = true
//         .errorMessageSetting(widget, '');
        
        
//     })

// });

function toPerformFirstNameCheck() {
    if (firstName.value == '') {
        errorMessageSetting(firstName, '* Can\'t be empty');
    } else if (firstName.validity.patternMismatch) {
        errorMessageSetting(firstName, '* Letters only');
    } else {
        errorMessageSetting(firstName, '');
    }
}

function toPerformLastNameCheck() {
    if (lastName.value == '') {
        errorMessageSetting(lastName, '* Can\'t be empty');
    } else if (lastName.validity.patternMismatch) {
        errorMessageSetting(lastName, '* Letters only');
    } else {
        errorMessageSetting(lastName, '');
    }
}

function toPerformEmailCheck() {
    if (email.value == '') {
        errorMessageSetting(email, '* Can\'t be empty');
    } else if (email.validity.typeMismatch) {
        errorMessageSetting(email, '* Follow the email pattern');
    } else {
        errorMessageSetting(email, '');
    }
}

function toPerformPhoneCheck() {
    if (phoneNumber.value == '') {
        errorMessageSetting(phoneNumber, '* Can\'t be empty');
    } else if (phoneNumber.validity.patternMismatch) {
        errorMessageSetting(phoneNumber, '* Digits and plus sign only');
    } else if (phoneNumber.validity.tooShort) {
        errorMessageSetting(phoneNumber, '* Too short. 7 digits min');
    } else {
        errorMessageSetting(phoneNumber, '');
    }
}

function toPerformPasswordCheck() {
    if (password.value == '') {
        errorMessageSetting(password, '* Can\'t be empty');
    } else if (password.validity.patternMismatch) {
        errorMessageSetting(password, '* Digits and letters only');
    } else if (password.validity.tooShort) {
        errorMessageSetting(password, '* Too short. 8 digits min');
    } else if (password.value != passwordConfrm.value) {
        errorMessageSetting(password, '* Password must be equal to password check');
    } else {
        errorMessageSetting(password, '');
    }
}

function toPerformPasswordConfirmationCheck() {
    if (passwordConfrm.value == '') {
        errorMessageSetting(passwordConfrm, '* Can\'t be empty');
    } else if (passwordConfrm.validity.patternMismatch) {
        errorMessageSetting(passwordConfrm, '* Digits and letters only');
    } else if (passwordConfrm.validity.tooShort) {
        errorMessageSetting(passwordConfrm, '* Too short. 8 digits min');
    } else if (password.value != passwordConfrm.value) {
        errorMessageSetting(passwordConfrm, '* Password must be equal to password check');
    } else {
        errorMessageSetting(passwordConfrm, '');
    }
}

// firstName.addEventListener('input', () => {
//     if (firstName.value == '') {
//         errorMessageSetting(firstName, '* Can\'t be empty');
//     } else if (firstName.validity.patternMismatch) {
//         errorMessageSetting(firstName, '* Letters only');
//     } else {
//         errorMessageSetting(firstName, '');
//     }
// })

firstName.addEventListener('input', toPerformFirstNameCheck);
firstName.addEventListener('focusin', toPerformFirstNameCheck);
lastName.addEventListener('input', toPerformLastNameCheck);
lastName.addEventListener('focusin', toPerformLastNameCheck);
email.addEventListener('input', toPerformEmailCheck);
email.addEventListener('focusin', toPerformEmailCheck);
phoneNumber.addEventListener('input', toPerformPhoneCheck);
phoneNumber.addEventListener('focusin', toPerformPhoneCheck);
password.addEventListener('input', toPerformPasswordCheck);
password.addEventListener('focusin', toPerformPasswordCheck);
passwordConfrm.addEventListener('input', toPerformPasswordConfirmationCheck);
passwordConfrm.addEventListener('focusin', toPerformPasswordConfirmationCheck);

// firstName.addEventListener('focus', () => {
//     errorMessageSetting(firstName, '');
// })

// lastName.addEventListener('input', () => {
//     if (lastName.value == '') {
//         errorMessageSetting(lastName, '* Can\'t be empty');
//     } else if (lastName.validity.patternMismatch) {
//         errorMessageSetting(lastName, '* Letters only');
//     } else {
//         errorMessageSetting(lastName, '');
//     }
// })

// lastName.addEventListener('focus', () => {
//     errorMessageSetting(lastName, '');
// })

// submit.preventDefault();

submit.addEventListener('click', (e) => {
    toPerformFirstNameCheck();
    toPerformLastNameCheck();
    toPerformEmailCheck();
    toPerformPhoneCheck();
    toPerformPasswordCheck();
    toPerformPasswordConfirmationCheck();
    
    if (myForm.checkValidity() == false) {
        e.preventDefault();
    } 
})