function moveForm() {
    const card = document.querySelector('.card-front');
    const form = document.querySelector('.form-container');
    const cardRect = card.getBoundingClientRect();
    form.style.marginTop = `${cardRect.bottom - 250}px`;
    console.log(form.style.marginTop);
}

function checkScreenSize() {
    const screenWidth = window.innerWidth;
    console.log(screenWidth);
    if (screenWidth < 768) {
        moveForm();
    }
}


window.addEventListener('resize', checkScreenSize);

checkScreenSize();