const card = document.querySelector('.card-front');
const form = document.querySelector('.form-container');
const inputs = document.querySelectorAll('input[required]');
const submitButton = document.querySelector('.submit-button');
const successMessage = document.querySelector('.success-message');
let [validName, validNumber, validMM, validYY, validCvc] = [false, false, false, false, false];

function moveForm() {
    const cardRect = card.getBoundingClientRect();
    form.style.marginTop = `${cardRect.bottom - 250}px`;
}

function checkScreenSize() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
        moveForm();
    }
}

function switchValidate(input) {
    switch (input.id) {
        case 'name':
            validName = true;
            break;
        case 'number':
            validNumber = true;
            break;
        case 'mm':
            validMM = true;
            break;
        case 'yy':
            validYY = true;
            break;
        case 'cvc':
            validCvc = true;
            break;
    }
}

inputs.forEach(function (input) {
    input.addEventListener('input', function (e) {
        this.setCustomValidity('');

        (input.id !== 'yy' && input.id !== 'mm') ? document.getElementById('error-' + input.id).textContent = '' : document.getElementById('error-expiry').textContent = '';
        if (input.id === 'number' || input.id === 'cvv' || input.id === 'dd' || input.id === 'mm') {
            if (input.id === 'number') {
                let cardNumber = '';
                input.value.split('').forEach(function (char, index) {
                    if ((index === 4 || index === 9 || index === 14) && index !== 0 && char !== ' ') {
                        char = ' ' + char;
                    }
                    cardNumber += char;
                });
                input.value = cardNumber;
                
            }
            if (!e.data.match(/[0-9 ]+/)) {
                let errorElement = document.getElementById('error-' + input.id);
                errorElement.textContent = 'Wrong format, numbers only';
            }
        }
    });
});

submitButton.addEventListener('click', function (e)  {
    e.preventDefault();    

    inputs.forEach(function (input) {
        let errorElement = (input.id !== 'yy' && input.id !== 'mm') ? document.getElementById('error-' + input.id) : document.getElementById('error-expiry');
        if (!input.value && input.id) {
            errorElement.textContent = "Can't be blank";
            input.classList.add('error');
        } else if (input.id === 'number' && input.value.length !== 19) {
            errorElement.textContent = 'Your card number must be 16 digits';
        } else if (input.id === 'cvc' && input.value.length !== 3) {
            errorElement.textContent = 'Your CVC must be 3 digits';
        } else if (input.id === 'mm') { 
            if (input.value.length !== 2) {
                errorElement.textContent = 'Your MM must be 2 digits';
            } else if (Number(input.value) < 1 || Number(input.value) > 12) {
                errorElement.textContent = 'Invalid month';
            } else {
                validMM = true;
            }
        } else if (input.id === 'yy') { 
            if (input.value.length !== 2) {
                errorElement.textContent = 'Your YY must be 2 digits';
            } else if (Number(input.value) < 19 || Number(input.value) > 29) {
                errorElement.textContent = 'Invalid year';
            } else {
                validYY = true;
            }        
        } else {
            switchValidate(input);
            errorElement.textContent = '';
            input.classList.remove('error');
            if (validName === true && validNumber === true && validMM === true && validYY === true && validCvc === true) {
                form.style.display = 'none';
                successMessage.style.display = 'flex';
            }
        }        
    });    
});

window.addEventListener('resize', checkScreenSize);

checkScreenSize();