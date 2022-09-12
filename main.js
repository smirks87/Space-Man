const form = document.querySelector('form');
const word = '';
form.addEventListener('submit', function (event) {
	event.preventDefault();
	const guessLetter = document.getElementById('letter').value;
	console.log(typeof guessLetter);
	console.log(reactor.includes(guessLetter));
});
console.log(word.length);

if (word = '')
