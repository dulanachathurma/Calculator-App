const dispaly =document.getElementById("display");


function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "0";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {

    let exp = display.value;
    let numbers = [];
    let operators = [];
    let current = "";

    for (let i = 0; i < exp.length; i++) {

        let ch = exp[i];

        switch (ch) {

            case "+":
            case "-":
            case "*":
            case "/":

            numbers.push(parseFloat(current));
            operators.push(ch);
            current = "";

            break;

            default:
                current += ch;
        }
    }

    numbers.push(parseFloat(current));

    for (let i = 0; i < operators.length; i++) {

        let result;

        switch (operators[i]) {

            case "*":

                result = numbers[i] * numbers[i + 1];
                numbers.splice(i, 2, result);
                operators.splice(i, 1);
                i--;
                break;

            case "/":

                result = numbers[i] / numbers[i + 1];
                numbers.splice(i, 2, result);
                operators.splice(i, 1);
                i--;
                break;
        }
    }

    let answer = numbers[0];

    for (let i = 0; i < operators.length; i++) {

        switch (operators[i]) {

        case "+":
        answer += numbers[i + 1];
             break;

            case "-":
            answer -= numbers[i + 1];
            break;
        }
    }

    display.value = answer;

}