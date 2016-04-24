//waits for js to start until after html has loaded

$(document).ready(function(){

	// ******Global variables for abilities?

	// object of characters that can be chosen 

	var game = {
		characters : 
			[{
			name: "Jack",
			totalHealth: 400,
			currentHealth: 400,
			attack: 50,
			image: "<img class='pixelPic' src='assets/images/jackR.png'>",
			imageComp: "<img class='pixelPic' src='assets/images/jackL.png'>"},

			{
			name: "Radioactive Santa",
			totalHealth: 500,
			currentHealth: 500,
			attack: 40,
			image: "<img class='pixelPic' src='assets/images/rSantaR.png'>",
			imageComp: "<img class='pixelPic' src='assets/images/rSantaL.png'>"}],

		// List characters on top of screen

		charList: function() {
			for (var i = 0; i < game.characters.length; i++) {

				var c = $('<button>');
				c.addClass("char-button " + game.characters[i].name);
				// c.attr('data-name', game.characters[i].name);
				// c.attr('data-totalHealth', game.characters[i].totalHealth);
				// c.attr('data-currentHealth', game.characters[i].currentHealth);
				// c.attr('data-attack', game.characters[i].attack);
				// c.attr('data-img', game.characters[i].image);
				//****INSANELY AWESOME!!!!!
				c.attr('data-index', i); 
				c.html(game.characters[i].image);

				$(".charSel").append(c);
			} //ends for loop
		} // ends charSelect function



	}; //ends game object
	

	// List characters on top of screen
	
	game.charList();

	// Move character selected to arena

	$(".char-button").on("click", function() {
		
		//sets variable character to the object of a character so that you can pull information out of the object

		var character = game.characters[$(this).data('index')];
		console.log(character);

		// Moves the character you picked to the arena and then hides the button

		var pick = $('<div class="char">').html(character.image);
		$(".team").append(pick);
		$(this).hide();

		// Creates the attack and ability buttons below the characters

		var buttonAtt = $('<button class="attack">').text("Attack");
		$(".but").append(buttonAtt);

		var buttonAbil = $('<button class="ability">').text("Ability");
		$(".but").append(buttonAbil);
		
		// Creates the healthbars above the characters
		
		var healthbar = $('<div class="progress healthBG"><div class="progress-bar progress-bar-success bar health" role="progresbar">' + character.currentHealth + '/' + character.totalHealth + '</div></div>');
		$(".healthbar").append(healthbar);

		// Computer randomly picks their character

		var compPick = game.characters[Math.floor(Math.random() * game.characters.length)];

		console.log(compPick)

		var compChar = $('<div class="char">').html(compPick.imageComp);

		
		$(".opponent").append(compChar);
		

		// ******How do you hide the character button based on the computers pick?

		var healthbarComp = $('<div class="progress healthBG"><div class="progress-bar progress-bar-success bar health" role="progresbar">' + compPick.currentHealth + '/' + compPick.totalHealth + '</div></div>');
		$(".healthbarComp").append(healthbarComp);

	});

	// Computer random selection for defender

	// Player clicks a button to perform a task This happens until a group of characters is knocked out

	// Computer randomly chooses attack or ability

	// If you beat other characters, you win

	// If the computer beats you, you lose

}); //ends ready function