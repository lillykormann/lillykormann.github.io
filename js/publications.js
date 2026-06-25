async function loadPublications(containerId, limit = null) {
  // load publications from the JSON file for recent research
  const res = await fetch('files/publications.json');
  // make sure the files work in javascript (?)
  const pubs = await res.json();

  // sort publications by date (newest first) and limit the number of items if specified
  const sorted = pubs.sort((a, b) => b.date.localeCompare(a.date));
  const items = limit ? sorted.slice(0, limit) : sorted;

  // generate HTML for each publication and insert it into the container
  document.getElementById(containerId).innerHTML = items.map(pub => `
    <div class="publication">
      <div class="publication-title">
        <a href="${pub.url}" target="_blank">${pub.title}</a>
      </div>
      <div class="publication-authors">${pub.authors}</div>
      <div class="publication-text"><p>${pub.description}</p></div>
    </div>
  `).join('');

  // typeset math if MathJax is available
  if (window.MathJax) MathJax.typesetPromise();
}