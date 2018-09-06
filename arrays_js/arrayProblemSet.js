console.log("Print reverse");

function printReverse(mass) {
	mass.reverse().forEach(function(count) {
		console.log(count);
	});
	console.log("*********************");
}

printReverse([1,2,3,4,5]);

console.log("isUniform");

function isUniform(number) {
	// if (number[0] == number[1] && number[1] == number[2] && number[2] == number[3] ) {
	// 	console.log(true);
	// } else {
	// 	console.log(false);
	// }

	var first = number[0];
	for(var a = 1; a < number.length; a++) {
		if (number[a] !== first) {
			return false;
		} 
	}
	return true;
}
isUniform([1,2,3,1]);
isUniform([1,1,1,1]);
isUniform(["a","a","a"]);

console.log("Sum array");

function sumArray(array) {
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum;
}
sumArray([1,2]);
sumArray([1,2,3]);
sumArray([1,2,3,4]);
sumArray([1,2,3,4,5]);

console.log("maximum index in array");

function maxi(ma) {

	var max = ma[0];
	for(var j = 1; j < ma.length; j++) {
		if (ma[j] > max) {
			max = ma[j];
		}
	}
	return max;
}

maxi([1,2,6,123,463]);
maxi([1,2,8,3,2]);