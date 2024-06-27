function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  // Add 1 because getMonth() returns month from 0-11
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
}

function extractLetters() {
  const DATE_CLASS = 'hFEC0W_gameTitle';
  const THEME_CLASS = 'umfyna_riddle';
  const BOARD_CLASS = 'UOpmtW_board';

  let date = document.querySelector(`.${DATE_CLASS} h2`).textContent

  date = formatDate(date)

  const theme = document.querySelector(`.${THEME_CLASS} h1`).textContent
  const board = document.querySelector(`.${BOARD_CLASS}`).textContent;

  copy(',\n' + JSON.stringify({date,theme,board}, null, 2))
  return {date,theme,board} 
}

function savePuzzle(data) {
  let storage = localStorage.getItem('puzzles');
  let puzzle = JSON.stringify(data)

  if (storage) storage = JSON.parse(storage)
    else storage = []

  storage.push(puzzle)

  localStorage.setItem('puzzles', JSON.stringify(storage))
}

// extractLetters()

// savePuzzle(extractLetters())

// copy(JSON.stringify(localStorage.getItem('puzzles'), null, 2)