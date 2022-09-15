const form = document.querySelector('.form');
const word = ["reactor", "engine", "wings", "booster", "battery"];
const body = document.querySelector('.body');

const divLetter1 = document.querySelector('#letter1');
const divLetter2 = document.querySelector('#letter2');
const divLetter3 = document.querySelector('#letter3');
const divLetter4 = document.querySelector('#letter4');
const divLetter5 = document.querySelector('#letter5');
const divLetter6 = document.querySelector('#letter6');
const divLetter7 = document.querySelector('#letter7');

const restart = document.getElementById('.restart');
const exit = document.getElementById('.exit');
const submit = document.getElementById('submit')
let guessLetter = '';
const correctGuesses = [];
const wrongGuesses = false;

form.addEventListener('submit', function (event) {
	event.preventDefault();
	guessLetter = document.getElementById('letter').value;

	for (let i = 0; i < word.length; i++) {
		console.log(word[i]);
		if (word[i] === guessLetter) {
			console.log(true);
			correctGuesses.push(guessLetter);
			console.log(correctGuesses);
		}
		if (word[i] == correctGuesses[i]) {
			word.innerHTML = guessLetter;
		}
	}
	// console.log(guessLetter);
});
console.log(word.length);

console.log(word[2]);

for (let i = 0; i < word.length; i++) {
	let div = document.createElement('div');
	div.classList.add('word');
	console.log(word);
}

restart.addEventListener('click', function (event) {
	alert();
	console.log('click');
});

exit.addEventListener('click', function (event) {
	console.log(event);
});
