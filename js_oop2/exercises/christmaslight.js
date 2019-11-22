
//JS-Docs for the "ChristmasLight" class methods


/*
**	constructor **
* The constructor will:
* 	- Contain three properties:
* 	  - this.colorArray - which will contain an array of colors for the christmas lights.
*     - this.domElement - which will store a jQuery reference for the DOM element you will be creating
*       in the render() method. Initial value will be null.
*     - this.currentColor - Which will store the index of the color in the color array which is currently
*       being used. Initial value will be zero.
** Specifications **
*   - Takes one parameter:
*     - colorArray - which will be used to set the initial value of the counter.
*   - Within the constructor:
*     - Create the property above, and store the appropriate value in it.
*     - Bind "this" for the this.handleClick method.
*       - Remember from before, You have to bind "this" for this method because it will be called by an event handler,
*         and if you don't bind "this", "this" will no longer refer to the "ChristmasLight" object.
*/

/*
**	render **
* This method will:
* 	- Create a Div element.
*   - Add a class of "christmasLight" to the Div element.
*   - Add a event handler to the div which calls the handleClick method on click.
*   - Store the created div in the constructor.
*   - Call the displayColor method in order to update the DOM counter text.
*     - This will be very similar to the update method you have built before.
*   - Return the created DOM element.
** Specifications **
*   - Takes no parameters.
*/

/*
**	displayColor **
* This method will:
* 	- update the background color to match the stored colorsArray at the currently stored currentColor property value.
** Specifications **
*   - Takes no parameters.
** Considerations **
*   - How do you update the background color CSS on the currently stored DOM element?
*/

/*
**	cycleColor **
* This method will:
* 	- Update the currentColor property in the constructor to reference the next index in the colorsArray.
** Specifications **
*   - Takes no parameters.
** Within the Method **
*   - Increments the currentColor property if doing so will not extend beyond the last index of the
*     stored colorsArray.
*   - If incrementing the currentColor property will extend it beyond the last index of the colorsArray,
*     sets the currentColor property to zero.
*   - Updates the background color of the DOM element to match the updated color based on the currentColor property.
** Considerations **
*   - What method would be useful in completing this method's functionality?
*/

/*
**	handleClick **
* This method will:
* 	- Call the cycleColor method when the DOM element is clicked.
** Specifications **
*   - Takes no parameters.
** Within the Method **
*   - Calls the cycleColor method every time the DOM is clicked.
** Considerations **
*   - This is a good time to remind yourself about why you had to bind
*     "this" for this method if you haven't done so several times already!
*/

class ChristmasLight{
    constructor(colorArray){
        this.colorArray = colorArray;
        this.domElement = null;
        this.currentcolor = 0;
        this.handleClick = this.handleClick.bind(this);
    }
    render( ){
        this.domElement = $("<div>").addClass('christmasLight').on('click', this.handleClick);
        this.displayColor();
            return this.domElement;
    }
    displayColor( ){
        $(this.domElement).css('background-color', this.colorArray[this.currentcolor]);
    }
    cycleColor( ){
        this.currentcolor++
        if(this.currentcolor === this.colorArray.length){
            this.currentcolor = 0;
        }
        this.displayColor();
    }
    handleClick( ){
        this.cycleColor();
    }

}
