//JS-Docs for the "Account" class methods

/*
**	constructor **
* The constructor will:
* 	- Store the amount of money which is contained in the account
*		- Note: Storing data for use by the methods and properties of a class is one of the
*				primary uses of the constructor.
** Specifications **
*   - Takes no parameters
*   - Within the constructor:
*     - Contains a property "this.amount" which will store the amount of money in the account.
** Considerations **
*   - Why is the constructor used to store data?
*   - What are other uses for the constructor in a class?
*/

/*
**	add **
* This method will:
* 	- Add money to the amount of money stored in the constructor.
** Specifications **
*   - Takes a single parameter:
*     - amountToAdd - which is the amount of money to add to the this.amount property.
*   - Within the method:
*     - Confirms that the "amountToAdd" parameter contains a value which is both a number datatype and
*     greater than zero.
*     - If the data is valid - add the amount to the this.amount property.
*     - If the data is not valid - return out of the function.
** Considerations **
*   - Why do you think that a method like this is useful in class objects?
*/

/*
**	getAmount **
* This method will:
* 	- Return the amount of money stored in the this.amount property.
** Specifications **
*   - Takes zero parameters:
*   - Within the method:
*     - Returns the value stored in the this.amount property.
** Considerations **
*   - Why do you think that a method like this is useful in class objects?
*   - Why is this a great example of a callback method used to share data between objects?
*/

/*
**	remove **
* This method will:
* 	- Remove money from the amount stored in the constructor.
** Specifications **
*   - Takes a single parameter:
*     - amountToRemove - which is the amount of money to remove from the account .
*   - Within the method:
*     - Checks if the amountToRemove is a number datatype and greater than 0.
* 	    - If not - returns out of the function
*	  - Checks if the amountToRemove is greater than the amount currently stored in the
*       this.amount property.
*		- If it is - removes only the amount actually in the account.
*       - If it is not - removes the amountToRemove amount.
*     - Returns the amount "actually" removed.
** Considerations **
*   - Why do you think that a method like this is useful in class objects?
*   - Why is this a great example of a callback method used to share data between objects?
*/

class Account{
	constructor(){
		this.amount = 0;

	}

	add(amountToAdd){
		if(typeof amountToAdd === "number" && amountToAdd > 0){
			this.amount += amountToAdd;
		} else{
			return false;
		}
		return this.amount;
	}

	getAmount(){
		return this.amount;
	}

	remove(amountToRemove){
		if(typeof amountToRemove === "number" && amountToRemove>0){
			if( amountToRemove > this.amount){
				amountToRemove = this.amount;
				this.amount -= amountToRemove;
				return amountToRemove;
			} else {
				this.amount -= amountToRemove;
				return amountToRemove;
			}

		} else {
			return false;
		}



	}

}
