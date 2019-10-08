//JS-Docs for the "CounterMedium class methods


/*
**	constructor **
* The constructor will:
* 	- Contain two properties:
* 	  - this.value - which will contain the current value to display on the counter display.
*     - this.domElement - which will store a jQuery reference for the DOM element you will be creating
*       in the render() method. Initial value will be null.
** Specifications **
*   - Takes one parameter:
*     - number - which will be used to set the initial value of the counter.
*   - Within the constructor:
*     - Create the property above, and store the appropriate value in it.
*     - Bind "this" for the this.handleClick method.
*       - Remember from before, You have to bind "this" for this method because it will be called by an event handler,
*         and if you don't bind "this", "this" will no longer refer to the "CounterMedium" object.
*/

/*
**	render **
* This method will:
* 	- Create a Div element.
*   - Store the created div in the constructor..
*   - Call the update method in order to update the DOM counter text.
*     - This will be very similar to the method you built for the previous counter.
*   - Return the created DOM element.
** Specifications **
*   - Takes no parameters.
** Considerations **
*   - What property should the created DOM element be stored at?
*   - Why is using the update method useful here?
*/

/*
**	addClickHandler **
* This method will:
* 	- Add an event handler to the DOM element which you created and stored in the constructor.
*   - Have the event handler call the this.handleClick method when the DOM element is clicked.
** Specifications **
*   - Takes no parameters.
** Considerations **
*   - How do you add an event handler to the DOM element stored in the constructor?
*/

/*
**	update **
* This method will:
* 	- Update the text of the DOM element stored in the constructor with the current value stored in the
*     constructor.
** Specifications **
*   - Takes no parameters.
** Considerations **
*   - How do you update the text of a DOM element?
*/

/*
**	increment **
* This method will:
* 	- Increment the stored value for the counter in the constructor and then update the text on the DOM.
** Specifications **
*   - Takes no parameters.
** Within the Method **
*   - Increments the value stored in the constructor.
*   - Updates the counter text on the DOM.
*/

/*
**	handleClick **
* This method will:
* 	- Call the increment method when the DOM element is clicked.
** Specifications **
*   - Takes no parameters.
** Within the Method **
*   - Calls the increment method every time the DOM is clicked.
** Considerations **
*   - What is a benefit of using named functions with event handlers?
*   - This is a good time to remind yourself about why you had to bind
*     "this" for this method.
*/


class CounterMedium{
    constructor(  ){

    }
    addClickHandler( ){

    }
    handleClick( ){

    }
    increment( ){

    }
    update( ){

    }
    render( ){

    }
}
