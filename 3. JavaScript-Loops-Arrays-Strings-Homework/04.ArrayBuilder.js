function createArray() {
	var arr = new Array();

	for (var i = 0; i < 20; i++) {
		arr[i] = i * 5;
	}
	return arr;
}

console.log(createArray());