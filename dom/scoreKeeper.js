alert("Succesfully connected!!!!");

var p1btn = document.getElementById("p1");
var p2btn = document.querySelector("#p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winningScroreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScrore = 5;

p1btn.addEventListener("click", function(){
	if (!gameOver) {
		p1Score++;
		if (p1Score === winningScrore) {
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
});

p2btn.addEventListener("click", function(){
	if (!gameOver) {
		p2Score++;
		if (p2Score === winningScrore) {
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
});

function reset () {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p1Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}

resetButton.addEventListener("click", function(){
	reset();
});

numInput.addEventListener("change", function(){
	winningScroreDisplay.textContent = numInput.value;
	winningScrore = Number(numInput.value);
	reset();
});

