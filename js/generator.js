function generateGIF(inputString, delay, size) {
	var font_setting = size + "px 'Microsoft YaHei', Myfont";
	var y_offset = size * 1.5;
	var x_offset = size * 0.6;

	var c = document.createElement("canvas");
	var ctx = c.getContext("2d");
	var str = "";
	var encoder = new GIFEncoder();
	encoder.setRepeat(0);
	encoder.setDelay(delay);
	encoder.start();

	// setup size and background
	ctx.font = font_setting;
	var full_length = ctx.measureText(inputString).width + 2 * x_offset;
	c.setAttribute("height", size * 2.5);
	c.setAttribute("width", full_length);

	add_text_frame(inputString);
	add_text_frame('');

	for (var i = 0; i < inputString.length; i++) {
		str = str + inputString[i];
		add_text_frame(str);
	}

	add_text_frame(str);
	add_text_frame(str);

	encoder.finish();
	var binary_gif = encoder.stream().getData();
	var data_url = 'data:image/gif;base64,'+encode64(binary_gif);
	document.getElementById('result').src = data_url;

	function add_text_frame(str) {
		ctx.fillStyle = 'rgb(255,255,255)';
	  	ctx.fillRect(0, 0, full_length, size * 2.5);

	  	// setup font size and color
		ctx.fillStyle = 'rgb(0,0,0)';
		ctx.font = font_setting;

		ctx.fillText(str, x_offset, y_offset);
		encoder.addFrame(ctx);
	}
}

