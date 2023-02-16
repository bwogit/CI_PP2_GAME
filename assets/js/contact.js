/*
* Call the quote of the day API
*/
fetch("https://api.quotable.io/random")
.then(response => response.json())
.then(data => {
    let quote = data.content;
    let author = data.author;
    document.getElementById("quote").innerHTML = `Quote of the day - "${quote}" - ${author}`;
});
/* 
* Sends an email to the site owner on click submit
* Insttructions and script taken from the official EmailJS tutorial 
* https://www.emailjs.com/docs/tutorial/creating-contact-form/
*/

(function() {
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
      //reset form after submit
      form.reset();
      formSubmittedMessage();
    // If there was an error sending the email, log an error message to the console
    }, function (error) {
      console.log('FAILED...', error);
    });
});

/**
 * Display a thank you image on the screen once the contact form has been submitted
 */
function formSubmittedMessage() {
  let message = `
          <div class="image-other-screens">
              <img src="assets/images/thank_you.jpg" alt="Open envelope with thank you card">
          </div>
          <a href="contact.html">Back to Game</a>
          `;
  document.getElementById("form_area").innerHTML = message;
}

