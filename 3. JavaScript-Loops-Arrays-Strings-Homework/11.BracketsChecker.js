function checkBrackets(str) {
	var brackets = 0;
	for (var i = 0; i < str.length; i++) {
		if (str[i] === "(") {
			brackets++;
		} else if (str[i] === ")") {
			brackets--;
		}
	}
	console.log(brackets == 0 ? "correct" : "incorrect");
}

checkBrackets('( ( a + b ) / 5 – d )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');