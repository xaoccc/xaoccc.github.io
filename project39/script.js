let savedFile = null; // Variable to store the file
const formContainer = document.querySelector('.form');
const submittedContainer = document.querySelector('.submitted');
const inputs = document.querySelectorAll('input[type="text"], input[type="email"]');
const fileInput = document.getElementById('file-upload');
const fileUpload = document.querySelector('.file-upload');
const infoText = document.querySelector('.info-text');

// Function to save the file
function saveFile(event) {
    const input = event.target;
    
    if (input.files.length > 0) {        
        savedFile = input.files[0]; // Save the selected file
        let fileSize = parseInt(savedFile.size, 10);
        let infoImg = fileUpload.querySelector('img');

        if (fileSize > 500000) {
            infoText.textContent = "File too large. Please upload a photo under 500KB.";
            infoText.style.color = "hsl(7, 71%, 60%)";
            infoImg.classList.add('error');
        } else {
            infoText.textContent = `Saved file: ${savedFile.name}`;
            infoText.style.color = "hsl(245, 15%, 58%)";
            infoImg.classList.remove('error');
        }
        
    } else {
        infoText.textContent = "No file selected";
        infoText.style.color = "hsl(7, 71%, 60%)";
        infoImg.classList.add('error');
    }
}

// Validate file input
fileInput.addEventListener('change', function () {
    this.setCustomValidity('');   
})

// Function to generate the ticket
function generateTicket(event) {  
    const avatar = savedFile;
    
    const userName = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const github = document.querySelector('#github').value;
    document.querySelector('.username').textContent = userName;
    document.querySelector('.email').textContent = email;
    document.querySelector('.github').textContent = github;
    event.preventDefault();
    formContainer.style.display = "none"
    submittedContainer.style.display = "block"

}



inputs.forEach(input => {
    let errorElement = input.nextElementSibling;
    if (input.value === '') {        
        errorElement.textContent = 'Cannot be empty';
    } 
    input.addEventListener('input', function () {
        this.setCustomValidity('');        

        if (input.id === 'name') {
            (!input.value.match(/^[a-zA-Z ]+$/)) ? errorElement.textContent = 'Please enter a valid name' : errorElement.textContent = '';                
        }
        if (input.id === 'email') {
            (!input.value.match(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) ? errorElement.textContent = 'Please enter a valid email' : errorElement.textContent = '';                
        }
        if (input.id === 'github') {
            (!input.value.match(/^@[a-zA-Z]+$/)) ? errorElement.textContent = 'Please enter a valid github username' : errorElement.textContent = '';
        }

    })
});
