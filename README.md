# Memory Game with Transitions

### Memory Game with CSS, HTML, javascript, jQuery and uses the CSS transform and transitons for animantion.

## Summary

#### Memory game with 3 difficulty options. App makes use of jQuery and perspective to help rotate the cards on the board.

### Author: Tristan Lobaugh 
+ Github - https://github.com/TristanLobaugh
+ Homepage - http://tristanlobaugh.com

## Demo

[Live Demo](http://tristanlobaugh.com/mg-transitions)

## Screenshots

### Main page:
![alt text](https://raw.githubusercontent.com/TristanLobaugh/mg-transitions/master/img/screen_shot.png)

### All Cards:
![alt text](https://raw.githubusercontent.com/TristanLobaugh/mg-transitions/master/img/screen_shot2.png)

### Easy Mode:
![alt text](https://raw.githubusercontent.com/TristanLobaugh/mg-transitions/master/img/screen_shot3.png)


##Code Examples

### Function used to manage the classes that create the animation of flipping the cards
```
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
```

### Function used to select the level of difficulty
```
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
```

## To Do