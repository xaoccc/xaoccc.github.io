let totalValue = 100000;
let backedValue = 89914;
let backers = 5007; 
let days = 56; // This value could be calculated automatically if a deadline is set up.

const backedCurrent = document.querySelector('.backed-current');
const backedTotal = document.querySelector('.backed-total');
const backersTotal = document.querySelector('.backers-total');
const daysLeft = document.querySelector('.days-left');
const barCurrent = document.querySelector('.bar-current');
const bookmarkBtn = document.querySelector('.bookmark');
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

// Mobile
const bars = document.querySelector('.bars');
const navbar = document.querySelector('.navbar');



backedCurrent.textContent = `$${backedValue.toLocaleString('en-US')}`;
backedTotal.textContent = `of $${totalValue.toLocaleString('en-US')} backed`;
backersTotal.textContent = backers.toLocaleString('en-US');
daysLeft.textContent = days;
barCurrent.style.width = `${(backedValue/totalValue)*100}%`;

bookmarkBtn.addEventListener('click', () => {
    let text = bookmarkBtn.querySelector('.bookmark-text');
    let circle = bookmarkBtn.querySelector('circle');
    let path = bookmarkBtn.querySelector('path');
    console.log(circle.fill);
    if (bookmarkBtn.classList.contains('bookmarked')) {
        bookmarkBtn.classList.remove('bookmarked');        
        text.textContent = 'Bookmark';
        circle.setAttribute('fill', '#2F2F2F');
        path.setAttribute('fill', '#B1B1B1');
    } else {
        bookmarkBtn.classList.add('bookmarked');
        text.textContent = 'Bookmarked';
        circle.setAttribute('fill', 'hsl(176, 72%, 28%)');
        path.setAttribute('fill', '#fff');
    };
})

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

    fieldsets.forEach(fieldset => {
        let radioSelect = fieldset.querySelector('input[type="radio"]');
        let remaining = fieldset.querySelector('.remaining-number');
        if (remaining && remaining.textContent === '0') {
            radioSelect.disabled = true;
            fieldset.style.opacity = '0.5';
        } else if (remaining && remaining.textContent !== '0') {
            radioSelect.disabled = false;
            fieldset.style.opacity = '1';
        }
    })
}
checkIfNoLeft();


rewardBtns.forEach(rewardBtn => {    
    rewardBtn.addEventListener('click', () => {  
        if (rewardBtn.classList.contains('inactive')) return;
        overlay.style.display = 'block';
        pledgeForm.style.display = 'block';
        checkIfNoLeft();  
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

if (window.innerWidth < 768) {
    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
        navbar.style.display = 'none';
        bars.classList.remove('close');
        bars.classList.add('bars');
    });
}

fieldsets.forEach(fieldset => {
    let radio = fieldset.querySelector('input[type="radio"]');
    radio.addEventListener('change', () => {
        resetRadioButtons(fieldsets);
        radio.checked = true;
        if (fieldset.querySelector('input[type="radio"]').checked) {
            radioChecked(fieldset);
        } 
    });

    if (window.innerWidth < 768) {
        const rewardNumber = fieldset.querySelector('.reward-number.row');
        const centeredDiv = fieldset.firstElementChild.firstElementChild;         
        
        if (rewardNumber) {
            fieldset.insertBefore(rewardNumber, fieldset.querySelector('hr'));
        }
        if (centeredDiv) {
            centeredDiv.classList.remove('center');
            centeredDiv.classList.remove('row');
            centeredDiv.classList.add('column');

        }       

    }
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

// Mobile 
bars.addEventListener('click', () => {
    if (navbar.style.display === 'flex') {
        navbar.style.display = 'none';
        overlay.style.display = 'none';
        bars.classList.remove('close');
        bars.classList.add('bars');
    } else {
        navbar.style.display = 'flex';
        overlay.style.display = 'block';
        bars.classList.remove('bars');
        bars.classList.add('close');
        
    }

})



