
// Get the form element from the HTML using its ID
let form = document.getElementById("form");

// Attach an event listener to the form listening for submit event
form.addEventListener("submit", function (event) {
    // Prevent the default behavior of the form (submitting as a regular HTTP request)
    event.preventDefault();
