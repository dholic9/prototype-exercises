//JS-Docs for the "Card" class methods

/*
**	constructor **
* The constructor will:
* 	- Contain two properties:
* 	  - this.suit - which will be used to contain the suit for the card which is created.
*     - this.faceValue - which will be used to contain the face value of the card which is created.
** Specifications **
*   - Takes two parameters:
*     - suit - which is the suit of the card.
*     - faceValue - which is the face value of the card.
*   - Within the constructor:
*     - Create two properties:
*       - this.suit - which will be assigned the value contained in the suit parameter.
*       - this.faceValue - which will be assigned the valued contained in the faceValue parameter.
*/

/*
**	getSuit **
* This method will:
* 	- Return the value contained in the this.suit property.
** Specifications **
*   - Takes no parameters.
*   - Within the method:
*     - returns the value contained in the this.suit property.
** Considerations **
*   - Why is it useful for the Cards to have this method?
*/

/*
**	getFaceValue **
* This method will:
* 	- Return the value contained in the this.faceValue property.
** Specifications **
*   - Takes no parameters.
*   - Within the method:
*     - returns the value contained in the this.faceValue property.
** Considerations **
*   - Why is it useful for the Cards to have this method?
*/
class Card{
	constructor(){

	}
	getSuit(){

	}
	getFaceValue(){

	}
}

//JS-Docs for the "Deck" class methods


/*
**	constructor **
* The constructor will:
* 	- Contain two properties:
* 	  - this.cards - which will contain all of the Cards which are instantiated.
** Specifications **
*   - Takes zero parameters.
*   - Within the constructor:
*     - Create one property:
*       - this.cards - which will have an initial value of an empty array.
** Considerations **
*   - Why do we store data properties in constructors?
*/

/*
**	addCard **
* This method will:
* 	- Instantiate a new Card class based on the supplied suit and faceValue.
** Specifications **
*   - Takes two parameters.
*     - suit - which will contain the suit to assign the new Card.
*     - faceValue - which will contain the faceValue to assign to the new Card.
*   - Within the method:
*     - Instantiates a new Card class with the supplied "suit" and "faceValue".
*     - Pushes the new Card into the this.cards property
*     - Returns the amount of cards that are currently stored in the this.cards property.
** Considerations **
*   - How do you Instantiate a new Card class?
*   - How would you find out how many cards are stored in the this.cards property?
*/

/*
**	getCardCount **
* This method will:
* 	- Return the amount of cards stored in the this.cards property.
** Specifications **
*   - Takes no parameters.
*   - Within the method:
*     - return the amount of cards stored in the this.cards property.
** Considerations **
*   - What data will tell you how many cards are stored in the this.cards property?
*/

/*
**	dealCards **
* This method will:
* 	- Return the amount of cards requested.
** Specifications **
*   - Takes one parameters.
*     - count - which is the amount of cards to deal.
*   - Within the method:
*     - Checks if the amount of cards requested is greater than the amount of cards stored
*       in the this.cards property.
*       - If the amount is greater - removes all remaining cards from the this.cards property
*         and returns them in a new array.
*       - If the amount is not greater - removes the requested amount of cards from the
*         this.cards property and returns them in a new array.
*     - Note: All cards must be removed from the this.cards array in the reverse order in which
*             they were added to the this.cards array.
** Considerations **
*   - How do you remove cards from the this.cards property in reverse order?
*   - Why must you confirm that the amount of cards requested is not greater than the
*     amount of cards currently stored in the this.cards property.
*/

/*
**	shuffle **
* This method will:
* 	- shuffle the cards currently stored in the this.cards property into random order.
** Specifications **
*   - Takes no parameters.
*   - Within the method:
*     - shuffles the cards in the this.cards property into random order.
** Considerations **
*   - How do you shuffle the items in an array?
*/
class Deck{
	constructor(){

	}
	addCard(){

	}
	getCardCount(){

	}
	dealCards(){

	}
	shuffle(){

	}


}
