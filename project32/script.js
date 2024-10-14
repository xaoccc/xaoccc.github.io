const card = document.querySelector('.card-front');
const form = document.querySelector('.form-container');
const inputs = document.querySelectorAll('input[required]');

function moveForm() {
    const cardRect = card.getBoundingClientRect();
    form.style.marginTop = `${cardRect.bottom - 250}px`;
}

function checkScreenSize() {
    const screenWidth = window.innerWidth;
    console.log(screenWidth);
    if (screenWidth < 768) {
        moveForm();
    }
}

inputs.forEach(function (input) {
    input.addEventListener('input', function (e) {
        this.setCustomValidity('');
        document.getElementById('error-' + input.id).textContent = '';
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

function submitForm() {

    let formIsValid = true;


    inputs.forEach(function (input) {
        let errorElement = (input.id !== 'yy' && input.id !== 'mm') ? document.getElementById('error-' + input.id) : document.getElementById('error-expiry');
        if (!input.value && input.id) {
            errorElement.textContent = "Can't be blank";
            input.classList.add('error');
            formIsValid = false;
        } else if (input.id === 'number' && input.value.length !== 19) {
            errorElement.textContent = 'Your card number must be 16 digits';
        } else if (input.id === 'cvc' && input.value.length !== 3) {
            errorElement.textContent = 'Your CVC must be 3 digits';
        } else if ((input.value.id === 'mm' || input.value.id === 'yy')  && input.length !== 2) {     
            errorElement.textContent = 'Your MM/YY must be 2 digits each';        
        } else {
            errorElement.textContent = '';
            input.classList.remove('error');
        }
    });
}


window.addEventListener('resize', checkScreenSize);

checkScreenSize();