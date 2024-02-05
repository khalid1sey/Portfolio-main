
//Menu icon animation
// function myFunction(x) {
//   x.classList.toggle("change");
//   var navigation = document.querySelector(".navigation ul");
//   navigation.classList.toggle("active");
// }

// // Toggle navigation on hamburger menu click
// document.querySelector('.hamburger-menu').addEventListener('click', function() {
//     document.querySelector('.navigation ul').classList.toggle('active');
//   });
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