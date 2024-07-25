const dropDownElements = document.querySelectorAll('.dropdown-base');
const showNav = document.querySelector('.mobile-dropdown-button');
const nav = document.querySelector('nav');
const closeButton = document.querySelector('nav > img');
const filter = document.querySelector('.filter');
const hideNav = document.querySelector('.hide-nav');
const authButtons = document.querySelectorAll('.auth-btn');

dropDownElements.forEach((element) => {
    element.addEventListener('click', dropDown);
})

showNav.addEventListener('click', showMobileNav);
hideNav.addEventListener('click', hideMobileNav);
filter.addEventListener('click', hideMobileNav);

function showMenu(target, arrow, listElement) {
    target.style.display = 'flex';
    arrow.src = './images/icon-arrow-up.svg';
    arrow.style.filter = 'contrast(5)';
    listElement.style.color = 'hsl(0, 0%, 8%)';
}

function hideMenu(target, arrow, listElement) {
    target.style.display = 'none';
    arrow.src = './images/icon-arrow-down.svg';
    arrow.style.filter = 'contrast(0.5)';
    listElement.style.color = 'hsl(0, 0%, 41%)';
}

function dropDown(event) {
    const target = event.target.parentElement.lastChild.previousSibling;
    const arrow = event.target.parentElement.childNodes[2];
    const listElement = event.target.parentElement;
    if (target.style.display === 'none' || target.style.display === '') {
        showMenu(target, arrow, listElement);
    } else {
        hideMenu(target, arrow, listElement);
    }
    event.preventDefault();
}

function showMobileNav(event) {
    closeButton.style.display = 'block';
    showNav.style.display = 'none';
    nav.style.display = 'block';
    filter.style.display = 'block';
    authButtons.forEach((button) =>{
        button.style.display = 'block';
    })
}

function hideMobileNav(event) {
    closeButton.style.display = 'none';
    showNav.style.display = 'block';
    nav.style.display = 'none';
    filter.style.display = 'none';
    authButtons.forEach((button) =>{
        button.style.display = 'none';
    })
}



function dropdownReset(event) {
    if (event.target.className !== 'dropdown-base' && event.target.parentElement.className !== 'dropdown-base') {
        dropDownElements.forEach((element) => {
            const target = element.lastChild.previousSibling;
            const arrow = element.childNodes[2];
            hideMenu(target, arrow, element);
        })
    }

}
document.addEventListener('click', dropdownReset);


