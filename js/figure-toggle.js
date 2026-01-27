function showFigure(figureId) {
  document.getElementById('button-' + figureId).classList.add('hidden');
  document.getElementById(figureId).classList.add('active');
}

function closeFigure(figureId) {
  document.getElementById(figureId).classList.remove('active');
  document.getElementById('button-' + figureId).classList.remove('hidden');
}