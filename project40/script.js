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
const pledgeForm = document.querySelector('.pledge-form');
const fieldsets = document.querySelectorAll('fieldset');
const rewardBtns = document.querySelectorAll('.reward');
const submitBtns = document.querySelectorAll('button[type="submit"]');
const success = document.querySelector('.success');


backedCurrent.textContent = `$${backedValue.toLocaleString('en-US')}`;
backedTotal.textContent = `of $${totalValue.toLocaleString('en-US')} backed`;
backersTotal.textContent = backers.toLocaleString('en-US');
daysLeft.textContent = days;
barCurrent.style.width = `${(backedValue/totalValue)*100}%`;

function resetRadioButtons() {
    let radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
        radio.checked = false;
    });
}

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
});


rewardBtns.forEach(rewardBtn => {    
    rewardBtn.addEventListener('click', () => {        
        if (rewardBtn.classList.contains('inactive')) return;
        overlay.style.display = 'block';
        pledgeForm.style.display = 'block';
        if (rewardBtn.classList.contains('bamboo')) {
            pledgeForm.querySelector('#bamboo-stand').checked = true;
        } else if (rewardBtn.classList.contains('black')) {
            pledgeForm.querySelector('#black-edition').checked = true;
        } else if (rewardBtn.classList.contains('mahogany')) {
            pledgeForm.querySelector('#mahogany').checked = true;
        }
    });
});

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    pledgeForm.style.display = 'none';
    resetRadioButtons();
});

fieldsets.forEach(fieldset => {
    let radio = fieldset.querySelector('input[type="radio"]');
    radio.addEventListener('change', () => {
        fieldsets.forEach(fieldset => {
            fieldset.querySelector('input[type="radio"]').checked = false;
            fieldset.style.border = '1px solid #eee';
            let hr = fieldset.querySelector('hr');
            let pledge = fieldset.querySelector('.pledge');
            (hr) ? hr.style.display = 'none' : null;
            (pledge) ? pledge.style.display = 'none' : null;
            
        });
        radio.checked = true;
        if (fieldset.querySelector('input[type="radio"]').checked) {
            fieldset.style.border = '2px solid hsl(176, 50%, 47%)';
            let hr = fieldset.querySelector('hr');
            let pledge = fieldset.querySelector('.pledge');
            (hr) ? hr.style.display = 'block' : null;
            (pledge) ? pledge.style.display = 'flex' : null;

        } 
    });
});


submitBtns.forEach(submitBtn => {
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        pledgeForm.style.display = 'none';
        success.style.display = 'block';
    });
});



