const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('nav a');

function setActivePage(pageId) {
  pages.forEach(page => {
    if (page.id === pageId) {
      page.classList.add('active');
    } else {
      page.classList.remove('active');
    }
  });
}

navLinks.forEach(navLink => {
  navLink.addEventListener('click', event => {
    event.preventDefault();
    setActivePage(navLink.getAttribute('href').slice(1));
  });
});
const spinner = document.querySelector('.spinner');

function startSpinner() {
  var cube = document.querySelector('.cube');
  cube.style.animationPlayState = 'running';
}

function stopSpinner() {
  var cube = document.querySelector('.cube');
  cube.style.animationPlayState = 'paused';
}