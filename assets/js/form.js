

(function() {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init('rUyj3ASnTOPeeYh8M');
})();

// Get the form element from the HTML using its ID
var form = document.getElementById("form");

// Attach an event listener to the form that listens for the submit event
form.addEventListener("submit", function (event) {
  // Prevent the default behavior of the form (submitting as a regular HTTP request)
  event.preventDefault();

  // Use the emailjs.sendForm method to send the form data as an email
  emailjs.sendForm("service_form","template_form", this)
    // If the email was successfully sent, log a success message to the console
    .then(function (response) {
      console.log('SUCCESS!', response.status, response.text);
    // If there was an error sending the email, log an error message to the console
    }, function (error) {
      console.log('FAILED...', error);
    });
});