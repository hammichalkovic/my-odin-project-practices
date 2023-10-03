let operator = '';

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

function toAdd(num1, num2) {
    return num1 + num2;
}

function toSubtract(num1, num2) {
    return num1 - num2;
}

function toMultiply(num1, num2) {
    return num1 * num2; 
}

function toDivide(num1, num2) {
    return num1 / num2;
}