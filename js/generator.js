function generateGIF(id, inputStrings, delay, height) {
	var font_setting = height * 0.9 + "px bold";
	var y_offset = height * 0.75;

	var c = document.getElementById(id);
	var ctx = c.getContext("2d");
	var str = "";
	var encoder = new GIFEncoder();
	encoder.setRepeat(0);
	encoder.setDelay(delay);
	encoder.start();

	ctx.font = font_setting;
	var full_length = ctx.measureText(inputStrings).width + 10;
	c.setAttribute("height", height);
	c.setAttribute("width", full_length + "");
	
	ctx.fillStyle = 'rgb(255,255,255)';
  	ctx.fillRect(0,0,1000, 100);

	ctx.fillStyle = 'rgb(0,0,0)';
	ctx.font = font_setting;
	ctx.fillText(inputStrings, 5, y_offset);

	console.log(encoder.addFrame(ctx));
	
	encoder.finish();
	document.getElementById('result').src = 'data:image/gif;base64,'+encode64(encoder.stream().getData())

}