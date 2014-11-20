$(document).ready(function() {

	var counter = 1;

	$(document).on('click', '.square', function() {
		
		if (counter % 2 == 0) {
			$(this).children(".squareValue").html("O");
				counter = counter + 1;
				alert("Player X, your move.");
			} else {
				$(this).children(".squareValue").html("X");
				counter = counter + 1;
				alert("Player O, your move");
			}
	});

	$(document).on('click', '#reset', function() {
		counter = 1;
		$(".squareValue").html("");
		alert("Gameboard reset.");
	});

});