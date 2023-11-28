let inputField = document.querySelector('.display'),
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
    multyplyImage = ' \u00D7 ',
    minusImage = ' \u2212 ',
    divideImage = ' \u00F7 ',
    operators = document.querySelectorAll('.operator'),
    almostEqual = '\u2248 ',
    errorMsg = 'ERROR!',
    periodSign = '.',
    splitedDisplayArr = [];


    let displayValue = '';
    displayValue += inputField.textContent;

    
    // let arrayToCalculate = displayValue.split(' ');
   
  

    // let arrayWithOperators = arrayToCalculate.filter(item => item == '+' || item == '\u2212' || item == '\u00D7' || item == '\u00F7');

    button0.addEventListener('click', () => {
        inputField.textContent += 0;
        displayValue += 0;
    });

    button1.addEventListener('click', () => {
        inputField.textContent += 1;
        displayValue += 1;
    });

    button2.addEventListener('click', () => {
        inputField.textContent += 2;
        displayValue += 2;
    });

    button3.addEventListener('click', () => {
        inputField.textContent += 3;
        displayValue += 3;
    });

    button4.addEventListener('click', () => {
        inputField.textContent += 4;
        displayValue += 4;
    });

    button5.addEventListener('click', () => {
        inputField.textContent += 5;
        displayValue += 5;
    });

    button6.addEventListener('click', () => {
        inputField.textContent += 6;
        displayValue += 6;
    });

    button7.addEventListener('click', () => {
        inputField.textContent += 7;
        displayValue += 7;
    });

    button8.addEventListener('click', () => {
        inputField.textContent += 8;
        displayValue += 8;
    });

    button9.addEventListener('click', () => {
        inputField.textContent += 9;
        displayValue += 9;
    });

    plusSign.addEventListener('click', () => {
        inputField.textContent += ' + ';
        displayValue += ' + ';
    });

    minusSign.addEventListener('click', () => {
        inputField.textContent += minusImage;
        displayValue += minusImage;
    });

    multiplySign.addEventListener('click', () => {
        inputField.textContent += multyplyImage;
        displayValue += multyplyImage;
        
    });

    divideSign.addEventListener('click', () => {
        inputField.textContent += divideImage;
        displayValue += divideImage;
    });

    period.addEventListener('click', () => {

        arrayToCalculate = inputField.textContent.split(' ');
        splitedDisplayArr = inputField.textContent.split('');
        periodOccurrencies = splitedDisplayArr.filter(item => item == '.');


            if (periodOccurrencies.length < 2 && arrayToCalculate[0].includes('.') && arrayToCalculate.length == 3) {
                inputField.textContent += '.';
                displayValue += '.';
            }  else if (periodOccurrencies.length < 2 && !arrayToCalculate[0].includes('.') && arrayToCalculate.length == 1) {
                inputField.textContent += '.';
                displayValue += '.';
            }  else if (periodOccurrencies.length < 2 && arrayToCalculate[0].includes('.') && arrayToCalculate.length == 1) {
                inputField.textContent += '';
                displayValue += '';
            }  else if (periodOccurrencies.length == 2) {
                inputField.textContent += '';
                displayValue += '';
            }

    });

    clearEntryButton.addEventListener('click', () => {

        let newValue = '';
        
        
        if(inputField.textContent.charAt(inputField.textContent.length - 1) == ' ') {
            newValue = inputField.textContent.slice(0, -3);
        } else {
            newValue = inputField.textContent.slice(0, -1);
        }

        inputField.textContent = newValue;
        displayValue = newValue;
    });

    clearAllButton.addEventListener('click', () => {
        inputField.textContent = '';
        displayValue = '';
        resultString = '';
        resultVar = 0;
        splitedDisplayArr = [];
        
    });

    let clearRfrsh = () => {
        inputField.textContent = '';
        displayValue = '';
        resultString = '';
        resultVar = 0;
    }

   

    equalSign.addEventListener('click', () => {
        
            arrayToCalculate = displayValue.split(' ');  
            console.log(arrayToCalculate);

        if (arrayToCalculate.length == 3 && arrayToCalculate[2] == '') {
            // clearAllButton();
            inputField.textContent = arrayToCalculate[0];
            displayValue = arrayToCalculate[0];
        } else if (arrayToCalculate.length == 3 && arrayToCalculate[0] == '' ) {
            inputField.textContent = '';
            displayValue = '';

        } else if (arrayToCalculate.length == 3 && arrayToCalculate[2] == '0') {
            inputField.textContent = errorMsg;
            setTimeout(clearRfrsh, 2000);
        }  else {
            toCalculate();
        }
    });

    
    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            arrayToCalculate = displayValue.split(' ');
            // arrayToCalculate[arrayToCalculate.length - 1] *= 1;
            
            while (arrayToCalculate.length > 3) {
                arrayToCalculate.pop();
                toCalculateIteration();
            };

            function toCalculateIteration() {
          
            let num1 = arrayToCalculate[0] *= 1,
            operator = arrayToCalculate[1],
            num2 = arrayToCalculate[2] *= 1,
            result = 0;
                    
            switch (operator) {
                case '+':
                    result = num1 + num2;
                    inputField.textContent = result + ' ' + arrayToCalculate[arrayToCalculate.length -1] + ' ';
                    // arrayToCalculate = inputField.textContent;
                    break;
                case '\u2212':
                    result = num1 - num2;
                    inputField.textContent = result + ' ' + arrayToCalculate[arrayToCalculate.length -1] + ' ';
                    break;
                case '\u00D7':  
                    result = num1 * num2;
                    inputField.textContent = result + ' ' + arrayToCalculate[arrayToCalculate.length -1] + ' ';  
                    break;   
                case '\u00F7':
                    //ACTUAL CODING AREA
                    if (num2 == 0) {
                        inputField.textContent = errorMsg;
                        setTimeout(clearRfrsh, 2000);
                    } else if ( num2 != 0) {
                    // ACTUAL CODING AREA
                    result = num1 / num2;
                    inputField.textContent = result + ' ' + arrayToCalculate[arrayToCalculate.length -1] + ' ';
                    };
                    break;                  
            };

                    resultVar = result;
                    arrayToCalculate.splice(0, 3, resultVar);
                    console.log(typeof result);
                    if (result.length > 15) {
                        result = String(result).slice(0, 15) + '\n' + String(result).slice(15);
                    }
                    displayValue = result + ' ' + arrayToCalculate[arrayToCalculate.length -1] + ' ';
                    console.log(arrayToCalculate);
                };
        });
       
        
    });

   function toCalculate() {
   
        resultVar = 0;
     
        arrayToCalculate = displayValue.split(' ');  

        for (let i = 0; i < arrayToCalculate.length; i++) {

        let num1 = arrayToCalculate[0] *= 1,
            operator = arrayToCalculate[1],
            num2 = arrayToCalculate[2] *= 1,
            result = 0;

        switch (operator) {
            case '+':
                result = num1 + num2;
                
                break;
            case '\u2212':
                result = num1 - num2;
                break;
            case '\u00D7':  
                result = num1 * num2;    
                break;   
            case '\u00F7':
                result = num1 / num2;
                break;                  
        };

            resultVar = result;
            arrayToCalculate.splice(0, 3, resultVar); 
            resultString = String(resultVar);   
            
         if (resultString.length > 15) {
            resultString = resultString.slice(0, 15) + '\n' + resultString.slice(15);
            inputField.textContent =  resultString;
            // console.log(inputField.textContent);
        } else if (resultString.length <= 15) {
            console.log(inputField.textContent);
            inputField.textContent = result;
        };

    };

    };







