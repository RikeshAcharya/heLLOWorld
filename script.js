// Select the navbar
const navbar = document.querySelector('.navbar');

// Add an event listener to the window for scroll events
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    // Add the 'scrolled' class when the user scrolls down
    navbar.classList.add('scrolled');
  } else {
    // Remove the 'scrolled' class when at the top
    navbar.classList.remove('scrolled');
  }
});
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
// Toggle navigation links visibility when clicking on the hamburger menu
document.getElementById('hamburger-icon').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
  });
  