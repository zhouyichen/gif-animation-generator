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

        generateGIF(text, delay, 32);
    });
});