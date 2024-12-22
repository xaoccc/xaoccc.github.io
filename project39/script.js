let savedFile = null; // Variable to store the file

// Function to save the file
function saveFile(event) {
    const input = event.target;
    if (input.files.length > 0) {
        savedFile = input.files[0]; // Save the selected file
        document.getElementById('file-name').textContent = `Saved file: ${savedFile.name}`;
    } else {
        savedFile = null;
        document.getElementById('file-name').textContent = "No file selected";
    }
}

// Function to use the saved file later
function useSavedFile() {
    if (savedFile) {
        console.log("Saved file:", savedFile);
        alert(`Using file: ${savedFile.name}`);
        // Example: Read the file content if it's text
        const reader = new FileReader();
        reader.onload = (e) => {
            console.log("File content:", e.target.result);
        };
        reader.readAsText(savedFile);
    } else {
        alert("No file saved yet!");
    }
}