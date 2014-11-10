function treeArea(b){
	return b*b/3 + Math.PI*b*b*16/36;
}

function houseArea(a){
	return a*a + a*a/3;
}

function treeOrHouse(a, b){
	return treeArea(b) > houseArea(a) ? "tree/"+treeArea(b).toFixed(2) : "house/"+houseArea(a).toFixed(2);
}

console.log(treeOrHouse(3, 2));
console.log(treeOrHouse(3, 3));
console.log(treeOrHouse(4, 5));