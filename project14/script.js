function submitForm() {
    let form = document.getElementById('myForm');
    let inputs = form.querySelectorAll('input[required], textarea[required]');
    let formIsValid = true;
// Check each input for data (does not validate, just chech if there is data)
    inputs.forEach(function (input) {
        let errorElement = document.getElementById('error-' + input.id);

        if ((input.type === 'text' || input.type === 'email' || input.tagName.toLowerCase() === 'textarea') && !input.value) {
            errorElement.textContent = 'This field is required';
            input.classList.add('error');
            formIsValid = false;

        } else if (input.type === 'radio' && !input.checked) {
            errorElement.textContent = 'Please select a query type';
            formIsValid = false;

        } else if (input.type === 'checkbox' && !input.checked) {
            errorElement.textContent = 'To submit this form, please consent to being contacted';
            formIsValid = false;

        } else if (input.type === 'email' && !input.value.includes('@')) {
            errorElement.textContent = 'Please enter a valid email address';
            formIsValid = false;

        } else {
            errorElement.textContent = '';
            input.classList.remove('error');
        }
    });


}




document.querySelectorAll('input[required], textarea[required]').forEach(function (input) {
    input.addEventListener('input', function () {
        this.setCustomValidity('');
        document.getElementById('error-' + input.id).textContent = '';
    });
});


function success(event) {

    event.preventDefault();

    let successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';

    // Prevent further submission until the user clicks elsewhere
    document.addEventListener('click', function handleClickOutside(event) {
        if (!successMessage.contains(event.target)) {
            successMessage.style.display = 'none';
            document.removeEventListener('click', handleClickOutside);
        }
    });
}