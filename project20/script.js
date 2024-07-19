function validate() {
    const input = document.getElementById('email');
    const errorMessageItem = document.getElementById('error');
    regex = /^[\w\.]+@[\w\.]+$/

    if (!email.value || !email.value.match(regex)) {        
        errorMessageItem.textContent = 'Please provide a valid email address';
        errorMessageItem.classList.add('error-message');
        input.style.outline = '1px solid hsl(354, 100%, 66%)';
    } else {
        errorMessageItem.classList.remove('error-message');
        errorMessageItem.textContent = '';
        input.style.outline = 'none';
    }
}