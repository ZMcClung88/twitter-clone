$(document).ready(function(){
	// Click event, double textarea size when clicked
	$('.tweet-compose').on('click', function(){
			$('.tweet-compose').css({'height' : '5em'});
			$('#tweet-controls').show();
	})

	var maxCount = 20;

	$('.tweet-compose').on('keyup', function() {
		console.log('keyup triggered');
		var content = $('.tweet-compose').val();
		console.log(content.length);
		var contentLength = content.length;
		var remainingCharacters = maxCount - contentLength;
		console.log(remainingCharacters);
		$('#char-count').text(remainingCharacters);
		if(remainingCharacters < 10) {
			$('#char-count').css("color","red");
		} else {
			$('#char-count').css("color", "black");
		}
		// $('#tweet-submit').attr("disabled"==="disabled");
	})
})