function findMaxSequence(arr) {
	var current = [arr[0]];
	var maxSeq = [arr[0]];
	var currElem, prevElem;

	for (var i = 1; i < arr.length; i++) {
		currElem = arr[i];
		prevElem = arr[i - 1];

		if (currElem > prevElem) {
			current.push(currElem);
			if (i === arr.length - 1 && maxSeq.length <= current.length) {
				maxSeq = current;
			}
		} else {

			if (maxSeq.length <= current.length) {
				maxSeq = current;
			}
			current = [currElem];
		}
	}
	if (maxSeq.length === 1) {
		maxSeq = 'no';
	} else {
		maxSeq = '[' + maxSeq + ']';
	}
	return maxSeq;
}

console.log(findMaxSequence([3, 2, 3, 4, 2, 2, 4]));
console.log(findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]));
console.log(findMaxSequence([3, 2, 1]));


