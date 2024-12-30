let totalValue = 100000;
let backedValue = 89914;
let backers = 5007; 
let days = 56; // This value could be calculated automatically if a deadline is set up.

const backedCurrent = document.querySelector('.backed-current');
const backedTotal = document.querySelector('.backed-total');
const backersTotal = document.querySelector('.backers-total');
const daysLeft = document.querySelector('.days-left');
const barCurrent = document.querySelector('.bar-current');
const overlay = document.querySelector('.overlay');
const pledgeContainers = document.querySelectorAll('section:nth-child(3) > div');


backedCurrent.textContent = `$${backedValue.toLocaleString('en-US')}`;
backedTotal.textContent = `of $${totalValue.toLocaleString('en-US')} backed`;
backersTotal.textContent = backers.toLocaleString('en-US');
daysLeft.textContent = days;
barCurrent.style.width = `${(backedValue/totalValue)*100}%`;

pledgeContainers.forEach(pledgeContainer => {
    let pledgeButton = pledgeContainer.querySelector('button');
    if (pledgeContainer.querySelector('.remaining-number').textContent === '0') {        
        pledgeButton.textContent = 'Out of stock';
        pledgeButton.classList.add('inactive');
        pledgeContainer.style.opacity = '0.5';
    } else {
        pledgeButton.textContent = 'Select Reward';
        pledgeButton.classList.remove('inactive');
        pledgeContainer.style.opacity = '1';
    }

    pledgeButton.addEventListener('click', () => {
        if (pledgeButton.classList.contains('inactive')) return;
        let pledgeForm = document.querySelector('.pledge-form');
        overlay.style.display = 'block';
        pledgeForm.style.display = 'block';
    });
});

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    document.querySelector('.pledge-form').style.display = 'none';
});
