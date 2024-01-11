document.addEventListener('DOMContentLoaded', function() {
    var triggerButton = document.getElementById('triggerButton');
    var overlayMenu = document.getElementById('social');

    triggerButton.addEventListener('click', function(event) {
        // Stop the click event from propagating to the document
        event.stopPropagation();

        // Toggle the display of the overlayMenu
        overlayMenu.style.display = (overlayMenu.style.display === 'block') ? 'none' : 'block';
    });

    // Close the menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!overlayMenu.contains(event.target) && event.target !== triggerButton) {
            overlayMenu.style.display = 'none';
        }
    });
});

