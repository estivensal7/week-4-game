$(document).ready(function() {

let crystals = ['assets/images/crystal1.jpg', 'assets/images/crystal2.png',
 'assets/images/crystal3.jpg', 'assets/images/crystal4.jpg']; 



let counter = 0;
let wins = 0;
let losses = 0;


newCrystals();
newGame();

// let numberOptions = [10, 5, 3, 7];



function newCrystals() {
	let numbers = [];

		while(numbers.length < 4) {
			let randomNumber = Math.ceil(Math.random()*12);
			const found = false;
			for( let i = 0; i < numbers.length; i++) {
				if (numbers === randomNumber) {
					found = true; break
				}
			}

			if(!found)numbers[numbers.length]=randomNumber;
		}
		console.log(numbers);

		for(let i = 0; i < numbers.length; i++) {
			let imageCrystal = $('<img>');
			imageCrystal.attr('data-num', numbers[i]);
			imageCrystal.attr('src', crystals[i]);
			imageCrystal.attr('alt', 'crystals');
			imageCrystal.addClass('crystalImage');
			$('#crystals').append(imageCrystal);
		}

}



// for(let i = 0; i < numberOptions.length; i++) {

// 	const imageCrystal = $('<img>');

// 	imageCrystal.addClass("crystal-image");

// 	imageCrystal.attr("src", "https://damp-wave-80150.herokuapp.com/assets/images/ruby.png");

// 	imageCrystal.attr("data-crystalValue", numberOptions[i]);

// 	$("#crystals").append(imageCrystal);

// 	$("#crystals").html(imageCrystal);

// }

	function newGame() {

		counter = 0;
		$('#user').text(counter);

		function randomInt(min,max) {
			return Math.floor(Math.random()*(max-min+1)+min);
		}

		let targetNumber = randomInt(19,120);
		
		$("#number-to-guess").text(targetNumber);


		$(".crystalImage").on("click", function() {

			counter = counter + parseInt($(this).data('num'));

			$('#user').text(counter);

			if (counter === targetNumber) {
				$('#status').text('You won!!');
				wins++;
				$('#wins').text("Wins: " + wins);
				console.log(wins);
				$('#crystals').empty();
				newCrystals();
				newGame();
			} else if (counter > targetNumber) {
				$('#status').text('You lose!!');
				losses++;
				$('#losses').text("Losses: " + losses);
				console.log(losses);
				$('#crystals').empty();
				newCrystals();
				newGame();
			}
		});
	}

});
