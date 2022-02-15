let displayScreen = '0';

// display screens for current and previous calculations
const resultWindow = document.querySelector('#result');
const lastOperation = document.querySelector('#lastOperation');

// enable event listeners on all the buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        display(e.target.id);
        resultWindow.textContent = displayScreen;
    });
});

/**
 * Take the button pressed and add it as input
 * 
 * @param {string} button 
 */
function display(button) {
    if (button === 'equals') {
        lastOperation.textContent = displayScreen + ' = ' + calculateInput();
        displayScreen = '0';
        return;
    } else if (button === 'back') {
        // need to remove padding spaces if last input was an operator
        displayScreen = (displayScreen[displayScreen.length-1] === ' ') ? displayScreen.slice(0, -3) : displayScreen.slice(0, -1);
        // leave '0' instead of a blank display, if applicable
        displayScreen = (displayScreen.length > 0) ? displayScreen : '0';
        return;
    } else if (button === 'clear') {
        displayScreen = '0';
        return;
    } else if (displayScreen === '0') {
        displayScreen = '';
    }
    displayScreen = displayScreen + values.get(button);
    // console.log(displayScreen);
}

/**
 * Calculates the expression string when 'equals' button is pressed
 * 
 * @returns {number}
 */
function calculateInput() {
    let input = displayScreen.split(' ');
    let finalResult = input[0];

    let i = 1;
    while (i < input.length) {
        finalResult = operate(finalResult, input[i++], input[i++]);
        if (finalResult === 'error') {
            return 'yo, you can\'t divide by zero!';
        }
        // console.log(finalResult);
    }
    
    // clean up decimal places
    finalResult = finalResult.toString();
    if (finalResult.indexOf('.') !== -1) {
        finalResult = finalResult.substr(finalResult.indexOf('.'), 6);
        finalResult = (finalResult.indexOf('.') === 0) ? '0' + finalResult : finalResult;
    }
    return finalResult;
}

/**
 * Map linking each button id to its value
 */
const values = new Map([
    ['one', '1'],
    ['two', '2'],
    ['three', '3'],
    ['four', '4'],
    ['five', '5'],
    ['six', '6'],
    ['seven', '7'],
    ['eight', '8'],
    ['nine', '9'],
    ['zero', '0'],
    ['decimal', '.'],
    ['plus', ' + '],
    ['minus', ' - '],
    ['multiply', ' * '],
    ['divide', ' / '],
]);