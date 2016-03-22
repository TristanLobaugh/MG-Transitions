$(document).ready(function(){
	var moves = 0;
	var wins = 0;
	var games = 0;
	var cards = [
		"<img src='img/monsters-01.png'>",
		"<img src='img/monsters-02.png'>",
		"<img src='img/monsters-03.png'>",
		"<img src='img/monsters-04.png'>",
		"<img src='img/monsters-05.png'>",
		"<img src='img/monsters-06.png'>",
		"<img src='img/monsters-07.png'>",
		"<img src='img/monsters-08.png'>",
		"<img src='img/monsters-09.png'>",
		"<img src='img/monsters-11.png'>",
		"<img src='img/monsters-13.png'>",
		"<img src='img/monsters-14.png'>",
		"<img src='img/monsters-15.png'>",
		"<img src='img/monsters-01.png'>",
		"<img src='img/monsters-02.png'>",
		"<img src='img/monsters-03.png'>",
	];
	var gridSize;
	var gameTiles;
	var gridArray;
	var rowSize;

	$("input").click(function(){
		var dif = $(this).val();
		if(dif == "easy"){
			moves = 10;
			rowSize = 5;
			gridSize = rowSize * 2;
			$("#mg-wrapper").addClass("easy");
		}else if(dif == "med"){
			moves = 20;
			rowSize = 5;
			gridSize = rowSize * 4;
			$("#mg-wrapper").addClass("med");
		}else if(dif == "hard"){
			moves = 30;
			rowSize = 6;
			gridSize = rowSize * 5;
			$("#mg-wrapper").addClass("hard");
		}
		$("#button-bucket").toggle();
		$("#move-counter").html(moves);
		gameTiles = cards.slice(0,(gridSize/2));
		gridArray = $.merge(gameTiles, gameTiles);

		//shuffle here
		var numberOFTimesToShuffle = 300;
		for(var k = 1; k < numberOFTimesToShuffle; k++){
			card1 = Math.floor(Math.random()*gridArray.length);
			card2 = Math.floor(Math.random()*gridArray.length);
			if(card1 != card2){
				temp = gridArray[card1];
				gridArray[card1] = gridArray[card2];
				gridArray[card2] = temp;
			}
		}

		for(var i = 0; i < gridArray.length; i++){
			var html = '<div class="mg-tile">';
					html += '<div class="mg-tile-inner unmatched flipped">';
						html += '<div class="mg-tile-outside"></div>';
						html += '<div class="mg-tile-inside">' + gridArray[i] + '</div>';
					html += '</div>';
				html += '</div>';
				$("#mg-contents").append(html);	
		}
		setTimeout(function(){
			$('.mg-tile-inner').removeClass("flipped");
		}, 3000);

		$(".mg-tile").click(function(){
			$(this).find(".mg-tile-inner").addClass("flipped");
			if($(".flipped.unmatched").length == 2){
				moves--;
				var visibleCards = $(".flipped.unmatched img")
				if(visibleCards[0].src == visibleCards[1].src){
					$(".flipped.unmatched").addClass("matched");
					$(".flipped.unmatched").removeClass("unmatched");
				}else{
					setTimeout(function(){
					$(".flipped.unmatched").removeClass("flipped")
				},500);
				}
				if($(".flipped.matched").length == gridArray.length){
					alert("all matched");
					wins++
					playAgain();
				}else if(moves == 0)	{
					endGame();
				}

			}else{
					//only one card is flipped up at this time (this else is just a placeholder)
			}
			$("#move-counter").html(moves);
			$("#wins-counter").html(wins);
		});


	});

function playAgain()	{
	//lock all buttons
	//ask player if they want to play again
	//if so reset the board and unlock the buttons.
}

function endGame()	{
	//put message here that player has run out of turns and lost
	playAgain();
}











});












