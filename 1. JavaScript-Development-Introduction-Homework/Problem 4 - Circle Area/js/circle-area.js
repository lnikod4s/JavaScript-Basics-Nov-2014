function calcCircleArea() {
	var r = jsConsole.readInteger('#tb-number');
	var circleArea = Math.PI * r * r;
	jsConsole.writeLine('r = ' + r + '; area = ' + circleArea + ';');
}