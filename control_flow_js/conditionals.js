var age = prompt("Enter your age");

if (age < 0) {
	alert("Error, age can not be negative");
} else if (age==21) {
	alert("happy 21st birthday!!!");
} else if (age %2 !== 0) {
	alert("Your age is odd");
} else {
	alert("good");
}