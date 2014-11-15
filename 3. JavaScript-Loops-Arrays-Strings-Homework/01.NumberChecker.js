function printNumbers(num) {
	for (var i = 1; i <= num; i++) {
		if (i % 4 != 0 && i % 5 != 0) {
			console.log(i);
		}
	}
	if (num <= 0) console.log("no");
	return;
}

console.log(printNumbers(20));
console.log("___________");
console.log(printNumbers(-5));
console.log("___________");
console.log(printNumbers(13));