const guessAgain = document.getElementById('guess');
const letterButtons = document.querySelector('article > button');
const playAgain = document.getElementById('play-again');
const space1 = document.querySelector('letters1');
const space2 = document.querySelector('letters2');
const space3 = document.querySelector('letters3');
const space4 = document.querySelector('letters4');

let correctGuesses = 0;
let wrongGuesses = 5;
let wordsArray = ['Fast', 'Mask', 'Pass', 'Gasp', 'Last', 'Past'];


document.querySelector('article')
  .addEventListener('click', handleClick);
playAgain.addEventListener('click', init);


function init() {
  wrongGuesses = [];
  const randomIdx = Math.floor(Math.random() * wordsArray.length);
  secret = wordsArray[randomIdx].toUpperCase().split('');
  

function Buttons() {
  letterButtons.forEach(function(btn) {
    const ltr = btn.textContent;
    if (wrongGuesses.includes(ltr)) {
      btn.className = 'wrong';
    } else if (guess.includes(ltr)) {
      btn.className = 'correct';
    } else {
      btn.className = '';
    }
  });
  
}

function getGameStatus() {
  if (!guess.includes('_')) return 'W';
  if (wrongGuesses.length > MAX_WRONG_GUESSES) return 'L';
  return null;
}
`
