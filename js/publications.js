async function fetchPublications() {
  const root = window.location.pathname.includes('/pages/') ? '../' : '';
  const res = await fetch(`${root}files/publications.json`);
  return res.json();
}

function renderFigures(pub) {
  if (!pub.figures || !pub.figures.length) return '';

  const items = pub.figures.map(fig => `
    <button class="figure-link" id="button-${fig.id}" onclick="showFigure('${fig.id}')">
      <i class="fas fa-cube"></i>
      <div>
        <strong>Figure ${fig.number}</strong>
        <span>${fig.label}</span>
      </div>
    </button>

    <div id="${fig.id}" class="figure-container">
      <div class="figure-content">
        <button class="back-button" onclick="closeFigure('${fig.id}')">Close</button>

        <h4>${fig.title}</h4>
        <p>${fig.caption}</p>

        <iframe src="${fig.iframe}" title="${fig.title}"></iframe>

        <p>Full screen view <a href="${fig.iframe}" target="_blank">here</a>.</p>
      </div>
    </div>
  `).join('');

  return `
    <section>
      <h4>Interactive Figures</h4>
      <div class="figure-links">${items}</div>
    </section>
  `;
}

function renderPublicationEntry(pub, showFigures) {
  const figuresHtml = showFigures ? renderFigures(pub) : '';
  const figuresNote = (!showFigures && pub.figures && pub.figures.length)
    ? ` <a href="pages/publications.html#${pub.id}">View interactive figures &rarr;</a>`
    : '';

  return `
    <div class="publication" id="${pub.id}">
      <div class="publication-title">
        <a href="${pub.url}" target="_blank">${pub.title}</a>
      </div>
      <div class="publication-authors">${pub.authors}</div>
      <div class="publication-text"><p>${pub.description}${figuresNote}</p></div>
      ${figuresHtml}
    </div>
  `;
}

async function loadPublications(containerId, limit = null) {
  const pubs = await fetchPublications();
  const sorted = pubs.sort((a, b) => b.date.localeCompare(a.date));
  const items = limit ? sorted.slice(0, limit) : sorted;

  document.getElementById(containerId).innerHTML = items
    .map(pub => renderPublicationEntry(pub, false))
    .join('');

  if (window.MathJax) MathJax.typesetPromise();
}

async function loadPublicationsPage() {
  const pubs = await fetchPublications();
  const sorted = pubs.sort((a, b) => b.date.localeCompare(a.date));

  const firstAuthor = sorted.filter(pub => pub.type === 'first-author');
  const coAuthor = sorted.filter(pub => pub.type === 'co-author');

  document.getElementById('first-author-list').innerHTML = firstAuthor
    .map(pub => renderPublicationEntry(pub, true))
    .join('');

  document.getElementById('co-author-list').innerHTML = coAuthor
    .map(pub => renderPublicationEntry(pub, true))
    .join('');

  if (window.MathJax) await MathJax.typesetPromise();

  if (window.location.hash) {
    document.querySelector(window.location.hash)?.scrollIntoView();
  }
}

