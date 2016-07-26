function generateGIF(id, inputStrings, delay) {
	var c = document.getElementById(id);
	var ctx = c.getContext("2d");
	var str = "";
	ctx.font = "90px bold";
	
	ctx.fillText(inputStrings, 5, 75);
}