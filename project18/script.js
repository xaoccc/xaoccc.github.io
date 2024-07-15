function submitForm() {
    let form = document.querySelector('form');
    let input = form.querySelector('input[required]');
    let formIsValid = true;
    let warning = document.getElementById('warning');
// Check each input for data (does not validate, just chech if there is data)

    let errorElement = document.getElementById('error');
    console.log('test');

    if ( input.type === 'email'  && !input.value) {
        errorElement.textContent = 'This field is required';
        input.classList.add('error');
        warning.style.display = 'inline-block';
        formIsValid = false;
    } 
    else if (input.type === 'email' && !input.value.includes('@')) {
        errorElement.textContent = 'Please enter a valid email address';
        warning.style.display = 'inline-block';
        formIsValid = false;

    } else {
        formIsValid = true;
        errorElement.textContent = '';
        warning.style.display = 'none';
    }
;


}




document.querySelectorAll('input[required]').forEach(function (input) {
    input.addEventListener('input', function () {
        this.setCustomValidity('');
        document.getElementById('error').textContent = '';
    });
});


