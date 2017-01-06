console.log("JS file is connected to HTML! Woo!")

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];


function createCards(){
	
	for (var i = 0; i < cards.length; i++){
	var newCard = document.createElement('div');
	newCard.className = "card"
	document.getElementsByTagName('div')[0].appendChild(newCard)
}
}

function createBoard(){
	for (var i = 0; i< cards.length; i++){
		document.getElementsByClassName('card')[i].setAttribute('data-card', cards[i]);
		document.getElementsByClassName('card')[i].addEventListener('click', isTwoCards)
	}

}

function isMatch (){
	if (cardsInPlay[0] === cardsInPlay[1]){
		setTimeout(function() { alert("You found a match!"); }, 20)
	}else{
		setTimeout(function() { alert("Sorry, try again."); }, 20)
	}
	
	setTimeout(function() { for (var i = 0; i< cards.length; i++){
		document.getElementsByClassName('card')[i].innerHTML = ""
     } }, 20)
	
	}

function isTwoCards() {

  cardsInPlay.push(this.getAttribute('data-card'));

  if (cardsInPlay.length === 2) {
   isMatch(cardsInPlay);
   cardsInPlay = [];

  }

  if (this.getAttribute("data-card") === "queen"){
  	this.innerHTML = '<img src="hearts-28424_1280.png"/>'
  }else if (this.getAttribute("data-card") === "king"){
  	this.innerHTML = '<img src= "spade-28268_1280.png"/>'
  }

}

createCards();
createBoard();

 