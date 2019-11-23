//JS-Docs for the "Input" class methods

/*
**	constructor **
* The constructor will:
* 	- Contain five properties:
* 	  - this.inputElement - Which will store a DOM element reference.
*     - this.errorElement - which will be used to store a DOM element you create to display an error.
*     - this.range - which will be assigned an object literal with two properties:
*        - min - which will be used to set the minimum end of a range of numbers - Initial value is null.
*        - max - which will be used to set the maximum end of a range of numbers - Initial value is null.
*     - this.pattern - Which will be used to store a "regex" pattern that will test the value in the
*                      input - initial value is an empty string.
*     - this.errorMessage - Which will be used to store any error messages that the class generates - initial
*                           value is an empty string.
** Specifications **
*   - Takes one parameter:
*     - targetInputElement - which will receive a DOM element as an argument when the class is instantiated.
*   - Within the constructor:
*     - Create the five properties listed above.
*     - Assign the value contained in the parameter into its associated property.
** Considerations **
*   - What is regex?
*   - Why do you think the properties above are included in the constructor?
*/
// regex pattern /[A-Z]+/


/*
**	setPattern **
* This method will:
* 	- Assigns the received test pattern to its associated property in the constructor.
** Specifications **
*   - Takes the regex pattern:
*/

/*
**	getPattern **
* This method will:
* 	- Returns the stored test pattern in the constructor.
** Specifications **
*   - Takes no parameters:
*/

/*
**	setRange **
* This method will:
* 	- Set the values of the min and max "range" properties in the constructor.
** Specifications **
*   - Takes two parameters:
*     - min - a numeric value.
*     - max - a numeric value.
** Considerations **
*  - How do you assign the values contained in the parameters to the correct properties in the constructor?
*/

/*
**	getRange **
* This method will:
* 	- return the values contained in the this.range property.
** Specifications **
*   - Takes no parameters:
*/
//

/*
**	test **
* This method will:
* 	- Confirm that the input value falls within the specified range.
*   - Confirm that the input value passes a regex test based on the stored regex pattern.
*   - Return an object literal in two possible configurations:
*     - If there are no errors:
*       - Return an object literal with a single property - result - which will be set to true.
*     - If there are errors:
*       - If the error is because the tested value is outside the currently stored range:
*         - Return an object literal with two properties:
*           - result - which will be set to false.
*           - error - which will be set to a string - "range"
*       - If the error is because the tested value does pass when tested against the stored regex pattern:
*         - Return an object literal with two properties:
*           - result - which will be set to false.
*           - error - which will be set to a string - "pattern".
** Specifications **
*   - Takes two parameters:
*     - min - a numeric value.
*     - max - a numeric value.
** Considerations **
*  - How do you run a regex test on a value?
*    - Note: documentation https://www.w3schools.com/jsref/jsref_regexp_test.asp
*  - How can you quickly tell if the range has been previously set?
*/
// if true result should be true ; or fase;
// setting test for range and pattern
// pattern and then range
// separate tests
// check if have range then check if within range
// output {result: false,
// 				 error: pattern}

/*
**	showError **
* This method will:
* 	- Create a Div with the following specifications:
*     - It must have a class of "inputError".
*     - It must have text which matches the "message" passed into the showError method.
*     - It must be given two CSS properties via jQuery:
*       - left - which will be given a value in pixels equal to the "left" property of the stored input element.
*       - top - which will be given a value in pixels equal to the "top" property of the stored input element
*         plus the input's height.
*         - Note: This is to place the element directly below the input. It's prettier that way!
*     - It must be stored in the this.errorElement property.
*   - The completed Div must be appended to the parent element of the input.
** Specifications **
*   - Takes one parameter:
*     - message - which is a string containing an error message.
** Considerations **
*  - How do you find the position of an element?
*    - Note: documentation https://www.w3schools.com/jquery/css_position.asp
*  - How can you find the height of an element?
*    - Note: documentation https://www.w3schools.com/jquery/css_height.asp
*  - How do you find the parent of an element?
*    - Note: documentation https://www.w3schools.com/jquery/traversing_parent.asp
*/
//

/*
**	hideError **
* This method will:
* 	- Remove the error element from the DOM.
*   - Reset the errorElement property to its default value.
** Specifications **
*   - Takes no parameters:
** Considerations **
*   - How do you remove an element from the DOM?
*/
class Input{

	constructor(targetInputElement){

		this.inputElement = $(targetInputElement);
		this.errorElement = null;
		this.range = {
			min: null,
			max: null
		};
		this.pattern = "";
		this.errorMessage = "";

	}

	setPattern(patt){
		this.pattern = patt;
	}

	getPattern(){
		return this.pattern;
	}

	setRange(min, max){


		this.range.min = min;
		this.range.max = max;
	}

	getRange(){
		return this.range;
	}


	test(){

		var inputValue = this.inputElement.val();

		if(!this.range.min){
			if (this.pattern.test(inputValue)){
				return {
					result: true
				}
			} else {
				return{
					result: false,
					error: "pattern"
				}
			}
		} else if (inputValue > this.range.min && inputValue < this.range.max){
				return{
					result: true
				}
		} else {
			return{
				result: false,
				error: "range"
			}
		}




		// if (this.pattern.test(inputValue)){

		// 	if (inputValue > this.range.min && inputValue < this.range.max){
		// 		return {
		// 			result: true
		// 		}
		// 	} else{
		// 		return {
		// 			result: false,
		// 			error: "range"
		// 		}
		// 	}
		// } else{
		// 	return{
		// 		result: false,
		// 		error: "pattern"
		// 	}
		// }

		// if (inputValue > this.range.min && inputValue < this.range.max){
		// 	if (this.pattern.test(inputValue)){
		// 		return {result: true};
		// 	} else {
		// 		return {
		// 			result: false,
		// 			error: "pattern"
		// 		}
		// 	}
		// } else {
		// 	return {
		// 		result: false,
		// 		error: "range"
		// 	}
		// }

		}


	showError(message){
		var elemPosition = this.inputElement.position();
		var height = this.inputElement.height();




		this.errorElement = $("<div>").addClass("inputError").text(message)
		this.errorElement.css("left", elemPosition.left);
		this.errorElement.css("top", (elemPosition.top + height));

		var parentElement = $(this.inputElement).parent();
		parentElement.append(this.errorElement);
	}

	hideError(){
		this.errorElement.remove();
		this.errorElement = null;
	}
}
