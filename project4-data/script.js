document.addEventListener('DOMContentLoaded', function () {
  var ratings = document.querySelectorAll('.rating-bar .rating');
  var selectedRating = null;

  ratings.forEach(function (rating) {
    rating.addEventListener('click', function () {
      // Remove the 'selected' class from all ratings
      if (selectedRating) {
        selectedRating.classList.remove('selected');
        selectedRating.style.color = ''; // Reset the color
        selectedRating.style.background = ''; // Reset the background
      }

      // Add the 'selected' class to the clicked rating
      rating.classList.add('selected');
      selectedRating = rating;

      // Change the color for the selected rating
      rating.style.color = 'hsl(0, 0%, 100%)';
      rating.style.background = 'hsl(217, 12%, 63%)';
    });
  });

  function submitFeedback() {
    var selectedRating = document.querySelector('.selected');

    if (selectedRating) {
      var container = document.querySelector('.container');
      var result = document.querySelector('.result-message');
      var rateElement = document.querySelector('.rate');

      // Set display property to "none" for the container
      container.style.display = 'none';

      // Set display property to "block" for the result
      result.style.display = 'block';

      // Add the rating to the rate class
      rateElement.innerHTML = selectedRating.textContent;

    } else {
      alert('Please select a rating before submitting.');
    }
  }

  // Attach the submitFeedback function to the click event of the submit button
  var submitButton = document.querySelector('.submit-button');
  submitButton.addEventListener('click', submitFeedback);
});