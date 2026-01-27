document.addEventListener('DOMContentLoaded', () => {
  const navHTML = `
    <nav>
      <div class="nav-left">
        <a href="index.html" class="name">Lilly Kormann</a>
        <div class="nav-links">
          <a href="research.html" class="nav-link">Research</a>
          <a href="about.html" class="nav-link">About</a>
        </div>
      </div>
      <button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode">
        <i class="fas fa-sun"></i>
      </button>
    </nav>
  `;
  
  document.querySelector('main').insertAdjacentHTML('afterbegin', navHTML);
  
  // set active page so coloring works
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  // mark name as active on homepage 
  if (currentPage === 'index.html' || currentPage === '') {
    document.querySelector('.name').classList.add('active');
  }
  
  // mark nav links as active on other pages
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});