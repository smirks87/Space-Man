const input = document.querySelector('.input');
const word = ['reactor', 'engine', 'wings', 'booster', 'battery'];
const body = document.querySelector('.body');

const divWord = document.querySelector('.word');

const restart = document.getElementById('restart');
const exit = document.getElementById('exit');
const submit = document.getElementById('submit');
// let guessLetter = '';
const correctGuesses = [];
const wrongGuesses = [];

let randomWord = '';


function getRandomWord() {
	
	let randomIndex = Math.floor(Math.random() * word.length);
	let randomWord = word[randomIndex];
	console.log(randomWord);
}
// function compareLetter() {
// 	randomWord.includes(form.value)
// }
function compareLetter(event) {
	event.preventDefault();
	let guessLetter = input.innerHTML;
	console.log(guessLetter);
	for (let i = 0; i < randomWord.length; i++) {
		// console.log(randomWord);
		if (randomWord[i] === guessLetter) {
			console.log(true);
			correctGuesses.push(guessLetter);
			console.log(correctGuesses);
		}
		if (randomWord[i] == correctGuesses[i]) {
			word.innerHTML = guessLetter;
		}
	}
}

submit.addEventListener('submit', compareLetter);

// for (let i = 0; i < word.length; i++) {
// 	let div = document.createElement('div');
// 	div.classList.add('word');
// 	// console.log(word);
// }

restart.addEventListener('click', getRandomWord);

exit.addEventListener('click', function (event) {});
