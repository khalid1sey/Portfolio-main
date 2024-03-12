/*
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


// document.getElementById("git-link").addEventListener("click", function() {
//   window.location.href = "https://github.com/khalid1sey/simple_shell";
// });

// document.getElementById("demo").addEventListener("click", function() {
//   window.location.href = "https://example.com/demo";
// });


var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}

const toggleElement = document.querySelector('.mode');
const bodyElement = document.body;

toggleElement.addEventListener('click', () => {
  bodyElement.classList.toggle('dark-mode'); // Toggle 'dark-mode' class on body
});

  //  // Wait for the page to finish loading
  //  window.addEventListener('load', function() {
  //   // Get all the anchor tags on the page
  //   var links = document.getElementsByTagName('a');

  //   // Attach an event listener to each anchor tag
  //   for (var i = 0; i < links.length; i++) {
  //     links[i].addEventListener('click', function(event) {
  //       // Prevent the default link behavior
  //       event.preventDefault();

  //       // Show the wave container
  //       var waveContainer = document.getElementById('waveContainer');
  //       waveContainer.style.visibility = 'visible';
  //       waveContainer.style.opacity = '1';

  //       // Get the href attribute of the clicked link
  //       var href = this.getAttribute('href');

  //       // Delay opening the link for 4 seconds
  //       setTimeout(function() {
  //         // Redirect the user to the desired page
  //         window.location.href = href;
  //       }, 4000);

  //       // Disable the anchor tag to prevent multiple clicks
  //       this.style.pointerEvents = 'none';
  //     });
  //   }
  // }); {% endcomment %}