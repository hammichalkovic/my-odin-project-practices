let operator = '',
    inputField = document.querySelector('.display'),
    button1 = document.querySelector('.one'),
    button2 = document.querySelector('.two'),
    button3 = document.querySelector('.three'),
    button4 = document.querySelector('.four'),
    button5 = document.querySelector('.five'),
    button6 = document.querySelector('.six'),
    button7 = document.querySelector('.seven'),
    button8 = document.querySelector('.eight'),
    button9 = document.querySelector('.nine'),
    button0 = document.querySelector('.zero'),
    period = document.querySelector('.period'),
    equalSign = document.querySelector('.equal'),
    plusSign = document.querySelector('.plus'),
    minusSign = document.querySelector('.minus'),
    multiplySign = document.querySelector('.multiply'),
    divideSign = document.querySelector('.divide'),
    clearAllButton = document.querySelector('.clearall'),
    clearEntryButton = document.querySelector('.clearentry'),
    inputValue = inputField.textContent,
    multyplyImage = ' \u00D7 ',
    minusImage = ' \u2212 ',
    divideImage = ' \u00F7 ';


    

    button0.addEventListener('click', () => {
        inputField.textContent += 0;
    });

    button1.addEventListener('click', () => {
        inputField.textContent += 1;
    });

    button2.addEventListener('click', () => {
        inputField.textContent += 2;
    });

    button3.addEventListener('click', () => {
        inputField.textContent += 3;
    });

    button4.addEventListener('click', () => {
        inputField.textContent += 4;
    });

    button5.addEventListener('click', () => {
        inputField.textContent += 5;
    });

    button6.addEventListener('click', () => {
        inputField.textContent += 6;
    });

    button7.addEventListener('click', () => {
        inputField.textContent += 7;
    });

    button8.addEventListener('click', () => {
        inputField.textContent += 8;
    });

    button9.addEventListener('click', () => {
        inputField.textContent += 9;
    });

    plusSign.addEventListener('click', () => {
        inputField.textContent += ' + ';
    });

    minusSign.addEventListener('click', () => {
        inputField.textContent += minusImage;
    });

    multiplySign.addEventListener('click', () => {
        inputField.textContent += multyplyImage;
        
    });

    divideSign.addEventListener('click', () => {
        inputField.textContent += divideImage;
    });

    clearEntryButton.addEventListener('click', () => {

        let newValue = '';
        
        
        if(inputField.textContent.charAt(inputField.textContent.length - 1) == ' ') {
            newValue = inputField.textContent.slice(0, -3);
        } else {
            newValue = inputField.textContent.slice(0, -1);
        }

        inputField.textContent = newValue;
    });

    clearAllButton.addEventListener('click', () => {
        inputField.textContent = '';
    });

function toCalculate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '*':  
            return num1 * num2; 
            break;        
        case '/':
            return num1 / num2; 
            break;                  
    }
};
