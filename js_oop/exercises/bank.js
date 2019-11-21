//JS-Docs for the "Bank" class methods


/*
**	constructor **
* The constructor will:
* 	- Contain two properties:
* 	  - this.bankName - which will contain the name of the bank that is passed into the constructor
*       as an argument when the class is instantiated.
*       - Note - Instantiation occurs when the "new" keyword is used on a class - ex: var bank = new Bank("Washington Mutual")
*     - this.accounts - which will be used to store an object literal which contains all "Accounts" instantiated by the Bank class.
*       - The initial value will be an empty object literal.
** Specifications **
*   - Takes a single parameter:
*     - bankName - which will be the name of the bank being instantiated.
*   - Within the constructor:
*     - Create two properties:
*       - this.bankName - which will be assigned the value contained in the "bankName" parameter.
*       - this.accounts - which will have an initial value of an object literal.
*/

/*
**	makeAccount **
* This method will:
* 	- create an account and store it in the "this.accounts" object literal at a property
*     whose name matches the account number.
** Specifications **
*   - Takes a single parameter.
*     - accountNumber - which will be used as the property name in the this.accounts object literal
*       where the new account will be stored.
*   - Within the method:
*     - Checks if there is already an account stored in the this.accounts property with the same
*       account number as the value in the "accountNumber" parameter.
*       - If there is - return false.
*     - If no account with the "accountNumber" value exists in this.accounts:
*       - Instantiates a new "Account" class.
*       - And add it to the this.accounts property at a property whose name matches the accountNumber.
*       - returns the new account.
** Considerations **
*   - Why would you want to check if an account with the same account number already exists?
*   - How can you check if an object contains a property with a specific name?
*   - What is the proper way to instantiate an object?
*   - Did you notice that this method makes use of the "Account" Class you created already?
*/

/*
**	checkForAccount **
* This method will:
* 	- Check if an account exists with a number that matches the number in the accountNumber parameter.
*   - Return true if the account exists.
*   - Return false if the account does not exist.
*     - Note: this method is replacing the functionality in "makeAccount" which checks if the account
*       already exists. You will now use this method in the "makeAccount" method to check if an account
*       exists.
** Specifications **
*   - Takes a single parameter.
*     - accountNumber - which will be the account number to look for in the this.accounts property.
*   - Within the method:
*     - Checks if there is already an account stored in the this.accounts property with the same
*       account number as the value in the "accountNumber" parameter.
*       - If there is - return true.
*       - If there is not - return false.
*
** Considerations **
*   - Why is it a good idea to move functionality into a separate method?
*/

/*
**	removeAccount **
* This method will:
* 	- Remove an account from the this.accounts property.
** Specifications **
*   - Takes a single parameter.
*     - accountNumber - which will be the account number to delete from the this.accounts property.
*   - Within the method:
*     - Uses the "checkForAccount" method to check if an account number exists which matches the
*       number in the "accountNumber" variable.
*     - If the account doesn't exist:
*       - Returns a concatenated string "account [accountNumber] does not exist."
*         - Note: you must concatenate the accountNumber parameter into the string, and the string
*           must match exactly the example string as that is the string the test is looking for
*           and the test will fail if the formatting is incorrect.
*     - If the account does exist, and still has money in it:
*       - Returns a string - "account is not empty".
*     - If the account exists and is empty:
*       - Deletes the account using the delete keyword.
*       - Returns a concatenated string - "account [accountNumber] deleted."
*
** Considerations **
*   - Why should you confirm that the account exists before removing it?
*   - What would be an easy way to check if an account exists?
*/

/*
**	deposit **
* This method will:
* 	- Deposit money into an existing account.
** Specifications **
*   - Takes two parameters.
*     - accountNumber - which will be the account number to add money to.
*     - amount - which will be the amount of money to add to the account.
*   - Within the method:
*     - If the account number to add money to doesn't exist:
*       - Returns a string "account does not exist."
*     - If the account does exist:
*       - Uses the account's add method to add money to the account.
*       - Returns a concatenated string - "account [accountNumber] now has [new account amount]."
** Considerations **
*   - Where will you get the new value for the account you added money to?
*   - How should you check if the account exists?
*/

/*
**	withdraw **
* This method will:
* 	- Remove money from an existing account.
** Specifications **
*   - Takes two parameters.
*     - accountNumber - which will be the account number to add money to.
*     - amount - which will be the amount of money to remove from the account.
*   - Within the method:
*     - If the account number to remove money from doesn't exist:
*       - Returns a string "account does not exist."
*     - If the account does exist:
*       - Uses the account's remove method to remove money from the account.
*       - Returns a concatenated string - "removed [amount withdrawn] from account [account number]. It now has [amount that remains in account]."
** Considerations **
*   - Where will you get the new value for the account you removed money from?
*   - What account methods would be helpful in this method?
*/


// var variableefejw = new Bank ("Goliath")
class Bank{
	constructor(bankName){
		this.bankname = bankName;
		this.accounts = {};
	}
	makeAccount(accountNumber){
		if(this.checkForAccount(accountNumber)){
			return false;
		} else {
			this.accounts[accountNumber] = new Account();
			return this.accounts[accountNumber]
		}
	}

	checkForAccount(accountNumber){
		if(this.accounts.hasOwnProperty(accountNumber)){
			return true;
		} else {
			return false;
		}
	}
	removeAccount(accountNumber){
		if(this.checkForAccount(accountNumber)){
			if(this.accounts.accountNumber[amount] > 0){
				return 'account is not empty'
			}else {
				delete this.accounts[accountNumber];
				return "account ["+accountNumber+"] deleted."
			}
		} else {
			return "account "+accountNumber+" does not exist"
		}
	}
	deposit(accountNumber, amount){

	}
	withdraw(){

	}
}
