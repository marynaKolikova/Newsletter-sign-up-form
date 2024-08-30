 // Get the form element
 const form = document.getElementById('signupForm');

 // Add an event listener for the form submission
 form.addEventListener('submit', function(event) {
   // Prevent the default form submission
   event.preventDefault();

   // Get the email input value
   const emailInput = document.getElementById('emailInput').value;

   // Validate the email (basic validation)
   if (validateEmail(emailInput)) {
     // Handle successful form submission (e.g., send data to a server or show a success message)
     console.log('Form submitted successfully with email:', emailInput);
     alert('Thank you for subscribing!');
   } else {
     // Handle invalid email case
     alert('Please enter a valid email address.');
   }
 });

 // Basic email validation function
 function validateEmail(email) {
   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return re.test(email);
 }