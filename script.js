const display = document.getElementById('display');
let currentExpression = '';

function appendNumber(num) {
    currentExpression += num;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentExpression === '' && operator === '-') {
        currentExpression += operator;
    } else if (currentExpression !== '') {
        const lastChar = currentExpression.slice(-1);
        if (['+', '-', '*', '/'].includes(lastChar)) {
            currentExpression = currentExpression.slice(0, -1) + operator;
        } else {
            currentExpression += operator;
        }
    }
    updateDisplay();
}

function appendDecimal() {
    const parts = currentExpression.split(/[+\-*/]/);
    const lastPart = parts[parts.length - 1];
    
    if (!lastPart.includes('.')) {
        if (lastPart === '') {
            currentExpression += '0.';
        } else {
            currentExpression += '.';
        }
    }
    updateDisplay();
}

function clearDisplay() {
    currentExpression = '';
    updateDisplay();
}

function calculate() {
    try {
        currentExpression = eval(currentExpression).toString();
        updateDisplay();
    } catch (error) {
        currentExpression = 'Error';
        updateDisplay();
        setTimeout(clearDisplay, 1000);
    }
}

function updateDisplay() {
    display.value = currentExpression;
}