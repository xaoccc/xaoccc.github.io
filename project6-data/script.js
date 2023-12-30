document.addEventListener('DOMContentLoaded', function () {

        var lastClickedButton = null;
        // There are three options:
        function displayContents() {

            var commonAncestor = this.closest('.section');
            var contents = commonAncestor.querySelector('.section-contents');
            var buttonImage = commonAncestor.querySelector('.section-button');
            // 1. The clicked button is the same clicked last time:
            if (this === lastClickedButton) {

                contents.style.display = 'none';
                buttonImage.style.background = 'url("./project6-data/assets/images/icon-plus.svg")';
                lastClickedButton = null;

            } else {
                // 2. The clicked button is NOT the same clicked last time:
                if (lastClickedButton) {
                    var prevCommonAncestor = lastClickedButton.closest('.section');
                    var prevContents = prevCommonAncestor.querySelector('.section-contents');
                    var prevButtonImage = prevCommonAncestor.querySelector('.section-button');

                    prevContents.style.display = 'none';
                    prevButtonImage.style.background = 'url("./project6-data/assets/images/icon-plus.svg")';
                 // 3. The clicked button is the first button ever clicked:
                } else {

                    contents.style.display = 'block';
                    buttonImage.style.background = 'url("./project6-data/assets/images/icon-minus.svg")';
                    lastClickedButton = this;
                }
            }
        }
        // Here we get all the buttons:
        var buttons = document.getElementsByTagName("button");

        // Traverse the buttons and look for a click event:
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', displayContents);
            }
});
