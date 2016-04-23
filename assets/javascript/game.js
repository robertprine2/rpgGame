//waits for js to start until after html has loaded

$(document).ready(function(){

	// ******Global variables for abilities?

	// ******object of characters that can be chosen -- maybe right facing and left facing? 

	var game = {
		characters : 
			[jack = {
			name: "Jack",
			totalHealth: 400,
			currentHealth: 400,
			attack: 50,
			image: "<img class='pixelPic' src='assets/images/jack.png'>"}, 

			rSanta = {
			name: "Radioactive Santa",
			totalHealth: 500,
			currentHealth: 500,
			attack: 40,
			image: "<img class='pixelPic' src='assets/images/rSanta.png'>"}],

		// List characters on top of screen

		charList: function() {
			for (var i = 0; i < game.characters.length; i++) {

				var c = $('<button>');
				c.addClass("char-button " + game.characters[i].name);
				c.attr('data-char', game.characters[i]);
				console.log(game.characters[i]);
				c.attr('data-img', game.characters[i].image);
				c.html(game.characters[i].image);

				$(".charSel").append(c);
			} //ends for loop
		} // ends charSelect function



	}; //ends game object
	

	// List characters on top of screen
	
	game.charList();

	// Move character selected to arena

	$(".char-button").on("click", function() {
		var pick = $('<div class="char">').html($(this).data('img'));
		$(".team").append(pick);
		$(this).hide();

		var buttonAtt = $('<button class="attack">').text("Attack");
		$(".but").append(buttonAtt);

		var buttonAbil = $('<button class="ability">').text("Ability");
		$(".but").append(buttonAbil);

		// var healthbar = $('<div class="progress-bar-success bar" role="progresbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">health</div>');
		// $(".healthbar").append(healthbar);
		
		console.log($(this).data('char'));
		var healthbar = $('<div class="health"><p>' + game.characters[$(this).data('char')].currentHealth + '/' + game.characters[$(this).data('char')].totalHealth + '</p></div>');
	});

	// Computer random selection for defender

	// Player clicks a button to perform a task This happens until a group of characters is knocked out

	// Computer randomly chooses attack or ability

	// If you beat other characters, you win

	// If the computer beats you, you lose

}); //ends ready function