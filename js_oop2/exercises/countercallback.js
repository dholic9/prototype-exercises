//JS-Docs for the "CounterCallback" class methods


/*
**	constructor **
* The constructor will:
* 	- Contain three properties:
* 	  - this.value - which will contain the current value to display on the counter display.
*     - this.domElement - which will store a jQuery reference for the DOM element you will be creating
*       in the render() method. Initial value will be null.
*     - this.callback - which will store a callback function used for testing which is passed into the constructor as an argument.
*       - passing function definitions into classes when they are instantiated is a very common way for objects
*         to pass information between each other. For example - This "CounterCallback" class is communicating with the
*         object which instantiates it by passing the other object a reference to itself when it calls the callback method
*         in the "handleClick" method. This is a great time to start becoming familiar with the idea of object
*         communication via callbacks as you will see it constantly going forward!!!
** Specifications **
*   - Takes two parameters:
*     - number - which will be used to set the initial value of the counter.
*     - callback - which will be a callback function used by the tester to confirm your functionality.
*   - Within the constructor:
*     - Create the properties above, and store the appropriate values in them.
*     - Bind "this" for the this.handleClick method.
*       - Remember from before, You have to bind "this" for this method because it will be called by an event handler,
*         and if you don't bind "this", "this" will no longer refer to the "CounterMedium" object.
*       - I know you have seen this before, but "this" and the need for binding it will take a while to sink in.
*/

/*
**	getValue **
* This method will:
* 	- Return the current counter value which is stored in the constructor.
** Specifications **
*   - Takes no parameters.
** Considerations **
*   - What property in the constructor contains the current counter value?
*/

/*
**	render **
* This method will:
* 	- Create a Div element.
*   - Add a class of "counter" to the Div element
*   - Store the created div in the constructor.
*   - Update the text on the DOM.
*   - Return the created DOM element.
** Specifications **
*   - Takes no parameters.
** Considerations **
*   - What property should the created DOM element be stored at?
*   - What is the best way to update the text on the DOM?
*/

/*
**	addClickHandler **
* This method will:
* 	- Add an event handler to the DOM element which you created and stored in the constructor.
*   - Have the event handler call the this.handleClick method when the DOM element is clicked.
** Specifications **
*   - Takes no parameters.
*/

/*
**	update **
* This method will:
* 	- Update the text of the DOM element stored in the constructor with the current value stored in the
*     constructor.
** Specifications **
*   - Takes no parameters.
*/

/*
**	increment **
* This method will:
* 	- Increment the stored value for the counter in the constructor and then update the text on the DOM.
** Specifications **
*   - Takes no parameters.
*/

/*
**	handleClick **
* This method will:
*   - Call the callback method currently stored in the constructor and pass in a reference to the "CounterCallback" class.
* 	- Call the increment method when the DOM element is clicked.
** Specifications **
*   - Takes no parameters.
** Considerations **
*   - What reference to the CounterCallback method do you need to pass in as an argument?
*   - This is a good time to remind yourself about why you had to bind
*     "this" for this method.
*/

class CounterCallback{
    constructor(number, callback){
        this.value = number;
        this.domElement = null;
        this.callback = callback;
        this.handleClick = this.handleClick.bind(this);
    }
    getValue( ){
        return this.value;
    }
    render( ){
        this.domElement = $("<div>").addClass('counter');
        this.update();
        return this.domElement;
    }
    addClickHandler( ){
        $(this.domElement).on('click', this.handleClick);
    }
    update( ){
        $(this.domElement).text(this.value);
    }
    increment( ){
        this.value++;
        this.update();
    }
    handleClick( ){
        this.callback(this);
        $(this.domElement).on('click', this.increment());
    }

}
