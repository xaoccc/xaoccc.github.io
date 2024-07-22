function validate(event) {
    event.preventDefault();
    const inputDiv = document.querySelectorAll('.input');
    const inputRadio = document.querySelectorAll('.mortage-input');
    const noResult = document.querySelector('#right');
    const result = document.querySelector('#result');
    
    let amount = document.querySelector('#mortage-amount').value;
    let term = document.querySelector('#mortage-term').value;
    let rate = document.querySelector('#interest-rate').value;
    let type = document.querySelector('#mortage-type');

    let monthly = document.querySelector('#monthly');
    let total = document.querySelector('#total');
    
    let isTextValid = true;
    let isRadioValid = false;
    let [repayment, interest] = [false, false]

    // Clear old error messages from radio inputs
    let nextTypeElement = type.nextElementSibling;
    while (nextTypeElement) {
        const elementToRemove = nextTypeElement;
        nextTypeElement = nextTypeElement.nextElementSibling;
        elementToRemove.remove();
    }

    function addErrorMessage(inputField, input, label, element) {
        input.classList.add('error');
        label.style.backgroundColor = 'hsl(4, 69%, 50%)';
        label.style.color = 'white';
        element.style.border = '1px solid hsl(4, 69%, 50%)';
        isTextValid = false;
        if (inputField.value === '') {
            return 'This field is required';
        } else if (isNaN(Number(inputField.value))) {
            return 'Incorrect Input! Please enter a number.';
        }        
    }

    inputDiv.forEach((element) => {
        const inputField = element.querySelector('input');
        const label = element.querySelector('label');

        // Clear old error messages from text inputs
        let nextElement = element.nextElementSibling;
        while (nextElement) {
            const elementToRemove = nextElement;
            nextElement = nextElement.nextElementSibling;
            elementToRemove.remove();
        }

        const errorMessage = element.insertAdjacentElement('afterend', document.createElement('div'));

        if (inputField.value === '' || isNaN(Number(inputField.value))) {
            errorMessage.textContent = addErrorMessage(inputField, errorMessage, label, element);                        
        } else {
            errorMessage.classList.remove('error');
            errorMessage.textContent = '';
            label.style.backgroundColor = 'hsl(202, 86%, 94%)';
            label.style.color = 'hsl(200, 24%, 40%)';
            element.style.border = '1px solid hsl(200, 24%, 40%)';
            switch (inputField.id) {
                case 'mortage-amount':
                    amount = Number(amount);
                    break;
                case 'mortage-term':
                    term = Number(term);
                    break;
                case 'interest-rate':
                    rate = Number(rate);
                    break;                
            }
        }
    })

    inputRadio.forEach((element) => {
        if (element.checked) {
            isRadioValid = true;
            (element.id === 'repayment') ? repayment = true : interest = true;
        }
    })
    
    if (!isRadioValid) {
        const radioInputError = type.insertAdjacentElement('afterend', document.createElement('div'));
        radioInputError.textContent = 'This field is required';
        radioInputError.classList.add('error');
    } 
    console.log(isRadioValid);
    console.log(isTextValid);
    if (isRadioValid === true && isTextValid === true) {
       
        if (repayment) {
            let monthlyRepayments = ((rate / 100 / 12) * amount) / (1 - Math.pow((1 + (rate / 100 / 12)), (-term * 12)));
            monthly.textContent = `£${String(monthlyRepayments.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
            total.textContent = `£${String((monthlyRepayments * 12 * term).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
        } else {
            let monthlyRepayments = (amount / 12 / 100 * rate);
            monthly.textContent = `£${String(monthlyRepayments.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
            total.textContent = `£${String(((monthlyRepayments * 12 * term) + amount).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
        }
        noResult.style.display = 'none';
        result.style.display = 'block';

    } else {
        noResult.style.display = 'flex';
        result.style.display = 'none';        
    }
}

// Financial data source: https://www.nerdwallet.com/uk/mortgages/interest-rate-calculator/
