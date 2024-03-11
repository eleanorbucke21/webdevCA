function validateBookingForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var tickets = document.getElementById('tickets').value;
  var date = document.getElementById('date').value;
  var time = document.getElementById('time').value;

  // Validate Name
  if (name.trim() === '') {
    alert('Please enter your name.');
    return false;
  }

  // Validate Email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return false;
  }

  // Additional validations for other fields (if needed)

  // Validate Number of Tickets
  if (tickets.trim() === '' || parseInt(tickets) < 1) {
    alert('Please enter a valid number of tickets.');
    return false;
  }

  // Validate Date and Time
  if (date.trim() === '' || time.trim() === '') {
    alert('Please select a valid date and time.');
    return false;
  }

  // If all validations pass, show a thank you popup
  showThankYouPopup();

  // Prevent form submission
  return false;
}

function showThankYouPopup() {
  alert('Thank you for your booking!'); // You can replace this with a more sophisticated popup/modal
}
