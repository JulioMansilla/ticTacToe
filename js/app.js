$(document).ready(function() {
	var counter = 1;

	$(document).on('click', '.square', function() {
		console.log("Square clicked.");
	});

	$(document).on('click', '#reset', function() {
		console.log("Gameboard reset.");
	});

});