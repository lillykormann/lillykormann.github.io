document.addEventListener('DOMContentLoaded', () => {
  const inPages = window.location.pathname.includes('/pages/');
  const root = inPages ? '../' : '';

  const navHTML = `
    <nav>
      <div class="nav-left">
        <a href="${root}index.html" class="name">Lilly Kormann</a>
        <div class="nav-links">
          <a href="${root}pages/research.html" class="nav-link">Research</a>
          <a href="${root}pages/publications.html" class="nav-link">Publications</a>
          <a href="${root}pages/about.html" class="nav-link">About</a>
        </div>
      </div>
      <button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode">
        <i class="fas fa-sun"></i>
      </button>
    </nav>
  `;

  document.querySelector('main').insertAdjacentHTML('afterbegin', navHTML);

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  if (currentPage === 'index.html' || currentPage === '') {
    document.querySelector('.name').classList.add('active');
  }

  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href').split('/').pop() === currentPage) {
      link.classList.add('active');
    }
  });
});
