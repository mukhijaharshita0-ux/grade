let currentInput = '';  // a       //this is blank tohold the variables
let currentOperation = '';
let previousInput = ''; // b

function value(number) {               //function is call here with a name of value
    currentInput += number;
    document.getElementById('result').value = `${previousInput} ${currentOperation} ${currentInput}`;
}



document.getElementById('zero').onclick = () => value('0');        
document.getElementById('one').onclick = () => value('1');
document.getElementById('two').onclick = () => value('2');
document.getElementById('three').onclick = () => value('3');
document.getElementById('four').onclick = () => value('4');
document.getElementById('five').onclick = () => value('5');
document.getElementById('six').onclick = () => value('6');
document.getElementById('seven').onclick = () => value('7');
document.getElementById('eight').onclick = () => value('8');
document.getElementById('nine').onclick = () => value('9');
document.getElementById('dot').onclick = () => value('.');



// Operation buttons
function appendOperation(operate) {
    if (currentInput === '') return;
     if (previousInput !== '') {
        calculate();  
    }
    currentOperation = operate;
    previousInput = currentInput;
    currentInput = '';
    document.getElementById('result').value = `${previousInput} ${currentOperation}`;
}

function calculate() {
    if (previousInput === '' || currentInput === '') return;

    let prev = parseFloat(previousInput); //a
    let curr = parseFloat(currentInput);  //b
    let res;
        console.log(currentOperation);
    switch (currentOperation) {
        case '+':
            res = prev + curr;
            break;
        case '-':
            res = prev - curr;
            break;
        case '*':
            res = prev * curr;
            break;
        case '/':
            if (curr === 0) {
                alert("Cannot divide by zero");
                return;
            }
            res = prev / curr;
            break;
        default:
            return;
    }

   
    currentInput = res.toString(); //toString is used fpr appending the numbers (100-2=98+3=101;)
    previousInput = '';
    currentOperation = '';
    document.getElementById('result').value = currentInput;
}
document.getElementById('clear').onclick = () => {
    currentInput = '';
    previousInput = '';
    currentOperation = '';
    document.getElementById('result').value = '';
};
