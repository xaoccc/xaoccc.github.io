const billField = document.getElementById('bill');
let billErrorMsg = billField.parentElement.children[0].children[1];
const peopleField = document.getElementById('people');
let peopleErrorMsg = peopleField.parentElement.children[0].children[1];
const tipFields = document.querySelectorAll('input[type="button"]');
const customTipField = document.querySelector('.custom-tip');
const resultFields = document.querySelectorAll('.result-value');
let resetBtn = document.querySelector('.reset');

function validate(e) {
    let errorMsg = [billErrorMsg, peopleErrorMsg];
    [billField, peopleField].map((field, index) => {
        if (field.value === '') {
            errorMsg[index].textContent = 'Can\'t be empty';
            field.classList.add('input-error');
        } else if (parseInt(field.value) === 0) {
            errorMsg[index].textContent = 'Can\'t be zero';
            field.classList.add('input-error');
        } else if (parseInt(field.value) < 0) {
            errorMsg[index].textContent = 'Can\'t be a negative number';
            field.classList.add('input-error');
        } else {
            errorMsg[index].textContent = '';
            field.classList.remove('input-error');
            let percentage = 0;
            if (e.target.className === 'tip custom-tip') {
                percentage = (e.target.value === '') ? 0 : parseInt(e.target.value);
            } else {
                percentage = parseInt(e.target.value.slice(0, e.target.value.length - 1));
            }            
            resultFields[0].textContent = `${(parseInt(billField.value) * percentage / parseInt(peopleField.value) / 100).toFixed(2)}`;
            resultFields[1].textContent = `${(parseInt(billField.value) * percentage / 100).toFixed(2)}`;
            resetBtn.disabled = false;
            resetBtn.classList.add('reset-active');
        }
    });
}

resetBtn.addEventListener('click', () => {
    resultFields[0].textContent = '0.00';
    resultFields[1].textContent = '0.00';
    billField.value = '';
    peopleField.value = '';
    resetBtn.disabled = true;
    resetBtn.classList.remove('reset-active');
    customTipField.value = '';
});

tipFields.forEach((tipField) => {
    tipField.addEventListener('click', (e) => validate(e));
});

[billField, peopleField].forEach((field) => {
    field.addEventListener('input', (e) => {
        let errorMsg = e.target.parentElement.children[0].children[1];
        if (parseInt(e.target.value) > 0 && e.target.value !== '') {
            e.target.classList.remove('input-error');
            errorMsg.textContent = '';
        }
    });
});

customTipField.addEventListener('input', (e) => {
    validate(e);
});

