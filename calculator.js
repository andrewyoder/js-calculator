
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y==0) {
        return 'error';
    }
    return x / y;
}

function operate(x, operator, y) {
    console.log(`${x} ${operator} ${y}`);
    switch(operator) {
        case '+':
            return add(+x, +y);
            break;
        case '-':
            return subtract(+x, +y);
            break;
        case '*':
            y = (y !== '') ? y : 1;
            return multiply(+x, +y);
            break;
        case '/':
            y = (y !== '') ? y : 1;
            return divide(+x, +y);
            break;
        default:
            return x;
    }
}