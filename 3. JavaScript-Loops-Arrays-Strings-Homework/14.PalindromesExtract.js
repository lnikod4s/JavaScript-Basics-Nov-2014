function findPalindromes(str) {
	var result = [];
	var words = str.toLowerCase().match(/\w+/g);
	for (var i = 0; i < words.length; i++) {
		var current = words[i];
		var isPalindrome = true;
		for (var j = 0; j < current.length; j++) {
			if (current[j] !== current[current.length - 1 - j]) {
				isPalindrome = false;
			}
		}
		if (isPalindrome) {
			result.push(current);
		}
	}
	return result;
}

console.log(findPalindromes('There is a man, his name was Bob.'));