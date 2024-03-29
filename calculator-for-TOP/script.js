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

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
            toCleanEntry();
            clearEntryButton.style.cssText = 'outline-style: none; ';

            setTimeout(toRestoreTheDefaultOutlineCEB, 200);

            function toRestoreTheDefaultOutlineCEB() {
                clearEntryButton.style.cssText = 'outline-style: outset'
            }
        } else if (e.key === '0') {
            toType0();
            button0.style.cssText = 'outline-style: none; ';

            setTimeout(toRestoreTheDefaultOutline0, 200);

            function toRestoreTheDefaultOutline0() {
                button0.style.cssText = 'outline-style: outset'
            }
        } else if (e.key === '1') {
            toType1();
            button1.style.cssText = 'outline-style: none; ';

            setTimeout(toRestoreTheDefaultOutline1, 200);

            function toRestoreTheDefaultOutline1() {
                button1.style.cssText = 'outline-style: outset'
            }
        }  else if (e.key === '2') {
            toType2();
            button2.style.cssText = 'outline-style: none; ';

            setTimeout(toRestoreTheDefaultOutline2, 200);

            function toRestoreTheDefaultOutline2() {
                button2.style.cssText = 'outline-style: outset'
            }
        } else if (e.key === '3') {
            toType3();
            button3.style.cssText = 'outline-style: none; ';

            setTimeout(toRestoreTheDefaultOutline3, 200);

            function toRestoreTheDefaultOutline3() {
                button3.style.cssText = 'outline-style: outset'
            }
        } else if (e.key === '4') {
            toType4();
            button4.style.cssText = 'outline-style: none; ';

            setTimeout(toRestoreTheDefaultOutline4, 200);

            function toRestoreTheDefaultOutline4() {
                button4.style.cssText = 'outline-style: outset'
            }
        } else if (e.key === '5') {
            toType5();
            button5.style.cssText = 'outline-style: none; ';

            setTimeout(toRestoreTheDefaultOutline5, 200);

            function toRestoreTheDefaultOutline5() {
                button5.style.cssText = 'outline-style: outset'
            }
        } else if (e.key === '6') {
            toType6();
            button6.style.cssText = 'outline-style: none; ';

            setTimeout(toRestoreTheDefaultOutline6, 200);

            function toRestoreTheDefaultOutline6() {
                button6.style.cssText = 'outline-style: outset'
            }
        } else if (e.key === '7') {
            toType7();
            button7.style.cssText = 'outline-style: none; ';

            setTimeout(toRestoreTheDefaultOutline7, 200);

            function toRestoreTheDefaultOutline7() {
                button7.style.cssText = 'outline-style: outset'
            }
        } else if (e.key === '8') {
            toType8();
            button8.style.cssText = 'outline-style: none; ';

            setTimeout(toRestoreTheDefaultOutline8, 200);

            function toRestoreTheDefaultOutline8() {
                button8.style.cssText = 'outline-style: outset'
            }
        } else if (e.key === '9') {
            toType9();
            button9.style.cssText = 'outline-style: none; ';

            setTimeout(toRestoreTheDefaultOutline9, 200);

            function toRestoreTheDefaultOutline9() {
                button9.style.cssText = 'outline-style: outset'
            }
        } else if (e.key === '-') {
            toTypeMinus();
            minusSign.style.cssText = 'outline-style: none; ';

            setTimeout(toRestoreTheDefaultOutlineMinus, 200);

            function toRestoreTheDefaultOutlineMinus() {
                minusSign.style.cssText = 'outline-style: outset'
            }
        } else if (e.key === '+') {
            toTypePlus();
            plusSign.style.cssText = 'outline-style: none; ';

            setTimeout(toRestoreTheDefaultOutlinePlus, 200);

            function toRestoreTheDefaultOutlinePlus() {
                plusSign.style.cssText = 'outline-style: outset'
            }
        } else if (e.key === '*') {
            toTypeMultiply();
            multiplySign.style.cssText = 'outline-style: none; ';

            setTimeout(toRestoreTheDefaultOutlineMultiply, 200);

            function toRestoreTheDefaultOutlineMultiply() {
                multiplySign.style.cssText = 'outline-style: outset'
            }
        } else if (e.key === '/') {
            toTypeDivide();
            divideSign.style.cssText = 'outline-style: none; ';

            setTimeout(toRestoreTheDefaultOutlineDivide, 200);

            function toRestoreTheDefaultOutlineDivide() {
                divideSign.style.cssText = 'outline-style: outset'
            }
        } else if (e.key === '.') {
            toTypePeriod();
            period.style.cssText = 'outline-style: none; ';

            setTimeout(toRestoreTheDefaultOutlinePeriod, 200);

            function toRestoreTheDefaultOutlinePeriod() {
                period.style.cssText = 'outline-style: outset'
            }
        } else if (e.key === 'Enter') {
            toTypeEqual();
            equalSign.style.cssText = 'outline-style: none; ';

            setTimeout(toRestoreTheDefaultOutlineEqual, 200);

            function toRestoreTheDefaultOutlineEqual() {
                equalSign.style.cssText = 'outline-style: outset'
            }
        }

    })
    
    // let arrayToCalculate = displayValue.split(' ');
   
  

    // let arrayWithOperators = arrayToCalculate.filter(item => item == '+' || item == '\u2212' || item == '\u00D7' || item == '\u00F7');



    function toCalculateIterationWithCondition() {
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
                result = (num1 * 10 + num2 * 10)/ 10;
                inputField.textContent = result + ' ' + arrayToCalculate[arrayToCalculate.length -1] + ' ';
                // arrayToCalculate = inputField.textContent;
                break;
            case '\u2212':
                result = (num1 * 10 - num2 * 10)/ 10;
                inputField.textContent = result + ' ' + arrayToCalculate[arrayToCalculate.length -1] + ' ';
                break;
            case '\u00D7':  
                result = (num1 * 10 * num2 * 10) /100;
                inputField.textContent = result + ' ' + arrayToCalculate[arrayToCalculate.length -1] + ' ';  
                break;   
            case '\u00F7':
                result = (num1 * 10 / num2 * 10);
                if ( num2 == 0) {
                    inputField.textContent = errorMsg;
                    setTimeout(clearRfrsh, 2000);
                } else if ( num2 != 0) {
                result = num1 / num2;
                inputField.textContent = result + ' ' + arrayToCalculate[arrayToCalculate.length -1] + ' ';
                };
                break;                  
        };

                resultVar = result;
                arrayToCalculate.splice(0, 3, resultVar);
                console.log(typeof result);
                // if (result.length > 15) {
                //     result = String(result).slice(0, 15) + '\n' + String(result).slice(15);
                // }
                displayValue = result + ' ' + arrayToCalculate[arrayToCalculate.length -1] + ' ';
                console.log(arrayToCalculate);
            };
    }

    function toType0() {
        inputField.textContent += 0;
        displayValue += 0;
        
    }

    button0.addEventListener('click', toType0);

    function toType1() {
        inputField.textContent += 1;
        displayValue += 1;
    }

    button1.addEventListener('click', toType1);

    function toType2() {
        inputField.textContent += 2;
        displayValue += 2;
    }

    button2.addEventListener('click', toType2);

    function toType3() {
        inputField.textContent += 3;
        displayValue += 3;
    }

    button3.addEventListener('click', toType3);

    function toType4() {
        inputField.textContent += 4;
        displayValue += 4;
    }

    button4.addEventListener('click', toType4);

    function toType5() {
        inputField.textContent += 5;
        displayValue += 5;
    }

    button5.addEventListener('click', toType5);

    function toType6() {
        inputField.textContent += 6;
        displayValue += 6;
    }

    button6.addEventListener('click', toType6);

    function toType7() {
        inputField.textContent += 7;
        displayValue += 7;
    }

    button7.addEventListener('click', toType7);

    function toType8() {
        inputField.textContent += 8;
        displayValue += 8;
    }

    button8.addEventListener('click', toType8);

    function toType9() {
        inputField.textContent += 9;
        displayValue += 9;
    }

    button9.addEventListener('click', toType9);

    function toTypePlus() {
        inputField.textContent += ' + ';
        displayValue += ' + ';
        toCalculateIterationWithCondition();
    }

    plusSign.addEventListener('click', toTypePlus);

    function toTypeMinus() {
        inputField.textContent += minusImage;
        displayValue += minusImage;
        toCalculateIterationWithCondition();
    }

    minusSign.addEventListener('click', toTypeMinus);

    function toTypeMultiply() {
        inputField.textContent += multyplyImage;
        displayValue += multyplyImage;
        toCalculateIterationWithCondition();
    }

    multiplySign.addEventListener('click', toTypeMultiply);

    function toTypeDivide() {
        inputField.textContent += divideImage;
        displayValue += divideImage;
        toCalculateIterationWithCondition();
    }

    divideSign.addEventListener('click', toTypeDivide);

    function toTypePeriod() {
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
            }  else if (periodOccurrencies.length < 1 && !arrayToCalculate[0].includes('.') && arrayToCalculate.length == 3) {
                inputField.textContent += '.';
                displayValue += '.';
            } else if (periodOccurrencies.length == 1 && !arrayToCalculate[0].includes('.') && arrayToCalculate.length == 3) {
                inputField.textContent += '';
                displayValue += '';
            } else if (periodOccurrencies.length == 2) {
                inputField.textContent += '';
                displayValue += '';
            }
    }

    period.addEventListener('click', toTypePeriod);

    function toCleanEntry() {

        let newValue = '';
        
        
        if(inputField.textContent.charAt(inputField.textContent.length - 1) == ' ') {
            newValue = inputField.textContent.slice(0, -3);
        } else {
            newValue = inputField.textContent.slice(0, -1);
        }

        inputField.textContent = newValue;
        displayValue = newValue;

        if (inputField.textContent == '') {
            clearRfrsh();
        }
    };

    clearEntryButton.addEventListener('click', toCleanEntry);

    let clearRfrsh = () => {
        inputField.textContent = '';
        displayValue = '';
        resultString = '';
        resultVar = 0;
        splitedDisplayArr = [];
        arrayToCalculate = [];
    }
   

    clearAllButton.addEventListener('click', clearRfrsh);

   

    function toTypeEqual() {
        arrayToCalculate = displayValue.split(' ');  
        // console.log(arrayToCalculate); 

    if (arrayToCalculate.length == 3 && arrayToCalculate[2] == '') {
        // clearAllButton();
        inputField.textContent = arrayToCalculate[0];
        displayValue = arrayToCalculate[0];
    } else if (arrayToCalculate.length == 3 && arrayToCalculate[0] == '' ) {
        inputField.textContent = '';
        displayValue = '';

    }
     else if (arrayToCalculate.length == 3 && arrayToCalculate[2] == '0' && arrayToCalculate[1] == '\u00F7'){
        inputField.textContent = errorMsg;
        setTimeout(clearRfrsh, 2000);
    }
      else {
        toCalculate();
    }
    }

    equalSign.addEventListener('click', toTypeEqual);


    
    operators.forEach(operator => {
        operator.addEventListener('click', toCalculateIterationWithCondition); 
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
                result = (num1 * 10  + num2 * 10) / 10;
                break;
            case '\u2212':
                result = (num1 * 10 - num2 * 10) / 10;
                break;
            case '\u00D7':  
                result = (num1 * 10 * num2 * 10) / 100;    
                break;   
            case '\u00F7':
                result = (num1 * 10) / (num2 * 10);
                break;                  
        };

            resultVar = result;
            arrayToCalculate.splice(0, 3, resultVar); 
            resultString = String(resultVar);   
            console.log(arrayToCalculate);




            // inputField.textContent = result;
            // inputField.textContent = resultString;
            
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







