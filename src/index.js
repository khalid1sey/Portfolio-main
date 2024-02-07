/**
 * menu
 */
function myFunction() {
  var x = document.getElementById("navigation");
  var navLinks = document.querySelector(".nav-link");
  var icon = document.getElementById("ham-menu");
  
  if (x.className === "navigation") {
    x.className += " responsive";
    navLinks.style.display = "block";
    icon.classList.remove("ri-menu-2-fill");
    icon.classList.add("ri-close-fill");
  } else {
    x.className = "navigation";
    navLinks.style.display = "flex";
    icon.classList.remove("ri-close-fill");
    icon.classList.add("ri-menu-2-fill");
  }
}

/**
 * form submit
 */

  // Function to send email
  function sendEmail(e) {
    e.preventDefault();

    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Set email parameters
    var templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Khalid', // Replace with your name or recipient's name
      message: message
    };

    // Send email using EmailJS
    emailjs.send('service_csg6lqk', 'template_7d9bwag', templateParams)
      .then(function(response) {
        console.log('Email sent successfully!', response.status, response.text);
        // Optionally, display a success message to the user
        alert('Email sent successfully!');
      }, function(error) {
        console.log('Oops! An error occurred:', error);
        // Optionally, display an error message to the user
        alert('Oops! An error occurred.');
      });
  }

  // Add event listener to the form
  document.getElementById('contact-form').addEventListener('submit', sendEmail);
