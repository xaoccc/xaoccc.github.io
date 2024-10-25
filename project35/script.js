const billField = document.getElementById('bill');
let billErrorMsg = billField.parentElement.children[0].children[1];
const peopleField = document.getElementById('people');
let peopleErrorMsg = peopleField.parentElement.children[0].children[1];
const tipFields = document.querySelectorAll('input[type="button"]');
const resultFields = document.querySelectorAll('.result-value');

function validate(e) {
    let errorMsg = [billErrorMsg, peopleErrorMsg];
    [billField, peopleField].map((field, index) => {
        if (field.value === '') {
            errorMsg[index].textContent = 'Can\'t be empty';
        } else if (parseInt(field.value) === 0) {
            errorMsg[index].textContent = 'Can\'t be zero';
        } else if (parseInt(field.value) < 0) {
            errorMsg[index].textContent = 'Can\'t be a negative number';
        } else {
            errorMsg[index].textContent = '';
            const percentage = parseInt(e.target.value.slice(0, e.target.value.length - 1));

        }

    });

}

tipFields.forEach((tipField) => {
    tipField.addEventListener('click', (e) => validate(e));
});

