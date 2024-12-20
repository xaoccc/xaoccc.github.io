const dropDownButtons = document.querySelectorAll('.header-links .main-nav-link > div');
const dropDownMenus = document.querySelectorAll('.header-links .main-nav-link ul');
const bars = document.querySelector('.hamburger img');
const mobileMenu = document.querySelector('.header-links.mobile-nav');


document.addEventListener('click', (e) => {

    if (e.target.classList.contains('action')) {
        const dropdownMenu = e.target.nextElementSibling;
        if (dropdownMenu.classList.contains('dropdown-visible')) {
            dropdownMenu.classList.remove('dropdown-visible');
            dropdownMenu.classList.add('dropdown-hidden');
        } else {
            dropdownMenu.classList.remove('dropdown-hidden');
            dropdownMenu.classList.add('dropdown-visible');
        }
    }  else if (!e.target.classList.contains('dropdown-visible') && !e.target.classList.contains('dropdown')) {
        dropDownMenus.forEach((dropDownMenu) => {
            dropDownMenu.classList.remove('dropdown-visible');
            dropDownMenu.classList.add('dropdown-hidden');
        });
    }
});


bars.addEventListener('click', () => {
    if (mobileMenu.style.display === 'none') {
        mobileMenu.style.display = 'flex';
        bars.src = './images/icon-close.svg';
    } else {
        mobileMenu.style.display = 'none';
        bars.src = './images/icon-hamburger.svg';
    }
});
    
