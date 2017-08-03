var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

		var wins = 0;
		var losses = 0;

		// var guessesLeft = "Guesses Left" = 0;
		// var guessesSoFar = "Your Guesses so far";


		document.onkeyup = function(event) {
			var userGuess = event.key;

			var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

			if (userGuess === computerGuess) {
				wins++;
			

			var html =
				"<p>Your Guesses so far: " + userGuess + "</p>"	+	
				"<p>Wins: " + wins + "</p>";


			document.querySelector("#game").innerHTML = html;

		}



	};