document.addEventListener('DOMContentLoaded', () => {
  const inPages = window.location.pathname.includes('/pages/');
  const root = inPages ? '../' : '';

  const navHTML = `
    <nav>
      <div class="nav-left">
        <a href="${root}index.html" class="name">Lilly Kormann</a>
        <div class="nav-links" id="nav-links">
          <a href="${root}pages/research.html" class="nav-link">Research</a>
          <a href="${root}pages/publications.html" class="nav-link">Publications</a>
          <a href="${root}pages/talks.html" class="nav-link">Talks</a>
          <a href="${root}pages/about.html" class="nav-link">About</a>
        </div>
      </div>
      <div class="nav-right">
        <button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode">
          <i class="fas fa-sun"></i>
        </button>
        <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
          <i class="fas fa-bars"></i>
        </button>
      </div>
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

  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
});
