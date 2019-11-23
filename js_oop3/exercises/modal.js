
//JS-Docs for the "Modal" class methods

/*
**	constructor **
* The constructor will:
* 	- Contain Four properties:
* 	  - This.shadow - Which is the modal's DOM element "shadow".
*     - This.body - Which is the modal's main body element.
*     - This.message - Which will contain the DOM element with the modal message.
*     - This.onClose - Which will be used by the tester to hold a callback function.
*       - The initial value of this.onClose will be null.
** Specifications **
*   - Takes three parameters:
*     - shadowElement - which will receive a DOM element as an argument when the class is instantiated.
*     - bodyElement - which will receive a DOM element as an argument when the class is instantiated.
*     - messageElement - which will receive a DOM element as an argument when the class is instantiated.
*   - Within the constructor:
*     - Create the four properties listed above.
*     - Assign the values contained in the parameters into their associated properties.
** Considerations **
*   - Why does the modal need access to DOM element references?
*/
//

/*
**	init **
* This method will:
* 	- Call the modal's hide method.
*   - Remove all current click handlers from the element stored in the this.shadow property.
*   - Add a click handler to the element stored in the this.shadow property which will call the
*     callback function stored in the this.onClose property on click.
*   - Add another click handler to the same element, and give it the modal's hide method as a
*     callback. (Don't forget to bind "this" on the hide callback)
** Specifications **
*   - Takes no parameters:
** Considerations **
*   - Why does the "hide" callback need to have "this" bound?
*/
// this.hide();
//
//

/*
**	show **
* This method will:
* 	- Use the jQuery .show() method to show the shadow and body elements.
** Specifications **
*   - Takes no parameters:
** Considerations **
*   - How can the .show() method be used on the correct DOM elements?
*/
//

/*
**	updateContents **
* This method will:
* 	- Update the text in the message element.
** Specifications **
*   - Takes one parameter:
*     - modalMessage - which will be given a string as an argument.
** Considerations **
*   - What jQuery method is useful for setting the text in elements?
*/
//.text()

/*
**	hide **
* This method will:
* 	- Use the jQuery .hide() method to hide the shadow and body elements.
** Specifications **
*   - Takes no parameters:
** Considerations **
*   - How can the .hide() method be used on the correct DOM elements?
*/




class Modal{

	constructor(shadowElement, bodyElement, messageElement){
		this.shadow = $(shadowElement);
		this.body = $(bodyElement);
		this.message = $(messageElement);
		this.onClose = null;
		this.hide = this.hide.bind(this);
	}

	init(){
		this.hide();
		this.shadow.off('click');
		this.shadow.on('click', this.onClose);
		this.shadow.on('click', this.hide);
	}

	show(){
		this.shadow.show();
		this.body.show();
	}

	updateContents(modalMessage){
		this.message.text(modalMessage);
	}

	hide(){
		this.shadow.hide();
		this.body.hide();
	}

}
