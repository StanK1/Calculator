let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        handleInput(e.target.innerText);
    });
});

// Handle keyboard input
document.addEventListener('keydown', (e) => {
    let validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', '(', ')', 'Enter', 'Backspace'];
    if (validKeys.includes(e.key)) {
        if (e.key === 'Enter') {
            handleInput('=');
        } else if (e.key === 'Backspace') {
            handleInput('←');
        } else {
            handleInput(e.key);
        }
    }
});

function handleInput(input) {
    switch (input) {
        case 'C':
            display.innerText = '';
            break;
        case '0':
            if (display.innerText === '') {
                break;
            }
            display.innerText += '0';
            break;
        case '=':
            let result;
            try {
                result = eval(display.innerText);
            } catch {
                display.innerText = "Error";
                break;
            }
            if (result === Infinity || result === -Infinity) {
                display.innerText = "Error: Division by 0";
            } else {
                display.innerText = result;
            }
            break;
        case '←':
            if (display.innerText) {
                display.innerText = display.innerText.slice(0, -1);
            }
            break;
        default:
            display.innerText += input;
    }
}
