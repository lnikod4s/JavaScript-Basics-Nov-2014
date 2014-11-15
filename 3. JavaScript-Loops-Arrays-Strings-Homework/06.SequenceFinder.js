function findMaxSequence(arr) {
	var current = [arr[0]];
	var maxSeq = [arr[0]];
	var currElem, prevElem;

	for (var i = 1; i < arr.length; i++) {
		currElem = arr[i];
		prevElem = arr[i - 1];

		if (currElem === prevElem) {
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
	return maxSeq;
}

console.log(findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]));
console.log(findMaxSequence(['happy']));
console.log(findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']));