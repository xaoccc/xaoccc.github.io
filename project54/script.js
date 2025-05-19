const slider = document.getElementById('slider');
const output = document.getElementById('output');

const steps = [0, 50, 100];

slider.addEventListener('input', () => {
    const val = parseInt(slider.value);
    const closest = steps.reduce((a, b) => Math.abs(b - val) < Math.abs(a - val) ? b : a);
    slider.value = closest;
    output.textContent = closest;
});