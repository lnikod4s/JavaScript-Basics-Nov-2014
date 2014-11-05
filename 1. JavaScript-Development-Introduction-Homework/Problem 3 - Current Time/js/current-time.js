function currentTimeOnClick() {
	var time = new Date();
	var hours = time.getHours();
	var minutes = time.getMinutes();
	jsConsole.writeLine(hours + ':' + (minutes < 10 ? '0' : '') + minutes);
}