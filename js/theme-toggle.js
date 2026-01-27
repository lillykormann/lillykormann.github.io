document.addEventListener('DOMContentLoaded', () => {
  // small delay bc if nav does not exist yet, the script may run before it is added
  setTimeout(() => {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    
    const icon = themeToggle.querySelector('i');

    // check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    // set initial icon
    if (currentTheme === 'dark') {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }

    // toggle theme on button click
    themeToggle.addEventListener('click', () => {
      const theme = document.documentElement.getAttribute('data-theme');
      const newTheme = theme === 'light' ? 'dark' : 'light';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      // toggle icon being the sun/moon fontawesome versions
      if (newTheme === 'dark') {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
      } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      }
    });
  }, 0);
});