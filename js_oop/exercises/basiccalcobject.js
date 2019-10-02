/*
**	constructor **
* The constructor will:
* 	- Contain two properties:
* 	  - this.operator - which will contain the current operator being used to calculate.
*     - this.numbers - which will be used to store an array of two number values which will be used
*		along with the current operator to calculate a result.
*       - The initial value will be an empty array.
** Specifications **
*   - Takes zero parameters.
*   - Within the constructor:
*     - Create two properties:
*       - this.operator - which will have an initial value of null.
*       - this.numbers - which will have an initial value of an empty array.
*/

/*
**	loadNumber **
* This method will:
* 	- Add a number to the this.numbers array for calculations.
** Specifications **
*   - Takes a single parameter:
*     - newNumber - which is the number to add to the this.numbers array.
*   - Within the method:
*     - Checks that the "newNumber" parameter contains a value which is a number datatype.
*       - If not - returns false.
*     - Checks if the this.numbers array already contains 2 numbers
*       - If so - returns false.
*	  - Adds the number contained in the newNumber parameter to the this.numbers array
*     - Returns the length on the this.numbers array.
** Considerations **
*   - Why do you want to make sure the this.numbers array doesn't ever hold more than two numbers?
*/

/*
**	loadOperator **
* This method will:
* 	- load an operator into the this.operator property.
** Specifications **
*   - Takes a single parameter:
*     - operator - which is the operator to add to the this.operator property.
*   - Within the method:
*     - Checks that the "operator" parameter contains a value which is a valid operator.
*       - There are four valid operators:
*         - "+" - which will represent adding.
*         - "-" - which will represent subtracting.
*         - "*" - which will represent multiplication.
*         - "/" - which will represent division.
*       - If the operator is not valid:
*         - returns false.
*       - If the operator is valid:
*         - Assigns the operator to the this.operator property.
*         - Returns true.
** Considerations **
*   - Why do you want to make sure the the operator is valid?
*/

/*
**	calculate **
* This method will:
* 	- Calculate a result based on the numbers stored in this.numbers and the operator stored in this.operator.
** Specifications **
*   - Takes zero parameters.
*   - Within the method:
*     - Calculates a result based on the two numbers in the this.numbers array and the operator in this.operator.
*     - Clears out the numbers in the this.numbers array.
*     - Returns the calculated result.
** Considerations **
*   - What checks would be useful in this method to make sure calculation will be successful?
*   - What are the pros and cons of using a switch to calculate the value?
*   - What are the pros and cons of using a conditional statement to calculate the value?
*/
class Calculator{
	constructor(){

	}
	loadNumber(){

	}
	loadOperator(){

	}
	calculate(){
	
	}
}
