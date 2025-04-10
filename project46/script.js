toggleButton = document.querySelector(".bauble_input");
let theme = "dark";
const today = document.querySelectorAll(".today");
const percentage = document.querySelectorAll(".percentage");
// The abstraction may be extended so data can be fetched from an API or a database
let todayData = [12, 99, 1099, -144];
let percentageData = [3, -2, 2257, 1375, 303, 553, -19, -12];

toggleButton.addEventListener("click", function () {
    (toggleButton.checked) ? theme = "light" : theme = "dark";
})

function createArrow(direction, el) {
    const arrow = document.createElement("img");
    arrow.src = `./images/icon-${direction}.svg`;
    el.insertBefore(arrow, el.firstChild);
}

function addStyle(data, el) {
    data.map((num, index) => {
        const container = el[index].parentElement;
        if (num > 0) {
            el[index].textContent = num;  
            container.classList.add("positive");
            createArrow('up', container);
        } else {
            el[index].textContent = num * -1;
            container.classList.add("negative");
            createArrow('down', container);
        }       
    });
}

addStyle(todayData, today);
addStyle(percentageData, percentage);


