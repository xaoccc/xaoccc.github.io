let savedFile = null; // Variable to store the file
const formContainer = document.querySelector('.form');
const submittedContainer = document.querySelector('.submitted');

// Function to save the file
function saveFile(event) {
    const input = event.target;
    console.log('function called')
    if (input.files.length > 0) {        
        savedFile = input.files[0]; // Save the selected file
        document.querySelector('.file-upload').textContent = `Saved file: ${savedFile.name}`;
    } else {
        document.getElementById('file-name').textContent = "No file selected";
    }
}

// Function to generate the ticket
function generateTicket(event) {
    const userName = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const github = document.querySelector('#github').value;
    document.querySelector('.username').textContent = userName;
    document.querySelector('.email').textContent = email;
    event.preventDefault();
    formContainer.style.display = "none"
    submittedContainer.style.display = "block"

}