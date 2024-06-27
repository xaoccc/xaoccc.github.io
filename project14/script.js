
document.getElementById('myForm').addEventListener('submit', function(event) {
    alert('teesdfsdst');
    let inputs = this.querySelectorAll('input[required]');
    let formIsValid = true;
    
    
    inputs.forEach(function(input) {
        if (!input.value) {
            input.setCustomValidity('This field is required');
            input.reportValidity();
            formIsValid = false;
        } else {
            input.setCustomValidity('');
        }
    });
    
    if (!formIsValid) {
        event.preventDefault();
    }
});

document.querySelectorAll('input[required]').forEach(function(input) {
    input.addEventListener('input', function() {
        this.setCustomValidity('');
    });
});

