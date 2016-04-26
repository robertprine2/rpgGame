//waits for js to start until after html has loaded

$(document).ready(function(){

	// ******Global variables for abilities?

	// object of characters that can be chosen 

	var game = {

		// Variable to move characters to the right arena location on the screen

		clicks: 0,

		// Variable to allow targeting for the player

		target: "",

		//Array that contains objects of the characters with all their information

		characters : 
			[
			Jack = {
			name: "Jack",
			totalHealth: 200,
			currentHealth: 200,
			attack: 8,
			counterAttack: 25,
			mana: 10,
			defense: 10,
			ability: "Quick Strike",
			image: "<img class='pixelPic' src='assets/images/jackR.png'>",
			imageComp: "<img class='pixelPic' src='assets/images/jackL.png'>"},

			Spike = {
			name: "Spike",
			totalHealth: 300,
			currentHealth: 300,
			attack: 2,
			counterAttack: 40,
			mana: 10,
			defense: 30,
			ability: "Intimidate",
			image: "<img class='pixelPic' src='assets/images/spikeR.jpg'>",
			imageComp: "<img class='pixelPic' src='assets/images/spikeL.jpg'>"},

			Respite = {
			name: "Respite", 
			totalHealth: 200,
			currentHealth: 200,
			attack: 4,
			counterAttack: 20,
			mana: 20,
			defense: 10,
			ability: "Heal",
			image: "<img class='pixelPic' src='assets/images/respiteR.jpg'>",
			imageComp: "<img class='pixelPic' src='assets/images/respiteL.jpg'>"},

			Radioactive = {
			name: "Radioactive",
			totalHealth: 250,
			currentHealth: 250,
			attack: 4,
			counterAttack: 25,
			mana: 10,
			defense: 10,
			ability: "Radiation",
			image: "<img class='pixelPic' src='assets/images/rSantaR.png'>",
			imageComp: "<img class='pixelPic' src='assets/images/rSantaL.png'>"}],


		// Copy of characters for computer to pick and splice from so there are no multiple characters

		randCharacters : 
			[
			Jack = {
			name: "Jack",
			totalHealth: 200,
			currentHealth: 200,
			attack: 8,
			counterAttack: 25,
			mana: 10,
			defense: 10,
			ability: "Quick Strike",
			image: "<img class='pixelPic' src='assets/images/jackR.png'>",
			imageComp: "<img class='pixelPic' src='assets/images/jackL.png'>"},

			Spike = {
			name: "Spike",
			totalHealth: 300,
			currentHealth: 300,
			attack: 2,
			counterAttack: 40,
			mana: 10,
			defense: 30,
			ability: "Intimidate",
			image: "<img class='pixelPic' src='assets/images/spikeR.jpg'>",
			imageComp: "<img class='pixelPic' src='assets/images/spikeL.jpg'>"},

			Respite = {
			name: "Respite", 
			totalHealth: 200,
			currentHealth: 200,
			attack: 4,
			counterAttack: 20,
			mana: 20,
			defense: 10,
			ability: "Heal",
			image: "<img class='pixelPic' src='assets/images/respiteR.jpg'>",
			imageComp: "<img class='pixelPic' src='assets/images/respiteL.jpg'>"},

			Radioactive = {
			name: "Radioactive",
			totalHealth: 250,
			currentHealth: 250,
			attack: 4,
			counterAttack: 25,
			mana: 10,
			defense: 10,
			ability: "Radiation",
			image: "<img class='pixelPic' src='assets/images/rSantaR.png'>",
			imageComp: "<img class='pixelPic' src='assets/images/rSantaL.png'>"}],


		// List characters on top of screen for player to choose from

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
				c.attr('data-name', game.characters[i].name);
				c.html(game.characters[i].image);

				$(".charSel").append(c);
			} //ends for loop
		} // ends charList function

		

	}; //ends game object


	// List characters on top of screen for player to choose from
	
	game.charList();

	// Move character selected to arena

	$(".char-button").on("click", function() {
		
		// Increase the number of clicks so that you can count how many characters a player has left to choose

		game.clicks = game.clicks + 1;

		//sets variable character to the object of a character so that you can pull information out of the object

		var character = game.characters[$(this).data('index')];

		// Moves the character you picked to the arena and then hides the button

		if (game.clicks == 1) {

			// Create character name

			$(".name").append('<p>' + character.name + '</p>');

			// Creates healthbar1 to the first column
			
			var healthbar = $('<div class="progress healthBG"><div class="progress-bar progress-bar-success bar health" role="progresbar">' + character.currentHealth + '/' + character.totalHealth + '</div></div>');
			healthbar.attr("id", "health1");
			$(".healthbar").append(healthbar);
			
			// Move image of char1 to arena (first column)
		
			var pick = $('<button class="char">').html(character.image);
			pick.attr('data-name', character.name);
			pick.attr('id', 'char1');
			$(".team").append(pick);
			$(this).hide();

			// Remove pick from randCharacter (no multiple characters)

			game.randCharacters.splice($(this).data('index'), 1);

			console.log(game.randCharacters);
			
			// *******change .text ability to character.ability--Creates the attack and ability buttons below the characters

			var buttonAtt = $('<button id="attack1">').text("Attack");
			$(".but").append(buttonAtt);

			var buttonAbil = $('<button id="ability1">').text(character.ability);
			$(".but").append(buttonAbil);

			// Computer randomly picks their character

			var randIndex = Math.floor(Math.random() * game.randCharacters.length);

			var compPick = game.randCharacters[randIndex];

			// Create character name for computer 3rd column

			$(".compName").append('<p>' + compPick.name + '</p>');

			// Computer puts their character in arena 3rd column

			var compChar = $('<button class="char" id="char3">').html(compPick.imageComp);
			compChar.attr('data-name', compPick.name);
			
			$(".opponent").append(compChar);
			
			// Hides the character button based on the computer pick

			$("." + compPick.name).hide();

			// Remove pick from randCharacter

			game.randCharacters.splice(randIndex, 1);
			console.log(randIndex);
			console.log(game.randCharacters);

			// Loads Computer character's healthbars 3rd column

			var healthbarComp = $('<div class="progress healthBG"><div class="progress-bar progress-bar-success health bar" id="health3" role="progresbar">' + compPick.currentHealth + '/' + compPick.totalHealth + '</div></div>');
			$(".healthbarComp").append(healthbarComp);

		} //end of if statement for 1 click

		else if (game.clicks == 2) {
			// Create 2nd player character name 2nd column

			$(".name2").append('<p>' + character.name + '</p>');

			// Creates the 2nd characters healthbar above the characters 2nd column
			
			var healthbar = $('<div class="progress healthBG"><div class="progress-bar progress-bar-success bar health" id="health2" role="progresbar">' + character.currentHealth + '/' + character.totalHealth + '</div></div>');
			$(".healthbar2").append(healthbar);

			// Move image of character to arena 2nd column

			var pick = $('<button class="char" id="char2">').html(character.image);
			pick.attr('data-name', character.name);
			$(".team2").append(pick);
			$(this).hide();

			// Remove pick from randCharacter
			
			var that = this;
			
			var filterArraySplice = game.randCharacters.filter(function (ch) {
				return ch.name == $(that).data('name');
			});
			console.log(filterArraySplice);
			var splice = filterArraySplice[0];

			var indexOf = game.randCharacters.indexOf(splice);
			
			console.log(indexOf);
			
			game.randCharacters.splice(indexOf, 1);

			console.log(game.randCharacters);
			
			
			// Creates the attack and ability buttons below the characters 2nd column

			var buttonAtt = $('<button id="attack2">').text("Attack");
			$(".but2").append(buttonAtt);

			var buttonAbil = $('<button id="ability2">').text(character.ability);
			$(".but2").append(buttonAbil);

			// Computer randomly picks their character

			var randIndex = Math.floor(Math.random() * game.randCharacters.length);

			var compPick = game.randCharacters[randIndex];

			// Loads computer character's name

			$(".compName2").append('<p>' + compPick.name + '</p>');

			// Loads Computer character's healthbars

			var healthbarComp = $('<div class="progress healthBG"><div class="progress-bar progress-bar-success health bar" id="health4" role="progresbar">' + compPick.currentHealth + '/' + compPick.totalHealth + '</div></div>');
			$(".healthbarComp2").append(healthbarComp);

			// Computer puts their character in arena

			var compChar2 = $('<button class="char" id="char4">').html(compPick.imageComp);

			
			$(".opponent2").append(compChar2);
			

			// Hides the button based on computer pick

			$("." + compPick.name).hide();

			// Remove pick from randCharacter

			// game.randCharacters.splice(randIndex, 1);
			
			console.log(game.randCharacters);

			
		} // End else if statement for picking the second character in arena

		//Targets a character for attacking or using abilities

		$(".char").on("click", function() {
			$(".target").removeClass("target");
			$(this).addClass("target");

			// console.log(character.name);
			// console.log($(this).data('name')
			var that = this;
			
			var filterArray = game.characters.filter(function (ch) {
				return ch.name == $(that).data('name');
			});
			console.log(filterArray);
			game.target = filterArray[0];

			console.log(game.target);
		});

		// ******Char1 Attacks the TARGET

		//assigns the character's object in the char1 id

		var filterArray1 = game.characters.filter(function (ch) {
			return ch.name == $("#char1").data("name");
		});
		console.log(filterArray1);
		var char1 = filterArray1[0];

		$("#attack1").on("click", function() {
			
			game.target.currentHealth = game.target.currentHealth - char1.attack;
			char1.attack = char1.attack + 6;  //I have to make this go back to the actual array maybe?
			console.log(game.target.currentHealth);

			// How do I update the healthbar now?

			var healthbarComp = $('<div class="progress healthBG"><div class="progress-bar progress-bar-success compHealth bar" role="progresbar">' + game.target.currentHealth + '/' + game.target.totalHealth + '</div></div>');
			$(".healthbarComp").html(healthbarComp);

			$(".compHealth").css("width", (game.target.currentHealth / game.target.totalHealth *100) + "%");

			if (game.target.currentHealth <= 0) {
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