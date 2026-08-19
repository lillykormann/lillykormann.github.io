async function fetchTalks() {
  const root = window.location.pathname.includes('/pages/') ? '../' : '';
  const res = await fetch(`${root}files/talks.json`);
  return res.json();
}

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June',
                      'July', 'August', 'September', 'October', 'November', 'December'];

function ordinalSuffix(day) {
  if (day % 10 === 1 && day % 100 !== 11) return 'st';
  if (day % 10 === 2 && day % 100 !== 12) return 'nd';
  if (day % 10 === 3 && day % 100 !== 13) return 'rd';
  return 'th';
}

function formatTalkDate(dateStr) {
  const [day, month, year] = dateStr.split('.').map(Number);
  return `${MONTH_NAMES[month - 1]} ${day}${ordinalSuffix(day)}, ${year}`;
}

function renderTalkEntry(talk) {
  const venueHtml = talk.venueUrl
    ? `<a href="${talk.venueUrl}" target="_blank">${talk.venue}</a>`
    : talk.venue;

  return `
    <div class="publication" id="${talk.id}">
      <div class="publication-title">
        <a href="${talk.pdf}" target="_blank">${talk.title}</a>
      </div>
      <div class="publication-authors">${venueHtml} · ${formatTalkDate(talk.date)}</div>
      <div class="publication-text"><p>${talk.description}</p></div>
    </div>
  `;
}



function parseTalkDate(dateStr) {
  const [day, month, year] = dateStr.split('.');
  return `${year}-${month}-${day}`;
}

async function loadTalksPage() {
  const talks = await fetchTalks();
  const sorted = talks.sort((a, b) => parseTalkDate(b.date).localeCompare(parseTalkDate(a.date)));

  const talkEntries = sorted.filter(t => t.type === 'Talk');
  const posterEntries = sorted.filter(t => t.type === 'Poster');

  document.getElementById('talks-list').innerHTML = talkEntries
    .map(renderTalkEntry)
    .join('');

  document.getElementById('posters-list').innerHTML = posterEntries
    .map(renderTalkEntry)
    .join('');

  if (window.MathJax) await MathJax.typesetPromise();

  if (window.location.hash) {
    document.querySelector(window.location.hash)?.scrollIntoView();
  }
}
