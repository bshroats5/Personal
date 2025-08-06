document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
  });