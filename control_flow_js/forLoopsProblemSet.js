// Print all numbers between -10 and 19

console.log("Print all numbers between -10 and 50");

for (var a = -10; a < 20; a++) {
	console.log(a);
}


// Print all even numbers between 10 and 40

console.log("Print all even numbers between 10 and 40");

for (var b = 10; b <= 40; b+=2) {
	console.log(b);
}

// Print all odd numbers between 300 and 333

console.log("Print all odd numbers between 300 and 333");

for (var c = 300; c <= 333;) {
	if (c % 2 !== 0) {
		console.log(c);
	}
	c+=1;
}

// Print all numbers divisible by 5 AND 3 between 5 and 50

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");

for (var d = 5; d <= 50;) {
	if (d % 5 === 0 && d % 3 === 0) {
		console.log(d);
	}
	d+=1;
}