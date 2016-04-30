//waits for js to start until after html has loaded
var char1, char2, char3, char4;

$(document).ready(function(){

	// ******Global variables for abilities?

	// object of characters that can be chosen 

	var game = {

		// Variable to move characters to the right arena location on the screen

		clicks: 0,

		// Variables to hide attack button so chars take turns

		attackClickChar1: 0,

		attackClickChar2: 0,

		// Variable for computer turn

		compTurn: 0,

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
				c.addClass("char");
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
		
			var pick = this;
			$(pick).addClass("char1")
			$(pick).appendTo("#char1");

			// var pick = $('<button class="char">').html(character.image);
			// pick.attr('data-name', character.name);
			// pick.attr('id', 'char1');
			// $(".team").append(pick);
			// $(this).hide();

			// Adds selected class so that computer doesn't randomly pick the same characters as the player

			$(pick).addClass("selected");
			
			// Creates the ability text below the characters

			$("#ability1").append(character.ability);

			// Computer randomly picks their character

			var compPickArray = $('.char-button:not(.selected)');

			var randIndex = Math.floor(Math.random() * compPickArray.length);

			var compPick = compPickArray[randIndex];

			// Create character name for computer 3rd column
			$(compPick).addClass("char3");
			$(".compName").append('<p>' + compPick.name + '</p>');

			// Computer puts their character in arena 3rd column

			$(compPick).appendTo('#char3');

			// var compChar = $('<button class="char" id="char3">').html(compPick.imageComp);
			// compChar.attr('data-name', compPick.name);
			
			// $(".opponent").append(compChar);
			
			// // Hides the character button based on the computer pick

			// $("." + compPick.name).hide();

			// Adds selected class so that computer doesn't randomly pick the same characters as the player

			$(compPick).addClass("selected");

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

			var pick = this;
			$(pick).addClass("char2");
			$(pick).appendTo("#char2");

			// var pick = $('<button class="char" id="char2">').html(character.image);
			// pick.attr('data-name', character.name);
			// $(".team2").append(pick);
			// $(this).hide();

			// Adds selected class so that computer doesn't randomly pick the same characters as the player

			$(pick).addClass("selected");
			
			// Remove pick from randCharacter

			// var that = this;
			
			// var filterArraySplice = game.randCharacters.filter(function (ch) {
			// 	return ch.name == $(that).data('name');
			// });
			// var splice = filterArraySplice[0];

			// var indexOf = game.randCharacters.indexOf(splice);
			
			// game.randCharacters.splice(indexOf, 1);			
			
			// Creates the ability button text below the characters 2nd column

			$("#ability2").append(character.ability);

			// Computer randomly picks their character

			// Computer randomly picks their character

			var compPickArray = $('.char-button:not(.selected)');

			var randIndex = Math.floor(Math.random() * compPickArray.length);

			var compPick = compPickArray[randIndex];

			// Loads computer character's name 4th column

			$(".compName2").append('<p>' + compPick.name + '</p>');

			// Loads Computer character's healthbars 4th column

			var healthbarComp = $('<div class="progress healthBG"><div class="progress-bar progress-bar-success health bar" id="health4" role="progresbar">' + compPick.currentHealth + '/' + compPick.totalHealth + '</div></div>');
			$(".healthbarComp2").append(healthbarComp);

			// Computer puts their character in arena 4th column

			$(compPick).addClass("char4");
			$(compPick).appendTo('#char4');

			// Remove pick from randCharacter

			// game.randCharacters.splice(randIndex, 1);

		} // End else if statement for picking the second character in arena click 2

	}); //ends picking characters on click function

		//Targets a character for attacking or using abilities

		$(".char").on("click", function() {

			char1 = game.characters[$(".char1").data("index")];
	
		// var filterArray1 = game.characters.filter(function (ch) {
		// 	return ch.name == $("#char1").data("name");
		// });
		// var char1 = filterArray1[0];

		//assigns the character's object in the char2 id

		char2 = game.characters[$(".char2").data("index")];

		// var filterArray2 = game.characters.filter(function (ch) {
		// 	return ch.name == $("#char2").data("name");
		// });
		// var char2 = filterArray2[0];

		//assigns the character's object in the char3 id

		char3 = game.characters[$(".char3").data("index")];

		// var filterArray3 = game.characters.filter(function (ch) {
		// 	return ch.name == $("#char3").data("name");
		// });
		// var char3 = filterArray3[0];

		//assigns the character's object in the char4 id

		char4 = game.characters[$(".char4").data("index")];

		// var filterArray4 = game.characters.filter(function (ch) {
		// 	return ch.name == $("#char4").data("name");
		// });

		// var char4 = filterArray4[0];

			// if statement to not target on second click

			if (game.clicks >= 3) {


			$(".target").removeClass("target");
			$(this).addClass("target");

			var that = this;
			
			var filterArray = game.characters.filter(function (ch) {
				return ch.name == $(that).data('name');
			});
		
			game.target = filterArray[0];

			} // end if statement to not target on second click

		}); // End of target on click function

		// Char1 Attacks the TARGET

		//assigns the character's object in the char1 id



		// Attack button1 click function
console.log(game.attackClickChar1);
		$("#attack1").on("click", function() {

			//if statement to take turns for each character
			
			// if (game.attackClickChar1 === 0) {

			// 	//changes attackclick variables to make players take turns

			// 	game.attackClickChar1++;
			// 	console.log(game.attackClickChar1);
			// 	game.attackClickChar2 = 0;
			// 	console.log(game.attackClickChar2);

				// Increase mana by 5 on attacks

				char1.mana = char1.mana + 5;
				$("#mana1").html("<p>Mana: " + char1.mana + "</p>");

				// variable that makes it so defense higher than attacks don't heal a player
				
				var max = Math.max(0, (char1.attack - game.target.defense));
console.log(char1.attack);
console.log(game.target.defense);
console.log(max);

				//Takes damage off of target's current health

				game.target.currentHealth = game.target.currentHealth - (max);
console.log(max);
				// Write in charSel using .html (first time for this run through) what happened damage wise

				$(".charSel").html('<p>' + char1.name + ' attacked for ' + max + ' through ' + game.target.name + "'s defense!</p><br>");
console.log(max);
				char1.attack = char1.attack + 6;  
				console.log(game.target.currentHealth);

				// Update the health numbers to match the new health

				var healthbarTarget = $('<div class="progress healthBG"><div class="progress-bar progress-bar-success compHealth bar" role="progresbar">' + game.target.currentHealth + '/' + game.target.totalHealth + '</div></div>');

				if ($(".char1").hasClass("target")) {
					$(".healthbar").html(healthbarTarget);
				}

				else if ($(".char2").hasClass("target")) {
					$(".healthbar2").html(healthbarTarget);
				}

				else if ($(".char3").hasClass("target")) {
					$(".healthbarComp").html(healthbarTarget);
				}

				else if ($(".char4").hasClass("target")) {
					$(".healthbarComp2").html(healthbarTarget);
				}

				// Update progress bar to match % health left

				$(".compHealth").css("width", (game.target.currentHealth / game.target.totalHealth *100) + "%");

				// if statement for both opponents KedO: You win!

				if (char3.currentHealth <= 0 && char4.currentHealth <= 0) {
					$(".charSel").html("<p>You won!</p>")

					// hide buttons when you win

					$(".but").empty();
					$(".but2").empty();



				} //end if both opponents KO

				// if statement for one opponent being knocked out

				if (game.target.currentHealth <= 0) {
					
					if ($(".char1").hasClass("target")) {
						$(".char1").empty();
						$(".char1").fadeIn("slow", function() {
							$(".char1").text("KO!");
						});
					}

					else if ($(".char2").hasClass("target")) {
						$(".char2").empty();
						$(".char2").fadeIn("slow", function() {
							$(".char2").text("KO!");
						});
					}

					else if ($(".char3").hasClass("target")) {
						$(".char3").empty();
						$(".char3").fadeIn("slow", function() {
							$(".char3").text("KO!");
						});
					}

					else if ($(".char4").hasClass("target")) {
						$(".char4").empty();
						$(".char4").fadeIn("slow", function() {
							$(".char4").text("KO!");
						});
					}
					
					
				} //end if opponent KO

				else {

					// variable that makes it so defense higher than attacks don't heal a player

					var max = Math.max(0, (game.target.counterAttack - char1.defense));

					char1.currentHealth = char1.currentHealth - max;

					$(".charSel").append('<p>' + game.target.name + ' counterattacked for ' + max + ' through ' + char1.name + "'s defense!</p><br>");

					// Update the health numbers to match the new health

					var healthbarChar1 = $('<div class="progress healthBG"><div class="progress-bar progress-bar-success bar health" role="progresbar">' + char1.currentHealth + '/' + char1.totalHealth + '</div></div>');
					healthbarChar1.attr("id", "health1");
					$(".healthbar").html(healthbarChar1);

					// var healthbarChar1 = $('<div class="progress healthBG"><div class="progress-bar progress-bar-success health" role="progresbar">' + char1.currentHealth + '/' + char1.totalHealth + '</div></div>');

					// $(".healthbar").html(healthbarChar1);

					// Update progress bar to match % health left

					$(".healthbar").css("width", (char1.currentHealth / char1.totalHealth *100) + "%");

					// if a character gets knocked out

					if (char1.currentHealth <= 0) {
						$(".char1").empty();
						$(".but").empty();
						$(".char1").fadeIn("slow", function() {
							$(".char1").text("Oh no! This character is knocked out!");
						});

					} //end if a player character dies

					// if statement both characters are dead you lose

					if (char1.currentHealth <= 0 && char2.currentHealth <= 0) {
						$(".charSel").html("<p>You lost!</p>")
					}

				} //end of else statement for counterattack

				// Decide which computer's turn it is

				if (game.compTurn <= 0) {

					game.compTurn++

					// Computer chooses the lowest health player character

					if (char1.currentHealth >= char2.currentHealth) {

						// Computer chooses to use an ability or attack

						if (char3.mana >= 10) {

							// USE ABILITY

							if (char3.ability == "Quick Strike") {
								
								// Decrease mana by 10 when using an ability

								char3.mana = char3.mana - 10;
								$("#mana3").html("<p>Mana: " + char3.mana + "</p>");

								// variable that makes it so defense higher than attacks don't heal a player
						
								var max = Math.max(0, (char3.attack * 3 - char2.defense * 3));

								//Takes damage off of target's current health

								char2.currentHealth = char2.currentHealth - (max);

								// States what target is doing in the charSel section

								$(".charSel").append('<p>' + char3.name + ' dealt ' + max + ' damage through ' + char2.name + "'s defense with Quick Strike!</p><br>");

								char3.attack = char3.attack + 18;  

								// Update the health numbers to match the new health

								var healthbarChar2 = $('<div class="progress healthBG"><div class="progress-bar progress-bar-success compHealth bar" role="progresbar">' + char2.currentHealth + '/' + char2.totalHealth + '</div></div>');

								$(".healthbar2").html(healthbarChar2);
								
								// Update progress bar to match % health left

								$(".compHealth").css("width", (char2.currentHealth / char2.totalHealth *100) + "%");

								// if statement for both players KedO: You lose!

								if (char1.currentHealth <= 0 && char2.currentHealth <= 0) {
									$(".charSel").html("<p>You lost!</p>")

									// hide buttons when you lose

									$(".but").empty();
									$(".but2").empty();

								} //end if both opponents KO

								// if statement for one player being knocked out

								if (char2.currentHealth <= 0) {
									$(".char2").empty();
									$(".char2").fadIn("slow", function() {
										$("char2").text("Oh no! This character is knocked out!");
									});
								} // End of if statement char2 ko

							} // End if Quick Strike

							if (char3.ability == "Intimidate") {
								
								// Decrease mana by 10 when using an ability

								char3.mana = char3.mana - 10;
								$("#mana3").html("<p>Mana: " + char3.mana + "</p>");

								char2.attack = 0;

								// States what the character is doing in the charSel section

								$(".charSel").append('<p>' + char3.name + ' intimidated ' + char2.name + "!</p><br>");

							} // End of ability intimidate

							if (char3.ability == "Heal") {

								// Decrease mana by 10 when using an ability

								char3.mana = char3.mana - 10;
								$("#mana3").html("<p>Mana: " + char3.mana + "</p>");

								if ((char3.currentHealth/char3.totalHealth) <= (char4.currentHealth/char4.totalHealth)) {

									var min = Math.min(char3.totalHealth, (char3.currentHealth + 100));

									var healAmount = min - char3.currentHealth;

									char3.currentHealth = min;

									// States what the character is doing in the charSel section

									$(".charSel").append('<p>' + char3.name + ' healed herself for ' + healAmount + '!</p><br>');

									// Update the health numbers to match the new health

									var healthbarChar3 = $('<div class="progress healthBG"><div class="progress-bar progress-bar-success compHealth bar" role="progresbar">' + char3.currentHealth + '/' + char3.totalHealth + '</div></div>');

									$(".healthbarComp").html(healthbarChar3);
									
									// Update progress bar to match % health left

									$(".healthbarComp").css("width", (char3.currentHealth / char3.totalHealth *100) + "%");

								} //End of if statement to heal char3

								else {

									var min = Math.min(char4.totalHealth, (char4.currentHealth + 100));

									var healAmount = min - char3.currentHealth;

									char4.currentHealth = min;

									// States what the character is doing in the charSel section

									$(".charSel").append('<p>' + char3.name + ' healed ' + char4.name + ' for ' + healAmount + '!</p><br>');

									// Update the health numbers to match the new health

									var healthbarChar4 = $('<div class="progress healthBG"><div class="progress-bar progress-bar-success compHealth bar" role="progresbar">' + char4.currentHealth + '/' + char4.totalHealth + '</div></div>');

									$(".healthbarComp2").html(healthbarChar4);
									
									// Update progress bar to match % health left

									$(".healthbarComp2").css("width", (char4.currentHealth / char4.totalHealth *100) + "%");

								} // End of Else heal char4
							} // End of ability heal

							if (char3.ability == "Radiation") {

								// Decrease mana by 10 when using an ability

								char3.mana = char3.mana - 10;
								$("#mana3").html("<p>Mana: " + char3.mana + "</p>");

								// States what the character is doing in the charSel section

								$(".charSel").append('<p>' + char3.name + ' dealt 50 damage with radiation to ' + char1.name + ' and ' + char2.name + '!</p><br>');

								char1.currentHealth = char1.currentHealth - 50;

								// Update the health numbers to match the new health

								var healthbarChar1 = $('<div class="progress healthBG"><div class="progress-bar progress-bar-success compHealth bar" role="progresbar">' + char1.currentHealth + '/' + char1.totalHealth + '</div></div>');

								$(".healthbar1").html(healthbarChar1);
								
								// Update progress bar to match % health left

								$(".healthbar1").css("width", (char1.currentHealth / char1.totalHealth *100) + "%");

								// if statement for both players KedO: You lose!

								if (char1.currentHealth <= 0 && char2.currentHealth <= 0) {
									$(".charSel").html("<p>You lost!</p>")

									// hide buttons when you lose

									$(".but").empty();
									$(".but2").empty();

								} //end if both opponents KO

								// if statement for one player being knocked out

								if (char1.currentHealth <= 0) {
									$(".char1").empty();
									$(".char1").fadIn("slow", function() {
										$("char1").text("Oh no! This character is knocked out!");
									});
								}

								char2.currentHealth = char2.currentHealth - 50;

								// Update the health numbers to match the new health

								var healthbarChar2 = $('<div class="progress healthBG"><div class="progress-bar progress-bar-success compHealth bar" role="progresbar">' + char2.currentHealth + '/' + char2.totalHealth + '</div></div>');

								$(".healthbar2").html(healthbarChar2);
								
								// Update progress bar to match % health left

								$(".compHealth").css("width", (char2.currentHealth / char2.totalHealth *100) + "%");

								// if statement for both players KedO: You lose!

								if (char1.currentHealth <= 0 && char2.currentHealth <= 0) {

									$(".charSel").html("<p>You lost!</p>")

									// hide buttons when you lose

									$(".but").empty();
									$(".but2").empty();

								} //end if both opponents KO

								// if statement for one player being knocked out

								if (char2.currentHealth <= 0) {
									$(".char2").empty();
									$(".char2").fadIn("slow", function() {
										$("char2").text("Oh no! This character is knocked out!");
									});
								}

							} // End of ability radiation

						} //end if statement about using ability

						else {

							// Computer uses attack

							// Increase mana by 5 on attacks

							char3.mana = char3.mana + 5;
							$("#mana3").html("<p>Mana: " + char3.mana + "</p>");

							// variable that makes it so defense higher than attacks don't heal a player
						
							var max = Math.max(0, (char3.attack - char2.defense));

							// States what the character is doing in the charSel section

							$(".charSel").append('<p>' + char3.name + ' attacked for ' + max + ' through ' + char2.name + "'s defense!</p><br>");

							//Takes damage off of target's current health

							char2.currentHealth = char2.currentHealth - (max);
							char3.attack = char3.attack + 6;  

							// Update the health numbers to match the new health

							var healthbarChar2 = $('<div class="progress healthBG"><div class="progress-bar progress-bar-success compHealth bar" role="progresbar">' + char2.currentHealth + '/' + char2.totalHealth + '</div></div>');

							$(".healthbar2").html(healthbarChar2);
							
							// Update progress bar to match % health left

							$(".compHealth").css("width", (char2.currentHealth / char2.totalHealth *100) + "%");

							// if statement for both players KedO: You win!

							if (char1.currentHealth <= 0 && char2.currentHealth <= 0) {
								$(".charSel").html("<p>You lost!</p>")

								// hide buttons when you win

								$(".but").empty();
								$(".but2").empty();



							} //end if both opponents KO

							// if statement for one player being knocked out

							if (char2.currentHealth <= 0) {
								$(".char2").empty();
								$(".char2").fadIn("slow", function() {
									$("char2").text("Oh no! This character is knocked out!");
								});
							}
							
							
							else {

								// variable that makes it so defense higher than attacks don't heal a player

								var max = Math.max(0, (char2.counterAttack - char3.defense));

								char3.currentHealth = char3.currentHealth - max;

								// States what the character is doing in the charSel section

								$(".charSel").append('<p>' + char2.name + ' counterattacked for ' + max + ' through ' + char3.name + "'s defense!</p><br>");

								// Update the health numbers to match the new health

								var healthbarChar3 = $('<div class="progress healthBG"><div class="progress-bar progress-bar-success compHealth bar" role="progresbar">' + char3.currentHealth + '/' + char3.totalHealth + '</div></div>');

								$(".healthbarComp").html(healthbarChar3);

								// Update progress bar to match % health left

								$(".healthbarComp").css("width", (char3.currentHealth / char3.totalHealth *100) + "%");

								// if a character gets knocked out

								if (char3.currentHealth <= 0) {
									$(".char3").empty();
									$(".char3").fadeIn("slow", function() {
										$(".char3").text("KO!");
									});

								} //end if a computer character dies

								// *****if statement both computers are dead you win

								if (char3.currentHealth <= 0 && char4.currentHealth <= 0) {
									$(".charSel").html("<p>You won!</p>")
								}

							} //end else statement about counterattacking

						} //end else statement about using attack

					} // End if statement on comp choosing lowest health target

				} //End if statement about which comp character's turn it is

				else {

					game.compTurn = 0;

					//********copy all the if compturn junk in here and modify for char4

				} //End else statement about which comp character's turn it is

			//} // End of if statement for which player character's turn

//*************************************************WTF ELSE STATEMENT! if the attackClickChar1 isn't 0 this is supposed to run...but it just always runs If I decide to work on this later the other lines of code that are commented are 902 and 426-422 and 906-910 (These are the lines right below this comment. I might have to math out to get the other lines after I change the code around)

			// else {

			// 	$(".charSel").append("<p>Don't forget to use your other character as well. It's their turn.</p>");

			// } //end if that should be an else take both chars turns

		}); // End of attack1 click

		// Attack Button2 click

		// Ability Button1 click

		// Ability Button2 click

	// ******Reset Button


}); //ends ready function