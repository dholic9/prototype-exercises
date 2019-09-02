
class Calculator{
	constructor(){
		//takes in nothing
		//make storage for the operator and the numbers
		this.operator = null;
		this.numbers = [];
	}
	loadOperator( op ){
		// switch(op){
		// 	case '+':
		// 	case '-':
		// 	case '/':
		// 	case '*':
		// 		console.log('nothing');
		// 	default:
		// 		return false;
		// }
		// if(op!=='+' && op!=='-' && op!=='/' && op!=='*'){
		// 	return false;
		// }
		// if( !(op==='+' || op==='-' || op==='/' || op==='*')){
		// 	false;
		// }
		if(!'+-/*'.includes(op)){
			return false;
		}
		this.operator = op;
		return true;
		//adds the operator to the next calculation
		//takes in the operator
		//checks if it is a valid operation (+-*/)
			//save the op to the constructor storage
			//return true
		//or return false if not the right operator
	}
	loadNumber( newNumber ){
		if(typeof newNumber !== 'number'){
			return false;
		}
		if(this.numbers.length===2){
			return false;
		}
		this.numbers.push( newNumber );
		return this.numbers.length;
		//takes in a number and stores it as one of the numbers to perform math on
		//takes in 1 number
		//checks if it is actually a number and if we have fewer than 2 numbers
		//if it is a number, and we have 2 or fewer numbers, store it
			//return the number of numbers stored
		//otherwise return false (too many numbers stored)
	}
	calculate(){
		var num1 = this.numbers[0], num2 = this.numbers[1];
		this.numbers = [];
		switch( this.operator){
			case '+': return num1 + num2;
			case '/': return num1 / num2;
			case '*': return num1 * num2;
			case '-': return num1 - num2;

		}

		//calculate the result of the stored numbers and operator
		//takes in nothing
		//calculates with the operator and 2 numbers
		//clears out the stored numbers
		//returns the calculated result
	}
}