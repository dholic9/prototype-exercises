//JS-Docs for the "NameCapper" class methods


/*
**	constructor **
* The constructor will:
* 	- Contain three properties:
* 	  - this.textValue - which will contain the current text value of the object. Initial value will be
*       the string in the "string" parameter in lowercase.
*     - this.mode - which will store a string indicating whether to change the stored text to
*       uppercase or lowercase letters. Initial value will be "lowercase".
*     - this.domElement - which will store a jQuery reference for the DOM element you will be creating
*       in the render() method. Initial value will be null.
** Specifications **
*   - Takes one parameter:
*     - string - which will be used to set the initial text value of the object.
*   - Within the constructor:
*     - Create the properties above, and store the appropriate values in them.
*     - Bind "this" for the this.handleClick method.
*       - Remember from before, You have to bind "this" for this method because it will be called by an event handler,
*         and if you don't bind "this", "this" will no longer refer to the "CounterMedium" object.
*          - I know you have seen this multiple times before, BUT "this" and the need for binding it will take a while to sink in.
** Considerations **
*   - How do you convert the "string" parameter to lowercase letters?
*/

/*
**	render **
* This method will:
* 	- Create a Div element.
*   - Add a class of "nameHolder" to the Div element
*   - Add a event handler to the div which calls the handleClick method on click.
*   - Store the created div in the constructor.
*   - Update the text on the DOM.
*   - Return the created DOM element.
** Specifications **
*   - Takes no parameters.
*/

/*
**	update **
* This method will:
* 	- Update the text of the DOM element stored in the constructor with the current text value stored in the
*     constructor.
** Specifications **
*   - Takes no parameters.
*/

/*
**	getName **
* This method will:
*   - return the currently stored text value.
** Specifications **
*   - Takes no parameters.
*/

/*
**	upperCaseName **
* This method will:
*   - Change all of the letters in the currently stored text value to uppercase;
*   - Update the string stored in the this.mode property to be "uppercase".
** Specifications **
*   - Takes no parameters.
** Considerations **
*   - What does the string in the this.mode property tell the developer?
*/

/*
**	lowerCaseName **
* This method will:
*   - Change all of the letters in the currently stored text value to lowercase;
*   - Update the string stored in the this.mode property to be "lowercase".
** Specifications **
*   - Takes no parameters.
*/

/*
**	setName **
* This method will:
*   - Confirm that it received a truthy value as an argument:
*     - If it received a truthy value:
*       - Update the currently stored text value.
*       - Set the new text value to lowercase letters.
*       - Update the text on the DOM to match the new text value.
*     - If it did not receive a truthy value:
*       - return false.
** Specifications **
*   - Takes one parameter - string - which should receive a string to update the current text value.
** Considerations **
*   - What methods would be useful in completing this methods functionality?
*/

/*
**	handleClick **
* This method will:
*   - Check the mode that is currently stored in the constructor:
*     - If it is set to "lowercase":
*       - Call the method to change the text value to uppercase.
*     - If it is set to "uppercase":
*       - Call the method to change the text value to lowercase.
*   - Update the text value on the DOM to match the updated text value.
** Specifications **
*   - Takes no parameters.
** Considerations **
*   - This is a good time to remind yourself about why you had to bind
*     "this" for this method.
*/

class NameCapper{
    constructor(  ){

    }
    render( ){

    }
    update( ){

    }
    getName( ){

    }
    upperCaseName( ){

    }
    lowerCaseName( ){

    }
    setName(  ){

    }
    handleClick( ){

    }
}
