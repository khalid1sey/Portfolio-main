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


document.getElementById("git-link").addEventListener("click", function() {
  window.location.href = "https://github.com/khalid1sey/simple_shell";
});

document.getElementById("demo").addEventListener("click", function() {
  window.location.href = "https://example.com/demo";
});

