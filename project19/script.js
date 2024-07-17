function validate() {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input[required]');

    function changeStyles(input, errorElement) {
        errorElement.style['margin-bottom'] = '1rem';
        input.classList.add('error');
        errorElement.classList.add('error-img');
    }

    function removeError(input, errorElement) {
        errorElement.textContent = '';
        errorElement.style['margin-bottom'] = '0.7rem';
        input.classList.remove('error');
        errorElement.classList.remove('error-img');
    }

    inputs.forEach((input) => {
        let errorElement = document.getElementById('error-' + input.id);
        if ((input.type === 'text' || input.type === 'password') && !input.value) {
            errorElement.textContent = `${input.id.replace('-', ' ')} cannot be empty`;
            changeStyles(input, errorElement);            
        } else if (input.type === 'email' && !input.value) {
            errorElement.textContent = `Looks like this is not an ${input.id}`;
            changeStyles(input, errorElement);
        } else {
            removeError(input, errorElement);
        }
    })
}

