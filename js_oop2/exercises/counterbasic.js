//JS-Docs for the "CounterBasic" class methods


/*
**	constructor **
* The constructor will:
* 	- Contain two properties:
* 	  - this.value - which will contain the current value to display on the counter display.
*     - this.domElement - which will store a jQuery reference for the DOM element passed in as
*       an argument to the constructor. This reference will be used for text updates and click
*       functionality.
** Specifications **
*   - Takes a two parameters:
*     - number - which will be used to set the initial value of the counter.
*     - domElem - which will receive a DOM element.
*   - Within the constructor:
*     - Create the two properties above, and store the appropriate values in them.
*     - Bind "this" for the this.handleClick method.
*       - You have to bind "this" for this method because it will be called by an event handler,
*         and if you don't bind "this", "this" will no longer refer to the "CounterBasic" object.
*       - Make sure you read over the information on this in the lfzprototypes instructions!
*     - Call the this.addClickHandler() method.
*       - This method will be the next method you build. It will be used to apply a click
*         handler to the stored DOM element for click functionality.
*     - Call the this.update() method.
*       - This method will be the third one you build. It will be used to update the text
*         for the counter on the DOM.
*/

/*
**	addClickHandler **
* This method will:
* 	- Add an event handler to the DOM element which was passed in as an argument to the constructor.
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
** Within the Method **
*   - Targets the domElement currently stored in the constructor and updates its text to reflect the
*     value currently stored in the constructor.
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
** Considerations **
*   - Is there a method you have to update the text on the DOM?
*     - If so, how would you use it to update the counter text on the DOM.
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
*/

class CounterBasic{
    constructor(number, domElem){
        this.number = number;
        this.domElement = domElem;
        this.handleClick = this.handleClick.bind(this);
        this.addClickHandler();
        this.update();
    }
    addClickHandler(){
        $(this.domElement).on("click", this.handleClick);
    }
    update( ){
        $(this.domElement).text(this.number);
    }
    increment( ){
        this.number++;
        this.update();
    }
    handleClick( ){
        $(this.domElement).on("click", this.increment());
    }

}
