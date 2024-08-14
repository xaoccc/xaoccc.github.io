const button = document.querySelector('button');
const inputs = Array.from(document.querySelectorAll('input'));
let [validDay, validMonth, validYear] = [false, false, false];

let [yearsField, monthsField, daysField] = document.querySelectorAll('#years, #months, #days')

function errorStyle(input, message) {
    input.style.border = '1px solid hsl(0, 100%, 67%)';
    input.previousElementSibling.style.color = 'hsl(0, 100%, 67%)';
    input.nextElementSibling.style.display = 'block';
    input.nextElementSibling.textContent = message;
}

function errorReset(input) {
  input.style.border = '1px solid hsl(0, 0%, 86%)';
  input.previousElementSibling.style.color = 'hsl(0, 1%, 44%)';
  input.nextElementSibling.style.display = 'none';
}

button.addEventListener('click', (e) => {
  e.preventDefault();
  inputs.forEach(input => {    
    if (input.value === '') {
      errorStyle(input, 'This field is required')
    } else {
      
      const value = Number(input.value)

      
      if (input.id === 'month') {
        if (value < 1 || value > 12) {
          errorStyle(input, 'Must be a valid month')
          validMonth = false;
        } else { 
          errorReset(input);
          validMonth = true;
        }}

      else if (input.id === 'year') {
        if (value > 2024) {
          errorStyle(input, 'Must be in the past');
          validYear = false;
        } else {
          errorReset(input);
          validYear = true;
        }}

      else if (input.id === 'day') {
        if (value < 1 || value > 31) {
          errorStyle(input, 'Must be a valid day');
          validDay = false;
        } else {
          errorReset(input);
          validDay = true;
        }}
    }
    
  });

  if (validDay && validMonth && validYear) {

    today = new Date();

    let years = today.getFullYear() - Number(inputs[2].value);
    let months = ((today.getMonth() + 1) - Number(inputs[1].value));
    let days = today.getDate() - Number(inputs[0].value);

    if (days < 0) {
      months --;
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
    }  
    if (months < 0) {
      years --;
      months += 12;
    }

    [yearsField, monthsField, daysField].forEach((field) => field.style.letterSpacing = 0);
    [yearsField.textContent, monthsField.textContent, daysField.textContent] = [years, months, days];


  }

});