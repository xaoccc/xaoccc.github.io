const toggleBtn = document.querySelector('input');
const amount = document.querySelectorAll('.amount')

toggleBtn.addEventListener('click', function () {
    if (toggleBtn.checked) {
        for (let i = 0; i < 3; i++) {
            amount[i].textContent = Math.floor(amount[i].textContent * 10) / 100;
        }        
    } else {
        for (let i = 0; i < 3; i++) {
            amount[i].textContent = (amount[i].textContent * 10 + 0.09).toFixed(2);
        } 
    }
})