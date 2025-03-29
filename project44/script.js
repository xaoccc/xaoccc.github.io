const slider = document.querySelector('.slider');
const gbLeft = document.querySelector('.gbLeft');
const gbUsed = document.querySelector('.gbUsed');
const styleSheet = document.styleSheets[1];
let ruleIndex = null;
MAXVALUE = 1000;

console.log(slider.children);
slider.addEventListener('input', function (e) {
    const value = Number(e.target.value);
    gbLeft.textContent = MAXVALUE - value;
    gbUsed.textContent = value;
    const percentage = (value / MAXVALUE) * 100;
    slider.style.background = `linear-gradient(to right, hsl(6, 100%, 80%) 0%, hsl(335, 100%, 65%) ${percentage}%, rgb(21,30,73) ${percentage}%)`;

    if (ruleIndex !== null) {
        styleSheet.deleteRule(ruleIndex);
        ruleIndex = null; // Reset after deletion
    }
    if (percentage > 50) {
        ruleIndex = styleSheet.insertRule(`
            input[type="range"]::-webkit-slider-thumb {
                box-shadow: 1px 0px 0px 1px hsl(335, 100%, 65%) !important;
                margin: 1px 0 0 0 !important;
                height: 10px !important;
                width: 10px !important;
            }
        `, styleSheet.cssRules.length)
    } else if (percentage > 1 && percentage < 50) {

        ruleIndex = styleSheet.insertRule(`
            input[type="range"]::-webkit-slider-thumb {
                box-shadow: 1px 0px 0px 1px hsl(335, 100%, 65%) !important;
                margin: 1px 0 0 -3px !important;
                height: 10px !important;
                width: 10px !important;
            }
        `, styleSheet.cssRules.length);

    } 


});