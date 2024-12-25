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
    event.preventDefault();
    
    const userName = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const github = document.querySelector('#github').value;
    const userNameTicket = document.querySelectorAll('.username');
    const ticketId = document.querySelector('.ticket-id');
    userNameTicket.forEach(name => name.textContent = userName);
    ticketId.textContent = `#${Math.floor(Math.random() * 1000000)}`;

    document.querySelector('.email').textContent = email;
    document.querySelector('.github').textContent = github;
 
    formContainer.style.display = "none";
    submittedContainer.style.display = "block";

}

inputs.forEach(input => {
    let errorElement = input.nextElementSibling;
    let infoIcon = document.createElement('img');
    let errorText = document.createElement('span');
    infoIcon.src = './assets/images/icon-info.svg';
    infoIcon.classList.add('info', 'error');   
    errorText.classList.add('error'); 

    if (input.value === '') {    
 
        errorText.textContent = 'Cannot be empty';

        errorElement.appendChild(infoIcon);
        errorElement.appendChild(errorText);
    } else {
        errorElement.removeChild(infoIcon);
        errorElement.removeChild(errorText);
    }
    input.addEventListener('input', function () {
        this.setCustomValidity('');        

        if (input.id === 'name') {
            if (!input.value.match(/^[a-zA-Z ]+$/)) {
                errorText.textContent = 'Please enter a valid name';
                errorElement.appendChild(infoIcon);
                errorElement.appendChild(errorText);
            } else {
                errorText.textContent = '';
                errorElement.removeChild(infoIcon);
                errorElement.removeChild(errorText);
            }              
        }
        if (input.id === 'email') {

            if (!input.value.match(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
                errorText.textContent = 'Please enter a valid email';
                errorElement.appendChild(infoIcon);
                errorElement.appendChild(errorText);
            } else {
                errorText.textContent = '';
                errorElement.removeChild(infoIcon);
                errorElement.removeChild(errorText);
            } 
        }
        if (input.id === 'github') {
            if (!input.value.match(/^@[a-zA-Z]+$/)) {
                errorText.textContent = 'Please enter a valid githib username';
                errorElement.appendChild(infoIcon);
                errorElement.appendChild(errorText);
            } else {
                errorText.textContent = '';
                errorElement.removeChild(infoIcon);
                errorElement.removeChild(errorText);
            } 
        }

    })
});
