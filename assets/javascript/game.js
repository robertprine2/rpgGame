//waits for js to start until after html has loaded

$(document).ready(function(){

	// ******Global variables for abilities?

	// object of characters that can be chosen 

	var game = {

		clicks: 0,

		target: "",

		characters : 
			[{
			name: "Jack",
			totalHealth: 200,
			currentHealth: 200,
			attack: 8,
			counterAttack: 25,
			//mana and return mana on attack clicks?
			//defense
			//weakness
			//ability
			image: "<img class='pixelPic' src='assets/images/jackR.png'>",
			imageComp: "<img class='pixelPic' src='assets/images/jackL.png'>"},

			{
			name: "Spike",
			totalHealth: 400,
			currentHealth: 400,
			attack: 2,
			counterAttack: 30,
			// ability taunt,
			image: "<img class='pixelPic' src='assets/images/spikeR.jpg'>",
			imageComp: "<img class='pixelPic' src='assets/images/spikeL.jpg'>"},

			{
			name: "Respite", 
			totalHealth: 200,
			currentHealth: 200,
			attack: 4,
			counterAttack: 20,
			// ability heal,
			image: "<img class='pixelPic' src='assets/images/respiteR.jpg'>",
			imageComp: "<img class='pixelPic' src='assets/images/respiteL.jpg'>"},

			{
			name: "Radioactive Santa",
			totalHealth: 250,
			currentHealth: 250,
			attack: 4,
			counterAttack: 25,
			image: "<img class='pixelPic' src='assets/images/rSantaR.png'>",
			imageComp: "<img class='pixelPic' src='assets/images/rSantaL.png'>"}],


		// Copy of characters for computer to pick and splice from

		randCharacters : 
			[{
			name: "Jack",
			totalHealth: 200,
			currentHealth: 200,
			attack: 8,
			counterAttack: 25,
			//mana and return mana on attack clicks?
			//defense
			//weakness
			//ability
			image: "<img class='pixelPic' src='assets/images/jackR.png'>",
			imageComp: "<img class='pixelPic' src='assets/images/jackL.png'>"},

			{
			name: "Spike",
			totalHealth: 400,
			currentHealth: 400,
			attack: 2,
			counterAttack: 30,
			// ability taunt,
			image: "<img class='pixelPic' src='assets/images/spikeR.jpg'>",
			imageComp: "<img class='pixelPic' src='assets/images/spikeL.jpg'>"},

			{
			name: "Respite", 
			totalHealth: 200,
			currentHealth: 200,
			attack: 4,
			counterAttack: 20,
			// ability heal,
			image: "<img class='pixelPic' src='assets/images/respiteR.jpg'>",
			imageComp: "<img class='pixelPic' src='assets/images/respiteL.jpg'>"},

			{
			name: "Radioactive Santa",
			totalHealth: 250,
			currentHealth: 250,
			attack: 4,
			counterAttack: 25,
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
				//****INSANELY AWESOME!!!!!
				c.attr('data-index', i); 
				c.html(game.characters[i].image);

				$(".charSel").append(c);
			} //ends for loop
		} // ends charList function

		

	}; //ends game object


	// List characters on top of screen
	
	game.charList();

	// Move character selected to arena

	$(".char-button").on("click", function() {
		
		// Increase the number of clicks so that you can count how many character a player has left to choose

		game.clicks = game.clicks + 1;

		//sets variable character to the object of a character so that you can pull information out of the object

		var character = game.characters[$(this).data('index')];

		// Moves the character you picked to the arena and then hides the button

		if (game.clicks == 1) {

			// Create character name

			$(".name").append('<p>' + character.name + '</p>');

			// Creates the healthbars above the characters
			
			var healthbar = $('<div class="progress healthBG"><div class="progress-bar progress-bar-success bar health" role="progresbar">' + character.currentHealth + '/' + character.totalHealth + '</div></div>');
			$(".healthbar").append(healthbar);

			// Move image of character to arena
		
			var pick = $('<button class="char">').html(character.image);
			pick.attr('data-name', character.name);
			
			$(".team").append(pick);
			$(this).hide();

			// Remove pick from randCharacter

			game.randCharacters.splice($(this).data('index'), 1);

			console.log(game.randCharacters);
			
			// *******change .text ability to character.ability--Creates the attack and ability buttons below the characters

			var buttonAtt = $('<button class="attack">').text("Attack");
			$(".but").append(buttonAtt);

			var buttonAbil = $('<button class="ability">').text("Ability");
			$(".but").append(buttonAbil);

			

			// Computer randomly picks their character
			var randIndex = Math.floor(Math.random() * game.randCharacters.length);

			var compPick = game.randCharacters[randIndex];

			// Create character name

			$(".compName").append('<p>' + compPick.name + '</p>');

			// Computer puts their character in arena

			var compChar = $('<button class="char">').html(compPick.imageComp);
			compChar.attr('data-name', compPick.name);
			
			$(".opponent").append(compChar);
			
			// ******How do you hide the character button based on the computers pick?

			$("." + compPick.name).hide();

			// Remove pick from randCharacter

			game.randCharacters.splice(randIndex, 1);

			console.log(game.randCharacters);

			// Loads Computer character's healthbars

			var healthbarComp = $('<div class="progress healthBG"><div class="progress-bar progress-bar-success health bar" role="progresbar">' + compPick.currentHealth + '/' + compPick.totalHealth + '</div></div>');
			$(".healthbarComp").append(healthbarComp);

		} //end of if statement for which part of the arena to put characters in

		else if (game.clicks == 2) {
			// Create character name

			$(".name2").append('<p>' + character.name + '</p>');

			// Creates the healthbars above the characters
			
			var healthbar = $('<div class="progress healthBG"><div class="progress-bar progress-bar-success bar health" role="progresbar">' + character.currentHealth + '/' + character.totalHealth + '</div></div>');
			$(".healthbar2").append(healthbar);

			// Move image of character to arena

			var pick = $('<button class="char">').html(character.image);
			$(".team2").append(pick);
			$(this).hide();
			
			// Creates the attack and ability buttons below the characters

			var buttonAtt = $('<button class="attack">').text("Attack");
			$(".but2").append(buttonAtt);

			var buttonAbil = $('<button class="ability">').text("Ability");
			$(".but2").append(buttonAbil);

			// Computer randomly picks their character

			var compPick = game.characters[Math.floor(Math.random() * game.characters.length)];

			// Loads computer character's name

			$(".compName2").append('<p>' + compPick.name + '</p>');

			// Loads Computer character's healthbars

			var healthbarComp = $('<div class="progress healthBG"><div class="progress-bar progress-bar-success health bar" role="progresbar">' + compPick.currentHealth + '/' + compPick.totalHealth + '</div></div>');
			$(".healthbarComp2").append(healthbarComp);

			// Computer puts their character in arena

			var compChar2 = $('<button class="char">').html(compPick.imageComp);

			
			$(".opponent2").append(compChar2);
			

			// ******How do you hide the character button based on the computers pick?

			
		} // End else if statement for picking the second character in arena

		//Targets a character for attacking or using abilities

		$(".char").on("click", function() {
			$(".target").removeClass("target");
			$(this).addClass("target");

			// console.log(character.name);
			// console.log($(this).data('name'));
			var that = this;
			
			var filterArray = game.characters.filter(function (ch) {
				return ch.name == $(that).data('name');
			});
			console.log(filterArray);
			game.target = filterArray[0];

			console.log(game.target);
		});

		// ******Attacks the TARGET

		$(".attack").on("click", function() {
			
			game.target.currentHealth = game.target.currentHealth - character.attack;
			character.attack = character.attack + 6;
			console.log(game.target.currentHealth);

			var healthbarComp = $('<div class="progress healthBG"><div class="progress-bar progress-bar-success compHealth bar" role="progresbar">' + compPick.currentHealth + '/' + compPick.totalHealth + '</div></div>');
			$(".healthbarComp").html(healthbarComp);

			$(".compHealth").css("width", (compPick.currentHealth / compPick.totalHealth *100) + "%");

			if (compPick.currentHealth <= 0) {
				$(".opponent").empty();
				$(".but").empty();

				$(".opponent").fadeIn("slow", function() {
					$(".opponent").text("You Win!");
				});
			}

			else {
				character.currentHealth = character.currentHealth - game.target.counterAttack;

				var healthbar = $('<div class="progress healthBG"><div class="progress-bar progress-bar-success bar health" role="progresbar">' + character.currentHealth + '/' + character.totalHealth + '</div></div>');
				$(".healthbar").html(healthbar);
				$(".health").css("width", (character.currentHealth / character.totalHealth * 100) + "%");

				if (character.currentHealth <= 0) {
					$(".team").empty();
					$(".but").empty();
					$(".team").fadeIn("slow", function() {
						$(".team").text("You Lose!");
					});
				}

			}
		});

		

	});

	// Player clicks a button to perform a task This happens until a group of characters is knocked out



	// Computer randomly chooses attack or ability

	// If you beat other characters, you win

	// If the computer beats you, you lose

}); //ends ready function