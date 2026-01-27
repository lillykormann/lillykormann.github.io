document.addEventListener('DOMContentLoaded', () => {
  const footerHTML = `
    <footer>
      <div class="footer-copyright">
        <p>© Lilly A. Kormann 2026</p>
      </div>
      <div class="footer-follow">
        <a href="https://github.com/lillykormann" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="https://bsky.app/profile/lillykormann.bsky.social" target="_blank"><i class="fa-brands fa-square-bluesky"></i></a>
      </div>
    </footer>
  `;
  
  document.querySelector('main').insertAdjacentHTML('beforeend', footerHTML);
});