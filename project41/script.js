const slider = document.querySelector('.slider');
const price = document.querySelector('.price');
const billing = document.querySelector('.billing');
const pageviews = document.querySelector('.pageviews p');
const MAXVALUE = 3200;

console.log(pageviews);

slider.addEventListener('input', function (e) {
    const value = Number(e.target.value);
    price.textContent = `$${parseFloat(value/100).toFixed(2)}`;
    slider.style.background = `linear-gradient(to right, rgb(120,235,222) ${(value/MAXVALUE)*100}%, #f1f1f1 ${(value/MAXVALUE)*100}%)`;
});

const checkbox = document.querySelector('[type="checkbox"]');
checkbox.addEventListener('click', function (e) {
    if (e.target.checked) {
        e.target.classList.remove('not-checked');
        e.target.classList.add('checked');
    } else {
        e.target.classList.remove('checked');
        e.target.classList.add('not-checked');
    }
});

window.addEventListener('load', function () {
    if (window.innerWidth < 768) {
        document.querySelector('.pricing').insertBefore(pageviews, billing);
    } 
});