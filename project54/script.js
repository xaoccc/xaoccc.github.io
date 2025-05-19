const slider = document.getElementById('slider');
const output = document.getElementById('output');
const buttons = document.querySelectorAll('.buttons button');
const input = document.querySelector('input[type="text"]')
const steps = [0, 50, 100];

slider.addEventListener('input', () => {
    const val = parseInt(slider.value);
    const closest = steps.reduce((a, b) => Math.abs(b - val) < Math.abs(a - val) ? b : a);
    slider.value = closest;
});

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

    switch (btnText) {
        case "1":
            input.value += "1";
            break;
        case "2":
            input.value += "2";
            break;
        case "3":
            input.value += "3";
            break;
        case "4":
            input.value += "4";
            break;
        case "5":
            input.value += "5";
            break;
        case "6":
            input.value += "6";
            break;
        case "7":
            input.value += "7";
            break;
        case "8":
            input.value += "8";
            break;
        case "9":
            input.value += "9";
            break;
        case "0":
            input.value += "0";
            break;
        case ".":
            input.value += ".";
            break;
        case "RESET":
            input.value = "";
            break;
        case "DEL":
            input.value = input.value.slice(0, -1);
            break;
    }
}))

