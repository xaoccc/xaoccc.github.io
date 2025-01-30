const bars = document.querySelector('.bars');
const mobileMenu = document.querySelector('.mob-menu');
const closeBtn = document.querySelector('.close-btn');
bars.addEventListener('click', () => {
    mobileMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
});