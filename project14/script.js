function submitForm() {
    let form = document.getElementById('myForm');
    let inputs = form.querySelectorAll('input[required], textarea[required]');
    let formIsValid = true;

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

        }
    });


}

function validateEmail() {
    let email = document.getElementById('email');
    if (!email.value.includes('@')) {
        email.setCustomValidity(' ');
        document.getElementById('invalid-email').style.display = 'block';
        email.classList.add('error');
    }
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
        // Check if the click is outside the success message
        if (!successMessage.contains(event.target)) {
            // Hide the success message
            successMessage.style.display = 'none';


            // Remove this event listener
            document.removeEventListener('click', handleClickOutside);

            // Optionally, submit the form programmatically here if desired
            // document.getElementById('myForm').submit();
        }
    });
}