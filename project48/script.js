const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownMenu = document.querySelector('nav > ul');
let showDropdownMenu = false;
dropdownBtn.addEventListener('click', function () {
    if (!showDropdownMenu) {
        dropdownMenu.style.display = 'flex';
        dropdownBtn.children[0].classList.remove('fa-bars');
        dropdownBtn.children[0].classList.add('fa-xmark');
        showDropdownMenu = true;
    } else {
        dropdownMenu.style.display = 'none';
        dropdownBtn.children[0].classList.add('fa-bars');
        dropdownBtn.children[0].classList.remove('fa-xmark');
        showDropdownMenu = false;
    }

})