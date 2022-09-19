const input = document.querySelector('.input');
const word = ['reactor', 'engine', 'wings', 'booster', 'battery'];
const body = document.querySelector('.body');
const container = document.querySelector('.container');
const endScreen = document.querySelector('.end-screen');
let gameIsOver = false;
let divWord = document.querySelector('.word');
const wrongLetters = document.querySelector('.wrong-letters');
const restart = document.getElementById('restart');
const exit = document.getElementById('exit');
const submit = document.getElementById('submit');
let correctGuesses = [];
let wrongGuesses = [];
let blankWord = [];
let currentWord = word.length;
let randomIndex = Math.floor(Math.random() * currentWord);
let randomWord = word[randomIndex];

function gameStart() {
	if (gameIsOver === false) {
		getRandomWord();
		fillBlankWord();
		compareLetter();
	} else {
		gameIsOver = true;
		gameOver();
	}
}

function getRandomWord() {
	if (randomWord) {
		currentWord--;
		randomIndex = Math.floor(Math.random() * currentWord);
		randomWord = word[currentWord];
		wrongGuesses = [];
		correctGuesses = [];
		fillBlankWord();
		divWord.innerHTML = blankWord;
	}
}

function fillBlankWord() {
	if (randomWord) {
		blankWord = [];
		for (let i = 0; i < randomWord.length; i++) blankWord.push('_');
		divWord.innerHTML = blankWord;
	}
}

function compareLetter(event) {
	event.preventDefault();
	let guessLetter = input.value;
	for (let i = 0; i < randomWord.length; i++) {
		if (randomWord[i] === guessLetter) {
			correctGuesses.push(guessLetter);
			blankWord.splice(i, 1, guessLetter);
			divWord.innerHTML = blankWord;
		}
		if (blankWord[i] === guessLetter) {
		}
	}
	if (!randomWord.includes(guessLetter)) {
		wrongGuesses.push(guessLetter);
		wrongLetters.innerHTML = wrongGuesses;
	}
}
function gameOver() {
	if (currentWord < 0) {
		gameIsOver = true;
		container.style.display = 'none';
		endScreen.style.display = 'inline';
	}
}
gameOver();

submit.addEventListener('click', compareLetter);

restart.addEventListener('click', getRandomWord);
