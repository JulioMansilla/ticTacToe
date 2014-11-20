$(document).ready(function() {

	alert("Welcome to Tic Tac Toe. Player X, begin.");

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
		alert("Gameboard reset.");
		counter = 1;

	});

});