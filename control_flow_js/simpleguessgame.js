var number = 5;
var guess = Number(prompt("Guess a number"));

if (guess === number) {
	alert("You guessed it!!!!!");
} else if (guess > number) {
	alert("Too high. Try again");
} else {
	alert ("Too low. Try again");
}
