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
*     - bankName
*   - Within the constructor:
*     - Create two properties:
*       - this.operator - which will have an initial value of null.
*       - this.numbers - which will have an initial value of an empty array.
*/

class Bank{
	constructor( bankName){
		this.bankName = bankName;
		this.accounts = {};
		//takes in the name of the bank.
		//makes an object to store all accounts into
	}
	makeAccount( accountNumber ){
		//makes an account
		if( this.checkForAccount(accountNumber) ){
			return false;
		}
		var newAccount = new Account();
		this.accounts[ accountNumber ] = newAccount;

		//takes in the account number of an account
		//checks if the account number already exists in the account storage object in the constructor
			//if already exists, returns false
		//otherwise makes an new Account object, storing it into the storage object in the constructor
		//returns the Account object that was constructed
		return newAccount;
	}
	checkForAccount( accountNumber ){
		return this.accounts.hasOwnProperty(accountNumber)
		//checks if an account exists or not
		//takes in the account number of an account
		//returns false if the account does not exist in the accounts object from the constructor
		//returns true if the account does exist
	}
	removeAccount( accountNumber ){
		if(!this.checkForAccount( accountNumber )){
			return 'account '+accountNumber+' does not exist'
		}
		//removes an account
		//takes in an account number
		//if the account doesn't exist, returns
			//"account <accountNumber> does not exist" where accountNumber is the account number
		//if the account is not empty, returns
			//'account is not empty'
		//otherwise deletes the account from the constructor storage
		//returns
			'account <accountNumber> deleted'

	}
	deposit( ){
		//deposits money into an account
		//takes in an account number and a numeric amount
		//if the account doesn't exist, returns
			//'account does not exist'
		//otherwise uses the account's add method and adds to the account
			//returns
			//"account <accountNumber> now has <new account amount>
	}
	withdraw( accountNumber, amount ){
		//removes money from an account
		//takes in an account number and an amount
		//checks if the account exists, if not
			//return 'account does not exist'
		//uses the Account's remove method to withdraw funds from the account
		//returns "removed <amount withdrawn> from account <account number>. It now has <remaining amount in account>"
	}
}
