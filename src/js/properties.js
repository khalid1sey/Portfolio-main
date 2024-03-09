let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("project");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


showSlides();


// const sr = ScrollReveal ({
//   distance: '60px',
//   duration: 2500,
//   delay: 400,
//   reset: true
// })

// sr.reveal('.hero-content',{delay: 200, origin: 'top'})
// sr.reveal('.tech-title',{delay: 400, origin: 'left'})
// sr.reveal('.tech-container .tech',{delay: 300, origin: 'top'})
// sr.reveal('.projects-container .project',{delay: 400, origin: 'top'})
// sr.reveal('.contact',{delay: 500, origin: 'top'})

// const toggleButton = document.getElementById('theme-toggle');
// const content = document.getElementById('content');

// toggleButton.addEventListener('click', function() {
//   content.classList.toggle('dark-mode');

//   if (content.classList.contains('dark-mode')) {
//     toggleButton.textContent = "Light Mode";
//   } else {
//     toggleButton.textContent = "Toggle Dark Mode";
//   }
// });

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("projects");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }