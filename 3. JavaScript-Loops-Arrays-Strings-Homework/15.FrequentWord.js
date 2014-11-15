function findMostFreqWord(str) {
	var words = str.toLowerCase().match(/\w+/g);
	var maxCount = 0;
	for (var i = 0; i < words.length; i++) {
		var count = 1;
		for (var j = 0; j < words.length; j++) {
			if (j != i && words[i] === words[j]) {
				count++;
			}
		}
		if (count > maxCount) {
			maxCount = count;
			var result = [words[i]];
		} else if (count === maxCount && result.indexOf(words[i]) < 0) {
			result.push(words[i]);
		}
	}
	result.sort();
	for (var k = 0; k < result.length; k++) {
		console.log("%s -> %s times", result[k], maxCount);
	}
}

findMostFreqWord('in the middle of the night');
console.log("-------------------");
findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
console.log("-------------------");
findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');