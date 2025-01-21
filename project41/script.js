const slider = document.querySelector('.slider');
const price = document.querySelector('.price');
slider.addEventListener('input', function (e) {
    const value = Number(e.target.value);
    price.textContent = `$${parseFloat(value/100).toFixed(2)}`;
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