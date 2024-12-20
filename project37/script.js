let responsiveImages = document.querySelectorAll('.responsive-img');
let [header, cherry, orange] = document.querySelectorAll('header, .cherry, .orange');
let fruits = document.querySelector('.fruits');
let html = document.querySelector('html');
const mobileNavBtn = document.querySelector('.mobile-nav-btn');

function changeImage() {
    if (window.innerWidth < 768) {
        html.style.fontSize = "16px";
        responsiveImages.forEach((image) => {
            image.src = image.src.replace('desktop', 'mobile');
        });
        [header, cherry, orange].forEach((element) => {
            let bgImage = window.getComputedStyle(element).backgroundImage;
            element.style.backgroundImage = bgImage.replace('desktop', 'mobile');
            element.style.height = "37.5rem";
            fruits.style.height = "100%";
        });      
        
    } else {
        responsiveImages.forEach((image) => {
            image.src = image.src.replace('mobile', 'desktop');
        });
        [header, cherry, orange].forEach((element) => {
            let bgImage = window.getComputedStyle(element).backgroundImage;
            element.style.backgroundImage = bgImage.replace('mobile', 'desktop');
            element.style.height = "100%";
            fruits.style.height = "calc(100vw - 45rem)";
        });  

    }
}

function toggleMobileNav() {
    let nav = document.querySelector('.mobile-nav');
    let navStyle = window.getComputedStyle(nav).display;
    (navStyle === "none") ? nav.style.display = "flex" : nav.style.display = "none";
}

// Change images on load and resize
changeImage();
window.addEventListener('resize', changeImage);

// Show/hide the mobile nav
mobileNavBtn.addEventListener('click', toggleMobileNav);


