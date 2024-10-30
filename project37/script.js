let responsiveImages = document.querySelectorAll('.responsive-img');
let [header, cherry, orange] = document.querySelectorAll('header, .cherry, .orange');
let html = document.querySelector('html');

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
        });
        
        
    }
}

// Change images on load and resize
changeImage();
window.addEventListener('resize', changeImage);


