function compareChars(arr1,arr2) {
	for (var i = 0; i < arr1.length; i++) {
		for (var j = 0; j < arr2.length; j++ ) {
			if (arr1[i] != arr2[i]) {
				return false;
			}
		}
		return true;
	}
}

console.log(compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'],['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']) ? "Equal" : "Not Equal");
console.log(compareChars(['3', '5', 'g', 'd'] ,['5', '3', 'g', 'd']) ? "Equal" : "Not Equal");
console.log(compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'],['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']) ? "Equal" : "Not Equal");