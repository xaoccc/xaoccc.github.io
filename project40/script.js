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
const successBtn = document.querySelector('.success > button');
const radioButtons = document.querySelectorAll('input[type="radio"]');
const pledgeInputs = document.querySelectorAll('.pledge input[type="number"]');
const [leftBamboo, leftBlack, leftMahogany, leftBambooForm, leftBlackForm, leftMahoganyForm] = document.querySelectorAll('.remaining-number');
const left = {'25': [leftBamboo, leftBambooForm], '75': [leftBlack, leftBlackForm], '200': [leftMahogany, leftMahoganyForm]}



backedCurrent.textContent = `$${backedValue.toLocaleString('en-US')}`;
backedTotal.textContent = `of $${totalValue.toLocaleString('en-US')} backed`;
backersTotal.textContent = backers.toLocaleString('en-US');
daysLeft.textContent = days;
barCurrent.style.width = `${(backedValue/totalValue)*100}%`;

function resetRadioButtons(fieldsets) {
    fieldsets.forEach(fieldset => {
        fieldset.querySelector('input[type="radio"]').checked = false;
        fieldset.style.border = '1px solid #eee';
        let hr = fieldset.querySelector('hr');
        let pledge = fieldset.querySelector('.pledge');
        (hr) ? hr.style.display = 'none' : null;
        (pledge) ? pledge.style.display = 'none' : null;
    });    
}

radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
        if (radio.id !== 'no-reward') {
            pledgeInputs.forEach(input => input.removeAttribute('required'));
            const selectedPledge = radio.closest('fieldset').querySelector('input[type="number"]');
            if (selectedPledge) {
                selectedPledge.setAttribute('required', 'true'); 
            }
        }
    });
});

function radioChecked(fieldset) {
    // fieldset.querySelector('button[type="submit"]').required = true;
    fieldset.style.border = '2px solid hsl(176, 50%, 47%)';
    let hr = fieldset.querySelector('hr');
    let pledge = fieldset.querySelector('.pledge');
    (hr) ? hr.style.display = 'block' : null;
    (pledge) ? pledge.style.display = 'flex' : null;
}

function checkIfNoLeft() {
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
}
checkIfNoLeft();


rewardBtns.forEach(rewardBtn => {    
    rewardBtn.addEventListener('click', () => {        
        if (rewardBtn.classList.contains('inactive')) return;
        overlay.style.display = 'block';
        pledgeForm.style.display = 'block';
        if (rewardBtn.classList.contains('back')) {
            pledgeForm.querySelector('#no-reward').checked = true;
            radioChecked(fieldsets[0]);
        } else if (rewardBtn.classList.contains('bamboo')) {
            pledgeForm.querySelector('#bamboo-stand').checked = true;
            radioChecked(fieldsets[1]);
        } else if (rewardBtn.classList.contains('black')) {
            pledgeForm.querySelector('#black-edition').checked = true;
            radioChecked(fieldsets[2]);
        } else if (rewardBtn.classList.contains('mahogany')) {
            pledgeForm.querySelector('#mahogany').checked = true;
            radioChecked(fieldsets[3]);
        }
    });
});

// Reset page if clicked outside of the form or the success section.
overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    pledgeForm.style.display = 'none';
    success.style.display = 'none';
    resetRadioButtons(fieldsets);
});

fieldsets.forEach(fieldset => {
    let radio = fieldset.querySelector('input[type="radio"]');
    radio.addEventListener('change', () => {
        resetRadioButtons(fieldsets);
        radio.checked = true;
        if (fieldset.querySelector('input[type="radio"]').checked) {
            radioChecked(fieldset);
        } 
    });
});

// Submit the form
function submitForm(event) {
    event.preventDefault();
    pledgeForm.style.display = 'none';
    success.style.display = 'block';
    resetRadioButtons(fieldsets);
}

function updateLeft(id) {
    left[id][0].textContent = parseInt(left[id][0].textContent, 10) - 1;
    console.log(left[id][0]);
    left[id][1].textContent = left[id][0].textContent;
    checkIfNoLeft();
}

// Get the data from the selected field and update global info!
submitBtns.forEach(submitBtn => {
    submitBtn.addEventListener('click', () => {        
        if (submitBtn.previousElementSibling) {            
            const input = submitBtn.previousElementSibling;
            valueToCheck = parseInt(input.value, 10);
            treshholdValue = parseInt(input.id, 10);
            if (!input.value || valueToCheck < treshholdValue) {
                return;
            }
            backedValue += valueToCheck;
            backers += 1;
            backedCurrent.textContent = `$${backedValue.toLocaleString('en-US')}`;            
            backersTotal.textContent = backers.toLocaleString('en-US');
            barCurrent.style.width = `${(backedValue/totalValue)*100}%`;
            updateLeft(input.id);
        } else if (!submitBtn.previousElementSibling)  {
            backers += 1;
            backedCurrent.textContent = `$${backedValue.toLocaleString('en-US')}`;            
            backersTotal.textContent = backers.toLocaleString('en-US');
        }
        
    });
});

successBtn.addEventListener('click', () =>  {
    overlay.style.display = 'none';
    success.style.display = 'none';
});



