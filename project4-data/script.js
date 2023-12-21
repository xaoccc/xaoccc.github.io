document.addEventListener('DOMContentLoaded', function () {
  var ratings = document.querySelectorAll('.rating-bar .rating');

  ratings.forEach(function (rating) {
    rating.addEventListener('click', function () {
      // Remove the 'selected' class from all ratings
      ratings.forEach(function (r) {
        r.classList.remove('selected');
      });

      // Add the 'selected' class to the clicked rating
      rating.classList.add('selected');

      // Change the color for the selected rating
      rating.style.color = 'gold';
    });
  });

  function submitFeedback() {
    var selectedRating = document.querySelector('.rating-bar .selected');

    if (selectedRating) {
      var container = document.querySelector('.container');
      var result = document.querySelector('.result-message');
      var rate = document.querySelector('.rate');

      // Set display property to "none" for the container
      container.style.display = 'none';

      // Set display property to "block" for the result
      result.style.display = 'block';

      // Create and add the thank-you message to the result
      var rating = document.getElementsByClassName('rate');
      rating.innerHTML = selectedRating.textContent;

    } else {
      alert('Please select a rating before submitting.');
    }
  }

  // Attach the submitFeedback function to the click event of the submit button
  var submitButton = document.querySelector('.submit-button');
  submitButton.addEventListener('click', submitFeedback);
});