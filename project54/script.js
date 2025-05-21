const slider = document.getElementById('slider');
const output = document.getElementById('output');
const buttons = document.querySelectorAll('.buttons button');
const buttonsDict = {
    "7": 0,
    "8": 1,
    "9": 2,
    "Backspace": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "+": 7,
    "1": 8,
    "2": 9,
    "3": 10,
    "-": 11,
    ".": 12,
    "0": 13,
    "/": 14,
    "*": 15,
    "Delete": 16,
    "=": 17,
}
const input = document.querySelector('input[type="text"]')
const steps = [0, 50, 100];
let actions = [];
let nums = [];
let lastAction = "";

// Slider with three options for each theme
slider.addEventListener('input', () => {
    const val = parseInt(slider.value);
    const closest = steps.reduce((a, b) => Math.abs(b - val) < Math.abs(a - val) ? b : a);
    slider.value = closest;
    changeTheme(slider.value)
});

input.addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9.]/g, '');
});

function mathOp(sign, numOne, numTwo) {
    switch (sign) {
        case "+":
            return Number(numOne) + Number(numTwo);
        case "-":
            return Number(numOne) - Number(numTwo);
        case "/":
            return Number(numTwo) !== 0 ? Number(numOne) / Number(numTwo) : "Error: Division by zero";
        case "x":
            return Number(numOne) * Number(numTwo);
    }
}
// Keyboard
addEventListener("keyup", (e) => {
    if (buttons[buttonsDict[e.key]]) {
        buttons[buttonsDict[e.key]].click();
        buttons[buttonsDict[e.key]].focus();
    }
})

//  Buttons functionality
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



// Themes
function changeTheme(sliderValue) {
    document.querySelectorAll('body, .slider, input[type="text"], main > section').forEach(element => {
        let cls = element.classList[0];
        let themeNum = cls[cls.length - 1];
        if (sliderValue == "0") {
            const newClass = cls.replace(themeNum, '1');
            element.classList.replace(cls, newClass);
        } else if (sliderValue == "50") {
            const newClass = cls.replace(themeNum, '2');
            element.classList.replace(cls, newClass);
        } else if (sliderValue == "100") {
            const newClass = cls.replace(themeNum, '3');
            element.classList.replace(cls, newClass);
        }
    });
}

