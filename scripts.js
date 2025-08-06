document.addEventListener('DOMContentLoaded', function() {
  // This ensures the script runs only after the entire HTML document is loaded and parsed.
  // You only need one of these.

  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  // It's good practice to check if the elements exist before adding event listeners
  // to avoid errors if the HTML elements aren't found.
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      // When the menuToggle (e.g., a hamburger icon) is clicked,
      // it toggles the 'active' class on the mainNav (e.g., your navigation menu).
      // This 'active' class is typically used in CSS to show/hide or style the menu.
      mainNav.classList.toggle('active');
    });
  }
}); // Closing brace for the DOMContentLoaded function and listener