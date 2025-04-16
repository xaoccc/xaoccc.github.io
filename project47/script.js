const dropDownMenuBtn = document.querySelector('.hamburger');
const dropDownMenu = document.querySelector('.dropdown-menu');
let dropDown = false;

dropDownMenuBtn.addEventListener('click', function () {
    if (dropDown) {
        dropDownMenu.classList.add('display-none');
        dropDownMenu.classList.remove('display-block');
        dropDownMenuBtn.style.background = 'url("./images/icon-hamburger.svg") center no-repeat';
        dropDown = false;
    } else {
        dropDownMenu.classList.add('display-block');
        dropDownMenu.classList.remove('display-none');
        dropDownMenuBtn.style.background = 'url("./images/icon-close.svg") center no-repeat';
        dropDown = true;
    } 
})

