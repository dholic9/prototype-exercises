/*
**	constructor **
* The constructor will:
* 	- Contain five properties:
* 	  - this.availableColors - Which will store an array of colors.
*     - this.colorIndex - Which will store a numeric value.
*     - this.colorClass - Which will be used to store a CSS class.
*     - this.element - Which will be used to store a DOM element - initial value is null.
*     - this.rightNeighbor - Which will be used to store an object literal reference to
*        another instantiated ColorSquare class - Initial value set to null.
** Specifications **
*   - Takes three parameters:
*     - colors - which will receive an array of colors as an argument when the class is instantiated.
*     - currentColor - which will receive a numeric value as an argument when the class is instantiated.
*     - colorClass - which will receive a CSS class as an argument when the class is instantiated.
*   - Within the constructor:
*     - Create the five properties listed above.
*     - Assign the values contained in the parameters into their associated properties.
*     - Binds "this" for any methods that require it for functionality.
** Considerations **
*   - What values are contained in the parameters of the constructor?
*   - Why do you think the constructor is storing references to other instantiated objects?
*   - Why do you have to bind "this" for methods that are called by event handlers?
*/
/*
**	render **
* This method will:
* 	- Create a Div element, store it in the constructor at the appropriate property,
*     and assign it the following attributes / functionality:
*     - The CSS class stored in the the constructor.
*     - A click handler which will call a method "handleCLick" - which you will be constructing.
*     - A background color in the stored color array at the stored color index.
*   - Return the created Div element.
** Specifications **
*   - Takes no parameters:
** Considerations **
*  - What property in the constructor should the element be stored?
*  - What properties in the constructor contain the color array and the color index?
*  - Where is the CSS class you need to use stored?
*/
/*
**	set neighbor **
* Read the documentation on Getters and Setters!!!: https://www.w3schools.com/js/js_object_accessors.asp
* This method "setter" will:
* 	- Confirm that the argument passed into the "neighborObject" parameter contains an instance of the ColorSquare class.
*   - If it does:
*     - Assign the value of the neighborObject parameter to the appropriate property in the constructor.
*     - Return true.
*   - If it does not:
*     - Return false
** Specifications **
*   - Takes one parameter:
*     - neighborObject - Which should contained a reference to another instance of the ColorSquare class.
** Considerations **
*  - How do you confirm that an object is the instance of a particular class?
*    - Note: Read this documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
*  - What is the advantage of using a getter/setter rather than a regular method?
*  - Where should you store the value contained in the neighborObject parameter?
*/
/*
**	get neighbor **
* Worth looking at again!!! : https://www.w3schools.com/js/js_object_accessors.asp
* This method "getter" will:
* 	- Returns the stored neighbor object.
** Specifications **
*   - Takes no parameters:
** Considerations **
*   - Where is the neighbor stored?
*/
/*
**	handleClick **
* This method will:
* 	- Check the object's stored color index to see if it can be increased by one without
*     incrementing beyond the length of the colors array.
*     - If it can:
*       - Increment the color index by 1 and update the background color for the ColorSquare based on the new color index.
*     - If it can't:
*       - Reset the color index to zero and update the background color for the ColorSquare based on the new color index.
*   - Check if the ColorSquare currently has a neighbor ColorSquare stored in the constructor.
*     - If it does:
*       - Call the handleClick method on the stored neighbor ColorSquare.
** Specifications **
*   - Takes no parameters:
** Considerations **
*   - How do you check if the color index can be incremented without moving beyond the end of the array?
*   - How do you update the background color of the ColorSquare?
*   - Why do you have to confirm that the "neighbor" ColorSquare exists?
*   - Since this function is called by an event handler, do you need to bind this?
*     - Example of binding this for a method in the constructor:
*       - this.functionName = this.functionName.bind(this);
*/
/*
**	changeColor **
* This method will:
* 	- Handle the functionality for updating the background color for the ColorSquare.
** Specifications **
*   - Takes one parameter:
*    - newColor - Which will receive the index of the color in the colors array to set the ColorSquare background color to.
** Considerations **
*   - What modifications do you have to make to the "handleClick" method now that you have this method?
*   - What method will you call this method from?
*   - What value do you have to pass in as an argument when this method is called?
*/

class ColorSquare{

	constructor(colors, currentColor, colorClass){
		this.availableColors = colors;
		this.colorIndex = currentColor;
		this.colorClass = colorClass;
		this.element = null;
		this.rightNeighbor = null;
		this.handleClick = this.handleClick.bind(this);
	}

	render(){
		this.element = $('<div>');
		this.element.addClass(this.colorClass);
		this.element.on('click', this.handleClick);
		this.element.css('background-color', this.availableColors[this.colorIndex]);
		return this.element;
	}

	set neighbor(neighborObject){
		if(neighborObject instanceof ColorSquare){
			this.rightNeighbor = neighborObject;
				return true;
		} else {
				return false;
		}
	}

	get neighbor(){
		return this.rightNeighbor
	}

	handleClick(){

		if(this.colorIndex < $(this.availableColors).length-1){
			this.colorIndex++;
			this.element.css('background-color', this.availableColors[this.colorIndex]);
		} else {
				this.colorIndex = 0;
			this.element.css('background-color', this.availableColors[this.colorIndex]);
		}

		if(this.rightNeighbor){
			this.rightNeighbor.handleClick();
		}

	}

	changeColor(newColor){
		this.element.css('background-color', this.availableColors[newColor]);
	}

}
