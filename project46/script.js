toggleButton = document.querySelector(".bauble_input");
let theme = "dark";

toggleButton.addEventListener("click", function () {
    (toggleButton.checked) ? theme = "light" : theme = "dark";
})
