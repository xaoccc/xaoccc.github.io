const slider = document.getElementById('slider');
const output = document.getElementById('output');
const buttons = document.querySelectorAll('.buttons button');
const input = document.querySelector('input[type="text"]')
const steps = [0, 50, 100];
let actions = [];
let nums = [];
let lastAction = "";

slider.addEventListener('input', () => {
    const val = parseInt(slider.value);
    const closest = steps.reduce((a, b) => Math.abs(b - val) < Math.abs(a - val) ? b : a);
    slider.value = closest;
});

function mathOp(sign, numOne, numTwo) {
    switch (sign) {
        case "+":
            return Number(numOne) + Number(numTwo);
        case "-":
            return Number(numOne) - Number(numTwo);
        case "/":
            return Number(numOne) / Number(numTwo);
        case "x":
            return Number(numOne) * Number(numTwo);
    }
}

buttons.forEach((button) => button.addEventListener('click', function () {
    let btnText = button.textContent;

    // Check for numbers starting with zero. Just decimal numbers can start with zero.
    if (input.value[0] == "0" && btnText != "." && input.value[1] != ".") {
        input.value = "";
    }

    // Checking for decimal separator. Just one is allowed.
    if (btnText == "." && (input.value.split(".").length) > 1) {
        return;
    }

    if (!isNaN(btnText) || btnText == ".") {
        if ('+-/x'.indexOf(lastAction) > -1) {
            input.value = "";
        }
        input.value += btnText;
    } else if (btnText == "RESET") {
        input.value = "";
        nums = [];
        actions = [];
        lastAction = "";
    } else if (btnText == "DEL") {
        input.value = input.value.slice(0, -1);
    } else if ('+-/x'.indexOf(btnText) > -1) {
        nums.push(input.value);
        if (actions.length == 0) {
            actions.push(btnText);
        } else {
            input.value = mathOp(actions[0], nums[0], nums[1]);
            nums = [input.value];
            actions = [btnText];
        }
    } else if (btnText == "=") {
        nums.push(input.value);
        input.value = mathOp(actions[0], nums[0], nums[1]);
        nums = [];
        actions = [];
    }

    lastAction = btnText;

}))

