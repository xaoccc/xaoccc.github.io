const dropDownButtons = document.querySelectorAll('.main-nav-link > div');


dropDownButtons.forEach((dropDownButton) => {
    dropDownButton.addEventListener('click', () => {
        const dropdownMenu = dropDownButton.nextElementSibling;
        if (dropdownMenu.classList.contains('dropdown-visible')) {
            dropdownMenu.classList.remove('dropdown-visible');
            dropdownMenu.classList.add('dropdown-hidden');
        } else {
            dropdownMenu.classList.remove('dropdown-hidden');
            dropdownMenu.classList.add('dropdown-visible');
        }
    })
});