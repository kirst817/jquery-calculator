$(document).ready(function() {

  $('.buttons span').click(function() {
	        var screenText = $('#screen').text();
	        $('#screen').text(screenText + $(this).text());
	    });

  function resetScreen() {
	$('#screen').text("");
	}
});
