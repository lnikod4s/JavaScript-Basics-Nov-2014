function findMostFreqNum(arr) {
	var highestCount = 0;
	for (var i = 0; i < arr.length; i++) {
		var count = 1;
		for (var j = 0; j < arr.length; j++) {
			if (j !== i && arr[i] === arr[j]) {
				count++;
			}
			if (count > highestCount) {
				highestCount = count;
				var result = arr[i];
			}
		}
	}
	console.log("%s (%s times)", result, highestCount);
}

findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);