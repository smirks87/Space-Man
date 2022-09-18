const input = document.querySelector('.input');
const word = ['reactor', 'engine', 'wings', 'booster', 'battery'];
const body = document.querySelector('.body');

let divWord = document.querySelector('.word');
const wrongLetters = document.querySelector('.wrong-letters');
const restart = document.getElementById('restart');
const exit = document.getElementById('exit');
const submit = document.getElementById('submit');
// let guessLetter = '';
const correctGuesses = [];
const wrongGuesses = [];
let blankWord = [];
let randomIndex = Math.floor(Math.random() * word.length);
let randomWord = word[randomIndex];
console.log(randomWord);
function getRandomWord() {
	let randomIndex = Math.floor(Math.random() * word.length);
	let randomWord = word[randomIndex];
	console.log(randomWord);
}

function fillBlankWord() {
	for (let i = 0; i < randomWord.length; i++) blankWord.push('_');
	divWord.innerHTML = blankWord;
}
fillBlankWord();

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
			blankWord.splice(i, 1, guessLetter)
			divWord.innerHTML = blankWord;
			console.log(blankWord)
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
