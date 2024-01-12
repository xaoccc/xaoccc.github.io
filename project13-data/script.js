document.addEventListener('DOMContentLoaded', function() {
    var triggerButton = document.getElementById('triggerButton');
    var overlayMenu = document.getElementById('social');
    var userDataDiv = document.getElementById('user-data');
    var avatar = document.getElementById('avatar');
    var user = document.getElementById('user');
    var socialButton = document.getElementById('social-button');


    triggerButton.addEventListener('click', function(event) {


        // Stop the click event from propagating to the document
        event.stopPropagation();

        // Toggle the display of the overlayMenu
        overlayMenu.style.display = (overlayMenu.style.display === 'block') ? 'none' : 'block';

        // Check if the window width is at most 600px and toggle the display of userDataDiv and avatar
        if (window.innerWidth <= 600) {
            overlayMenu.style.display = 'flex';
            overlayMenu.style.alignItems = 'center';
            overlayMenu.style.justifyContent = 'space-around';
            userDataDiv.style.display = 'none';
            avatar.style.display = 'none';
            user.style.display = 'block';
            triggerButton.style.display = 'none';
            socialButton.style.display = 'block';
        }

    });

    // Close the menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!overlayMenu.contains(event.target) && event.target !== triggerButton) {
            overlayMenu.style.display = 'none';

            // Check if the window width is at most 600px and reset the display of userDataDiv and avatar
            if (window.innerWidth <= 600) {
                overlayMenu.style.display = 'none';
                avatar.style.display = 'block';
                user.style.display = 'flex';
                triggerButton.style.display = 'block';
                socialButton.style.display = 'none';
            }
        }
    });
});


