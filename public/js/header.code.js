document.addEventListener("DOMContentLoaded", () => {
  const initializeHeader = () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuList = document.querySelector('.menu-list');

    if (menuToggle && menuList) {
      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('open');
        menuList.classList.toggle('open');
      });
    }
  };

  // Load the header first, then initialize it
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
      initializeHeader(); // Initialize header after it's loaded
    })
    .catch(error => console.error('Error loading header:', error));
});
