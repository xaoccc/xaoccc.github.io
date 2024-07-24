
const dropDownElements = document.querySelectorAll('.dropdown-base');
dropDownElements.forEach((element) => {
    element.addEventListener('click', dropDown);
})

function showMenu(target, arrow, listElement) {
    target.style.visibility = 'visible';
    arrow.src = './images/icon-arrow-up.svg';
    arrow.style.filter = 'contrast(5)';
    listElement.style.color = 'hsl(0, 0%, 8%)';
}

function hideMenu(target, arrow, listElement) {
    target.style.visibility = 'hidden';
    arrow.src = './images/icon-arrow-down.svg';
    arrow.style.filter = 'contrast(0.5)';
    listElement.style.color = 'hsl(0, 0%, 41%)';
}

function dropDown(event) {
    const target = event.target.parentElement.lastChild.previousSibling;
    const arrow = event.target.parentElement.childNodes[2];
    const listElement = event.target.parentElement;
    if (target.style.visibility === 'hidden' || target.style.visibility === '') {
        showMenu(target, arrow, listElement);
    } else {
        hideMenu(target, arrow, listElement);
    }
    event.preventDefault();
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


