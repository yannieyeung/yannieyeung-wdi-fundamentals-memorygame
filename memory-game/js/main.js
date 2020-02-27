

let cards = ["queen", "queen", "king", "king"];
let cardsInPlay =[];
function checkForMatch () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  	console.log("You found a match!");
	} else {
  	console.log("Sorry, try again.");
	}
}

function flipCard (cardId){
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch ();
};
flipCard (0);
flipCard (2);







	//if (cardsInPlay[0] === cardsInPlay[1]) {
	//alert("You found a match!");
	//} else {
	//alert("Sorry, try again.");
	//}

//}


	//let cardOne = cards[0];
	//cardsInPlay.push(cardOne);
	//console.log("User flipped" + " " + cardsInPlay[0]);

	//let cardTwo = cards[1];
	//cardsInPlay.push(cardTwo);
	//console.log("User flipped" + " " + cardsInPlay[1]);
