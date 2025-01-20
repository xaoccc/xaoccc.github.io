const slider = document.querySelector('.slider');
const price = document.querySelector('.price');
slider.addEventListener('input', function (e) {
    const value = Number(e.target.value);
    price.textContent = `$${parseFloat(value/100).toFixed(2)}`;
});