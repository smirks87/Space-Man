const input = document.querySelector('.input');
const word = ['reactor', 'engine', 'wings', 'booster', 'battery'];
const body = document.querySelector('.body');

let divWord = document.querySelector('.word');
const wrongLetters = document.querySelector('.wrong-letters');
const restart = document.getElementById('restart');
const exit = document.getElementById('exit');
const submit = document.getElementById('submit');
// let guessLetter = '';
let correctGuesses = [];
let wrongGuesses = [];
let blankWord = [];
let currentWord = word.length
let randomIndex = Math.floor(Math.random() * currentWord);
let randomWord = word[randomIndex];
console.log(randomWord);
function getRandomWord() {
	currentWord--
	 randomIndex = Math.floor(Math.random() * currentWord);
	 randomWord = word[currentWord];
	console.log(randomWord);
	wrongGuesses = []
	correctGuesses = []
	fillBlankWord()
	console.log(blankWord)
	divWord.innerHTML = blankWord
}

// function compareWords() {
	// 	blankWord.toString();
	// 	console.log(blankWord);
	// 	if ((blankWord = randomWord)) {
		// 		// blankWord = []
		// 	}
		// }
		
		function fillBlankWord() {
			blankWord = []
			for (let i = 0; i < randomWord.length; i++) blankWord.push('_');
			divWord.innerHTML = blankWord;
}


function compareLetter(event) {
	event.preventDefault();
	let guessLetter = input.value;
	console.log(guessLetter);
	console.log(randomWord);
	for (let i = 0; i < randomWord.length; i++) {
		if (randomWord[i] === guessLetter) {
			console.log(true);
			correctGuesses.push(guessLetter);
			console.log(correctGuesses);
			blankWord.splice(i, 1, guessLetter);
			divWord.innerHTML = blankWord;
			console.log(blankWord);
		}
		if (blankWord[i] === guessLetter) {
		}
	}
	if (!randomWord.includes(guessLetter)) {
		console.log(false);
		wrongGuesses.push(guessLetter);
		console.log(wrongGuesses);

		wrongLetters.innerHTML = wrongGuesses;
	}
}

// function fillCorrectWord() {
// 	for (let i = 0; i < randomWord.length; i++) {
// 		if (correctGuesses[i] === randomWord[i]) {
// 			divWord.innerHTML.replace('_', guessLetter);
// 		}
// 	}
// }
// fillCorrectWord()
submit.addEventListener('click', compareLetter);

// for (let i = 0; i < word.length; i++) {
// 	let div = document.createElement('div');
// 	div.classList.add('word');
// 	// console.log(word);
// }

restart.addEventListener('click', getRandomWord);

exit.addEventListener('click', function (event) {});
