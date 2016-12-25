console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen"
var cardTwo = "queen"
var cardThree = "king"
var cardFour = "king"


function createCards(x){
	var cardNumbers  = x;
	for (var i = 0; i < cardNumbers; i++){
	var newCard = document.createElement('div');
	newCard.className = "card"
	// document.getElementById('game-board')[i].appendChild(newCard)
	document.getElementsByTagName('div')[0].appendChild(newCard)
}


}
createCards(4)