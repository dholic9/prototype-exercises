var shadow;
var displayModal;
var modalContents;
var minimizeButton;

function handleError(className = null, filePath = null) {
	return function (error, method = null) {
		if (error instanceof TestError) {
			return error.displayError();
		}

		const userMessage = 'This is most likely an error caused by your code';

		if (className) {
			const testError = new TestError(className, method, `${error.message} | ${userMessage}`, error, filePath);

			return testError.displayError();
		}

		displayMessage([userMessage, error]);
	}
}




function displayMessage(message, type='error'){
	showModal();
	if(Array.isArray(message)){
		var wholeMessage = message.join(': ');
		var modalMessage = message[1];
	} else {
		wholeMessage = modalMessage = message;
	}



	if(modalMessage instanceof Error){
		// debugger;
		// var stackOutput = {};
		// Error.captureStackTrace(stackOutput, modalMessage);
		// var lineNumber = /tests\.js:(\d+)/.exec(stackOutput.stack)[1];
		// var preppedMessage = `tests.js: line ${lineNumber} ${modalMessage}`;
		console.error(modalMessage);
		preppedMessage = modalMessage;
		var advisor = $("<div>").text('CHECK CONSOLE FOR MORE INFO.').addClass('errorMessage')
	} else {
		preppedMessage = modalMessage;
		console.log(wholeMessage);
		advisor = '';
	}
	var element = $("<div>").text(preppedMessage).addClass(type + ' errorMessage');

	$("#errorArea").prepend(element, advisor);
}

function hasMethod(object, method){
	const name = object.constructor.name;

	if (object[method] === undefined) {
		return `Missing <code>${method}</code> method in <code>${name}</code>.`;
	}

	if(typeof object[method] !== 'function') {
		return `<code>${name}</code> has a property named <code>${method}</code> but it is not a method. Expected <code>${name}.${method}</code> to be a method.`;
	}

	return true;
}

function testMethod( object, method ){
	try{
		if(object[method] === undefined){
			throw( new Error('missing method '+method+' in ' + object.constructor.name));
		}
	}
	catch (error){
		displayMessage(error);
		return false;
	}
}

function testEventHandler( element, eventType, methodName, checkIfBound = false){
    // testSGT.addEventHandlers();
    element = $(element)
    let eventData = $._data( element[0], "events" ) || null;
    let isBound = false;
    let addIndex;
    if(eventData){
        for (addIndex = 0; addIndex < eventData[eventType].length; addIndex++) {
            if (eventData.click[addIndex].handler.name.indexOf(methodName) !== -1) {
                if (eventData.click[addIndex].handler.name.indexOf('bound') !== -1){
                    isBound = true;
                }
                break;
            }
        }
    }

    if ( eventData === null || addIndex === null || addIndex === eventData[eventType].length){
        const elementInfo = getElementIdentifier( element );
        return `Could not find <code>${methodName}</code> as a ${eventType} handler on the ${elementInfo.tag}${elementInfo.id}${elementInfo.class}`;
    }
    if( !isBound && checkIfBound){
        return `<code>${methodName}</code> is not bound!`;
    }
    return true;
}

function getElementIdentifier( element ){
    element = $(element);
    return {
        class: element.attr('class') ? '.'+element.attr('class') : '',
        id: element.attr('id') ? '#'+element.attr('id') : '',
        tag: element.prop('tagName')
    }
}

function intiateTestDisplay(){
	shadow = $("<div>",{
		css: {
			'background-color': 'rgba(0,0,0,.4)',
			position: 'fixed',
			left: 0,
			top: 0,
			height: '100vh',
			width: '100vw',
		}
	})
	shadow.hide();
	displayModal = $("<div>",{
		css: {

		},
		id:'errorArea',
	})
	modalContents = $("<div>",{
		class: 'modalContainer'
	})
	modalContents.append(displayModal);

	runTestButton = $("<div>",{
		text: 'RUN',
		'class': 'runTestButton',
		on: {
			click: startTests
		}
	})
	minimizeButton = $("<div>",{
		text: '^',
		css: {
		},
		'class': 'minimizeButton',
		on: {
			click: hideModal
		}
	})
	modalContents.append(runTestButton);
	//modalContainer.hide();
	$('body').append( minimizeButton, modalContents );
	showModal();
}
function showModal(){
	minimizeButton.appendTo(modalContents);
	modalContents.show();
	minimizeButton.text('^').off('click', showModal).on('click', hideModal)
	//shadow.show();
}
function hideModal(){
	minimizeButton.appendTo('body');
	minimizeButton.text('v').off('click', hideModal).on('click', showModal)
	modalContents.hide();
	//shadow.hide();
}


class TestError extends Error {
	constructor(className, method, message, error = null, filePath = null) {
		super(message);

		this.filePath = filePath;
		this.method = method;
		this.name = className;
		this.originalError = error;
	}

	get lineNumber(){
		if(this.originalError && this.filePath){
			const foundError = RegExp(`${this.escapedFilePath}:(\\d+)`)
				.exec(this.originalError.stack);

			return foundError && foundError[1];
		}

		return null;
	}

	get escapedFilePath(){
		if(this.filePath){
			return this.filePath.replace(/(\/|\.|\-)/g, (char) => '\\' + char);
		}

		return null;
	}

	displayError() {
		const html = `<strong>${this.name}${this.method ? `.${this.method}()` : '' } Failed Test:</strong> ${this.message}`;

		const element = $('<div>', { class: 'error errorMessage', html });
		let additionalInfo = null;

		if(this.lineNumber){
			const text = `Error occurred in ${this.filePath} on line: ${this.lineNumber}`;
			additionalInfo = $('<div>', { class: 'warning errorMessage', text});
		}

		$("#errorArea").prepend(element, additionalInfo);

		console.error(this.originalError || this);
	}
}

class SectionError {
	constructor(className) {
		this.name = className;
	}

	throw(testMethod, errorMessage) {
		throw new TestError(this.name, testMethod, errorMessage);
	}
}

function testForProps( object, testCases ){
    const availableProps = Object.values( object );
    
    const errors = [];
    let propIndex = 0;
    while( propIndex< availableProps.length){
        let index = testCases.length-1;
        while( index >= 0){
            let thisTest = testCases[index].test;
            if(thisTest( availableProps[propIndex])){
                testCases.splice( index, 1);
                break
            }
            index--;
        }
        propIndex++;
    }
    if(testCases.length){
		const results = testCases.map( data => data.error + '\n'); 
        return results
    }
    return []
}

