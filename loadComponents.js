const darkToggle = document.getElementById('darkModeToggle');

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.removeItem('darkMode');
  }
});

window.addEventListener('load', () => {
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark');
  }
  // Your other JS code here (e.g. typed intro, scroll reveal, etc.)
});
