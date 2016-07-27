function generateGIF(id, inputString, delay, height) {
	var font_setting = height * 0.9 + "px bold";
	var y_offset = height * 0.75;

	var c = document.getElementById(id);
	var ctx = c.getContext("2d");
	var str = "";
	var encoder = new GIFEncoder();
	encoder.setRepeat(0);
	encoder.setDelay(delay);
	encoder.start();

	// setup size and background
	ctx.font = font_setting;
	var full_length = ctx.measureText(inputString).width + 10;
	c.setAttribute("height", height);
	c.setAttribute("width", full_length + "");
	ctx.fillStyle = 'rgb(255,255,255)';
  	ctx.fillRect(0,0,1000, 100);

  	// setup font size and color
	ctx.fillStyle = 'rgb(0,0,0)';
	ctx.font = font_setting;

	for (var i = 0; i < inputString.length; i++) {
		console.log(inputString[i]);
		str = str + inputString[i];
		ctx.fillText(str, 5, y_offset);
		encoder.addFrame(ctx);
	}

	ctx.fillText(str, 5, y_offset);
	encoder.addFrame(ctx);

	encoder.finish();
	var binary_gif = encoder.stream().getData();
	var data_url = 'data:image/gif;base64,'+encode64(binary_gif);
	document.getElementById('result').src = data_url;
}