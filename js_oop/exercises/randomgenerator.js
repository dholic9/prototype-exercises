//JS-Docs for the "RandomGenerator" class methods

/*
**	constructor **
* The constructor will:
* 	- Contain three properties:
* 	  - This.min - Which is the minimum value which can be randomly generated.
*     - This.max - Which is the maximum value which can be randomly generated.
*     - This.random - Which will store the random value which is generated based on the "min" and "max".
** Specifications **
*   - Takes two parameters:
*     - min - which is a number and represents the minimum value the random generator can generate.
*     - max - which is a number and represents the maximum value the random generator can generate.
*   - Within the constructor:
*     - Checks to see if the "min" and "max" parameters are undefined.
*       - If they are - Assigns "this.min" a value of 1, and "this.max" a value of 10.
*       - If they are not - Assigns the parameters to the this.min and this.max properties.
** Considerations **
*   - What is the purpose of the constructor?
*   - Why are various properties used to store data defined in the constructor?
*/

/*
**	getRange **
* This method will:
* 	- Return the current values stored in the this.min and this.max properties.
** Specifications **
*   - Takes zero parameters:
*   - Within the method:
*     - Returns an object literal which contains two properties:
*	    - 'min' - which will be assigned the current value stored in the this.min property.
*	    - 'max' - which will be assigned the current value stored in the this.max property.
** Considerations **
*   - Why do you think that a method like this is useful in class objects?
*   - Why is this a great example of a callback method used to share data between objects?
*/

/*
**	generate **
* This method will:
* 	- Generate a random number within the range defined by the this.min and this.max properties.
*   - And store it in the this.random property in the constructor.
** Specifications **
*   - Takes zero parameters:
*   - Within the method:
*     - Generate a random number within the defined range and store it in the this.random property.
** Considerations **
*   - Why is a method to generate random numbers useful?
*/

/*
**	getNum **
* This method will:
* 	- Return the randomly generated number which is stored in the this.random property.
** Specifications **
*   - Takes zero parameters:
*   - Within the method:
*     - Returns the value stored in the this.random property.
*/
class RandomGenerator{
	constructor(){

	}
	getRange(){

	}
	generate(){

	}
	getNum(){

	}
}
