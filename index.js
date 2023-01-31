let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
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
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});