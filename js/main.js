$(function() {
	$('#generate').mouseup(function (){
        var text = $('#inputString').val();
        if (!text) {
        	$('#inputStringForm').addClass('has-error');
        	return;
        } else {
        	$('#inputStringForm').remove('has-error');
        }
        
        var delay = parseInt($('#delay').val());
        if (!delay) {
        	delay = 150;
        } else if (delay < 0) {
        	delay = 100;
        } else if (delay > 10000) {
        	delay = 10000;
        } else {
        	$('#delayForm').addClass('has-error');
        }

        var size = parseInt($('#size').val());
        if (!size) {
        	size = 32;
        } else if (size < 0) {
        	size = 10;
        } else if (size > 200) {
        	size = 200;
        } else {
        	$('#sizeForm').addClass('has-error');
        }

        generateGIF(text, delay, size);
    });
});