

class Account{
	constructor(){
		//store the amount of money in the account
		this.amount = 0;
	}
	
	add( amountToAdd ){
		if(typeof amountToAdd !=='number' || amountToAdd < 0){
			return false;
		}
		//add money to the amount stored in the account
		//takes in an amount
		//checks if it is actually a number greater than 0
			//if not, return false
		this.amount += amountToAdd;
		//adds it to the existing amount
		//returns the new amount in the account
		return this.amount;
	}
	remove( amountToRemove ){
		if(typeof amountToRemove !=='number' || amountToRemove < 0){
			return false;
		}
		if(amountToRemove > this.amount){
			amountToRemove = this.amount;
		}
		this.amount -= amountToRemove;
		//removes funds from an account
		//checks if amount is actually a number greater than 0
			//if not, return false
		//check if the amount to withdraw is more than the account
		//if more, only withdraw the amount in the account, not more
		//if less, withdraw the amount specified
		//return the amount actually withdrawn
		return amountToRemove;
	}
	getAmount(){
		//returns the amount in the account
		return this.amount;
	}
}