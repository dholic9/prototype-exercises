function startTests(){
	$(".errorMessage").remove();
	$('#displayArea').html('');
	var testFunctions = ['counterBasicTests', 'counterMediumTests', 'counterCallbackTests', 'nameCapperTests', 'christmasLightTests'];
	var i = 0;
	while( i<testFunctions.length){
		if (!window[testFunctions[i]]())
			return;
		i++;
	}
	displayMessage(' All tests passed! ', 'header');
}

function counterBasicTests(){
	const fileName = 'exercises/counterbasic.js';
	const handleStudentError = handleError('counterbasic', fileName);
	const studentError = new SectionError('counterbasic');

	try {
		displayMessage(`--Testing - CounterBasic | ${fileName}`, 'header');
		if(typeof CounterBasic === 'undefined'){
			throw studentError.throw(null, `CounterBasic object does not exist. Check ${fileName} and make sure the object is still defined and there are no syntax errors in the console.`);
        }
        displayMessage(`CounterBasic object Exists`, 'message');
        try{
            const method = 'Constructor'
            if( CounterBasic.length !== 2){
                studentError.throw(method, `<code>Constructor</code> should expect 2 arguments, a <code>number</code> and a <code>css selector string</code>, it expected ${CounterBasic.length} arguments`);
            }
        } catch( error ){
			return handleStudentError(error, 'constructor');
		}
        const basicCounter = new CounterBasic(-20, "#counter1");

        try{
            const method = 'Constructor';

            const valueTests = [
                {passed: -20, requiredValue: -20, test: ( value ) => value === -20, error: 'missing initial value' },
                {passed: '#counter1', requiredValue: 'id counter1 or a dom element pointing to #counter1 ', test: ( value ) => (value === '#counter1' || ( $(value).attr && $(value).attr('id') === 'counter1')), error: 'missing dom element to attach to'}
            ]
            const testResult = testForProps( basicCounter, valueTests );
            if(testResult.length){
                studentError.throw(method, `<code>Constructor</code> should have stored parameters in the object, but could not find some.  Missing <code>${testResult[0]}</code>`);
            }
        } catch( error ){
			return handleStudentError(error, 'constructor');
		}
		displayMessage(`CounterBasic constructor passed all tests`, 'message');
		try{
            const method = 'addClickHandler';
			const hasMethodCheck = hasMethod(basicCounter, method);

			displayMessage(`--Testing - CounterBasic.${method}() | ${fileName}`, 'header');

			if( hasMethodCheck !== true){
				studentError.throw(method, hasMethodCheck);
			}

            if( basicCounter.addClickHandler.length!==0){
                studentError.throw(method, `Method should not take any parameters, it took ${basicCounter.addClickHandler.length}`)
            }
            const eventTest = testEventHandler( '#counter1', 'click', 'handleClick', true);
            if( eventTest !== true){
				studentError.throw(method, eventTest);
            }
			displayMessage(`${method} method tests passed`, 'message');
		} catch( error ){
			return handleStudentError(error, 'addClickHandler');
		}

        try{
            const method = 'update';
			const hasMethodCheck = hasMethod(basicCounter, method);
			if(hasMethodCheck !== true){
				studentError.throw(method, hasMethodCheck);
			}
            if(basicCounter.update.length){
                studentError.throw(method, `<code>${method}</code> should have had no arguments, but had `+ basicCounter.update.length);
			}
			const element = $("#counter1");
			if( element.text() != '-20'){
                studentError.throw(method, `<code>${method}</code> should have updated the element's text to <code>-20</code>, but it was ${element.text()}`);
			}
        } catch( error ){
			return handleStudentError(error, 'update');
		}		
        try{
            const method = 'increment';
			const hasMethodCheck = hasMethod(basicCounter, method);
			if(hasMethodCheck !== true){
				studentError.throw(method, hasMethodCheck);
			}
            if(basicCounter.increment.length){
                studentError.throw(method, `<code>${method}</code> should have had no arguments, but had `+ basicCounter.increment.length);
			}
			basicCounter.increment();
			const element = $("#counter1");
			if( element.text() != '-19'){
                studentError.throw(method, `<code>${method}</code> should have updated the element's text to <code>-19</code>, but it was ${element.text()}`);
			}
        } catch( error ){
			return handleStudentError(error, 'update');
		}			
        try{
            const method = 'handleClick';
			const hasMethodCheck = hasMethod(basicCounter, method);
			if(hasMethodCheck !== true){
				studentError.throw(method, hasMethodCheck);
			}
            if(basicCounter.increment.length){
                studentError.throw(method, `<code>${method}</code> should have had no arguments, but had `+ basicCounter.increment.length);
			}
			basicCounter.handleClick();
			const element = $("#counter1");
			if( element.text() != '-18'){
                studentError.throw(method, `<code>${method}</code> should have updated the element's text to <code>-18</code>, but it was ${element.text()}`);
			}
			$("#counter1").click();
			if( element.text() != '-17'){
				const elementInfo = getElementIdentifier( element );
                studentError.throw(method, `<code>${elementInfo.tag}${elementInfo.id}${elementInfo.class}</code> being clicked should have it's text to <code>-17</code>, but it was ${element.text()}`);
			}
        } catch( error ){
			return handleStudentError(error, 'handleClick');
		}		
        displayMessage(`CounterBasic passed all tests!`, 'green');

		return true;
	} catch(error) {
		handleStudentError(error);
	}
}

function counterMediumTests(){
	const fileName = 'exercises/countermedium.js';
	const handleStudentError = handleError('countermedium', fileName);
	const studentError = new SectionError('countermedium');

	try {
		displayMessage(`--Testing - CounterMedium | ${fileName}`, 'header');
		if(typeof CounterMedium === 'undefined'){
			throw studentError.throw(null, `CounterMedium object does not exist. Check ${fileName} and make sure the object is still defined and there are no syntax errors in the console.`);
        }
        displayMessage(`CounterMedium object Exists`, 'message');
        try{
            const method = 'Constructor'
            if( CounterMedium.length !== 1){
                studentError.throw(method, `<code>Constructor</code> should expect 1 argument, a <code>number</code>, it expected ${CounterBasic.length} arguments`);
            }
        } catch( error ){
			return handleStudentError(error, 'constructor');
		}
        const mediumCounter = new CounterMedium(5);

        try{
            const method = 'Constructor';

            const valueTests = [
                {passed: 5, requiredValue: 5, test: ( value ) => value === 5, error: 'missing initial value' },
            ]
            const testResult = testForProps( mediumCounter, valueTests );
            if(testResult.length){
                studentError.throw(method, `<code>Constructor</code> should have stored parameters in the object, but could not find some.  Missing <code>${testResult[0]}</code>`);
            }
        } catch( error ){
			return handleStudentError(error, 'constructor');
		}
		displayMessage(`CounterBasic constructor passed all tests`, 'message');

        try{
            const method = 'render';
			const hasMethodCheck = hasMethod(mediumCounter, method);
			if(hasMethodCheck !== true){
				studentError.throw(method, hasMethodCheck);
			}
			var c2Dom = mediumCounter.render();
			if($(c2Dom).prop('tagName') !== 'DIV'){
				studentError.throw(method, `should have returned a <code>DIV</code> dom element, but returned a ${c2Dom}`);
			}
			if(!$(c2Dom).hasClass('counter')){
				studentError.throw(method, `should have had a class of <code>counter</code> but it did not`);
			}
            const valueTests = [
                {passed: '<div class="counter"', requiredValue: c2Dom, test: ( value ) => value === c2Dom, error: 'the stored dom element' },
			]
            const testResult = testForProps( mediumCounter, valueTests );
            if(testResult.length){
                studentError.throw(method, `should have stored a property of the element it just made, but does not appear to have done so`);
            }
			$("#counter2Area").append( c2Dom );
        } catch( error ){
			return handleStudentError(error, 'constructor');
		}
		displayMessage(`CounterBasic render passed all tests`, 'message');

		try{
            const method = 'addClickHandler';
			const hasMethodCheck = hasMethod(mediumCounter, method);

			displayMessage(`--Testing - CounterMedium.${method}() | ${fileName}`, 'header');

			if( hasMethodCheck !== true){
				studentError.throw(method, hasMethodCheck);
			}

            if( mediumCounter.addClickHandler.length!==0){
                studentError.throw(method, `Method should not take any parameters, it took ${mediumCounter.addClickHandler.length}`)
			}
			mediumCounter.addClickHandler();
            const eventTest = testEventHandler( '#counter2Area > .counter', 'click', 'handleClick', true);
            if( eventTest !== true){
				studentError.throw(method, eventTest);
            }
			displayMessage(`${method} method tests passed`, 'message');
		} catch( error ){
			return handleStudentError(error, 'addClickHandler');
		}

        try{
            const method = 'update';
			const hasMethodCheck = hasMethod(mediumCounter, method);
			if(hasMethodCheck !== true){
				studentError.throw(method, hasMethodCheck);
			}
            if(mediumCounter.update.length){
                studentError.throw(method, `<code>${method}</code> should have had no arguments, but had `+ mediumCounter.update.length);
			}
			const element = $('#counter2Area > .counter');
			if( element.text() != 5){
                studentError.throw(method, `<code>${method}</code> should have updated the element's text to <code>5</code>, but it was ${element.text()}`);
			}
        } catch( error ){
			return handleStudentError(error, 'update');
		}		
        try{
            const method = 'increment';
			const hasMethodCheck = hasMethod(mediumCounter, method);
			if(hasMethodCheck !== true){
				studentError.throw(method, hasMethodCheck);
			}
            if(mediumCounter.increment.length){
                studentError.throw(method, `<code>${method}</code> should have had no arguments, but had `+ mediumCounter.increment.length);
			}
			mediumCounter.increment();
			const element = $('#counter2Area > .counter');
			if( element.text() != '6'){
                studentError.throw(method, `<code>${method}</code> should have updated the element's text to <code>6</code>, but it was ${element.text()}`);
			}
        } catch( error ){
			return handleStudentError(error, 'update');
		}			
        try{
            const method = 'handleClick';
			const hasMethodCheck = hasMethod(mediumCounter, method);
			if(hasMethodCheck !== true){
				studentError.throw(method, hasMethodCheck);
			}
            if(mediumCounter.increment.length){
                studentError.throw(method, `<code>${method}</code> should have had no arguments, but had `+ basicCounter.increment.length);
			}
			mediumCounter.handleClick();
			const element = $('#counter2Area > .counter');
			if( element.text() != '7'){
                studentError.throw(method, `<code>${method}</code> should have updated the element's text to <code>7</code>, but it was ${element.text()}`);
			}
			$('#counter2Area > .counter').click();
			if( element.text() != '8'){
				const elementInfo = getElementIdentifier( element );
                studentError.throw(method, `<code>${elementInfo.tag}${elementInfo.id}${elementInfo.class}</code> being clicked should have it's text to <code>8</code>, but it was ${element.text()}`);
			}
        } catch( error ){
			return handleStudentError(error, 'handleClick');
		}		
        displayMessage(`CounterMedium passed all tests!`, 'green');

		return true;
	} catch(error) {
		handleStudentError(error);
	}
}

function counterCallbackTests(){
	const fileName = 'exercises/countercallback.js';
	const handleStudentError = handleError('callbackCounter', fileName);
	const studentError = new SectionError('callbackCounter');
	let wasCalled = false;
	let testValue = null;

	function testFunction(val){
		wasCalled = true;
		testValue = val;
	}
	try {
		displayMessage(`--Testing - CounterCallback | ${fileName}`, 'header');
		if(typeof CounterCallback === 'undefined'){
			throw studentError.throw(null, `CounterCallback object does not exist. Check ${fileName} and make sure the object is still defined and there are no syntax errors in the console.`);
        }
        displayMessage(`CounterCallback object Exists`, 'message');
        try{
            const method = 'Constructor'
            if( CounterCallback.length !== 2){
                studentError.throw(method, `<code>Constructor</code> should expect 2 arguments, a <code>number</code> and a <code>function</code>, it expected ${CounterBasic.length} arguments`);
            }
        } catch( error ){
			return handleStudentError(error, 'constructor');
		}
        const callbackCounter = new CounterCallback(100, testFunction);

        try{
            const method = 'Constructor';

            const valueTests = [
				{passed: 100, requiredValue: 100, test: ( value ) => value === 100, error: 'the initial value' },
				{passed: testFunction, requiredValue: testFunction, test: ( value ) => value === testFunction, error: 'the callback function' }
			]
            const testResult = testForProps( callbackCounter, valueTests );
            if(testResult.length){
                studentError.throw(method, `<code>Constructor</code> should have stored parameters in the object, but could not find some.  Missing <code>${testResult[0]}</code>`);
            }
        } catch( error ){
			return handleStudentError(error, 'constructor');
		}
		displayMessage(`CounterBasic constructor passed all tests`, 'message');
        try{
            const method = 'getValue';

			const hasMethodCheck = hasMethod(callbackCounter, method);
			if(hasMethodCheck !== true){
				studentError.throw(method, hasMethodCheck);
			}
			const test = callbackCounter.getValue();
			if(test!==100){
				studentError.throw(method, `getValue was supposed to return the object's current value of <code>100</code>, but instead returned <code>${test}</code>`);
			}
        } catch( error ){
			return handleStudentError(error, 'constructor');
		}
        try{
            const method = 'render';
			const hasMethodCheck = hasMethod(callbackCounter, method);
			if(hasMethodCheck !== true){
				studentError.throw(method, hasMethodCheck);
			}
			var c2Dom = callbackCounter.render();
			if($(c2Dom).prop('tagName') !== 'DIV'){
				studentError.throw(method, `should have returned a <code>DIV</code> dom element, but returned a ${c2Dom}`);
			}
			if(!$(c2Dom).hasClass('counter')){
				studentError.throw(method, `should have had a class of <code>counter</code> but it did not`);
			}
            const valueTests = [
                {passed: '<div class="counter"', requiredValue: c2Dom, test: ( value ) => value === c2Dom, error: 'the stored dom element' },
			]
            const testResult = testForProps( callbackCounter, valueTests );
            if(testResult.length){
                studentError.throw(method, `should have stored a property of the element it just made, but does not appear to have done so`);
            }
			var c2Dom = callbackCounter.render();
			$("#counter3Area").append( c2Dom );
        } catch( error ){
			return handleStudentError(error, 'constructor');
		}
		displayMessage(`CounterBasic render passed all tests`, 'message');

		try{
            const method = 'addClickHandler';
			const hasMethodCheck = hasMethod(callbackCounter, method);

			displayMessage(`--Testing - CounterCallback.${method}() | ${fileName}`, 'header');

			if( hasMethodCheck !== true){
				studentError.throw(method, hasMethodCheck);
			}

            if( callbackCounter.addClickHandler.length!==0){
                studentError.throw(method, `Method should not take any parameters, it took ${callbackCounter.addClickHandler.length}`)
			}
			callbackCounter.addClickHandler();
            const eventTest = testEventHandler( '#counter2Area > .counter', 'click', 'handleClick', true);
            if( eventTest !== true){
				studentError.throw(method, eventTest);
            }
			displayMessage(`${method} method tests passed`, 'message');
		} catch( error ){
			return handleStudentError(error, 'addClickHandler');
		}

        try{
            const method = 'update';
			const hasMethodCheck = hasMethod(callbackCounter, method);
			if(hasMethodCheck !== true){
				studentError.throw(method, hasMethodCheck);
			}
            if(callbackCounter.update.length){
                studentError.throw(method, `<code>${method}</code> should have had no arguments, but had `+ callbackCounter.update.length);
			}
			const element = $('#counter3Area > .counter');
			if( element.text() != 100){
                studentError.throw(method, `<code>${method}</code> should have updated the element's text to <code>100</code>, but it was ${element.text()}`);
			}
			displayMessage(`${method} method tests passed`, 'message');

        } catch( error ){
			return handleStudentError(error, 'update');
		}		
        try{
            const method = 'increment';
			const hasMethodCheck = hasMethod(callbackCounter, method);
			if(hasMethodCheck !== true){
				studentError.throw(method, hasMethodCheck);
			}
            if(callbackCounter.increment.length){
                studentError.throw(method, `<code>${method}</code> should have had no arguments, but had `+ callbackCounter.increment.length);
			}
			callbackCounter.increment();
			const element = $('#counter3Area > .counter');
			if( element.text() != 101){
                studentError.throw(method, `<code>${method}</code> should have updated the element's text to <code>101</code>, but it was ${element.text()}`);
			}
			displayMessage(`${method} method tests passed`, 'message');

        } catch( error ){
			return handleStudentError(error, 'update');
		}			
        try{
            const method = 'handleClick';
			const hasMethodCheck = hasMethod(callbackCounter, method);
			if(hasMethodCheck !== true){
				studentError.throw(method, hasMethodCheck);
			}
            if(callbackCounter.increment.length){
                studentError.throw(method, `<code>${method}</code> should have had no arguments, but had `+ basicCounter.increment.length);
			}
			callbackCounter.handleClick();
			const element = $('#counter3Area > .counter');
			if( element.text() != 102){
                studentError.throw(method, `<code>${method}</code> should have updated the element's text to <code>102</code>, but it was ${element.text()}`);
			}
			if(wasCalled!==true){
                studentError.throw(method, `<code>${method}</code> should have called a <code>function</code> that we provided, but it did not.  Did you store the <code>callback</code> you got in the <code>constructor</code>?  Did you call that <code>callback function</code> in <code>handleClick</code>`);
			}
			if(testValue!==callbackCounter){
                studentError.throw(method, `<code>${method}</code> should have passed its <code>object</code> back to the <code>callback function</code> as an <code>argument</code>.  Instead, we got <code>${testValue}</code>`);
			}
			$('#counter3Area > .counter').click();
			if( element.text() != 103){
				const elementInfo = getElementIdentifier( element );
                studentError.throw(method, `<code>${elementInfo.tag}${elementInfo.id}${elementInfo.class}</code> being clicked should have it's text to <code>103</code>, but it was ${element.text()}`);
			}
			displayMessage(`${method} method tests passed`, 'message');

        } catch( error ){
			return handleStudentError(error, 'handleClick');
		}		
        displayMessage(`CounterCallback passed all tests!`, 'green');

		return true;
	} catch(error) {
		handleStudentError(error);
	}
}


function nameCapperTests(){
	const fileName = 'exercises/namecapper.js';
	const handleStudentError = handleError('NameCapper', fileName);
	const studentError = new SectionError('NameCapper');

	try {
		displayMessage(`--Testing - NameCapper | ${fileName}`, 'header');
		if(typeof NameCapper === 'undefined'){
			throw studentError.throw(null, `NameCapepr object does not exist. Check ${fileName} and make sure the object is still defined and there are no syntax errors in the console.`);
        }
        displayMessage(`NameCapper object Exists`, 'message');
        try{
            const method = 'Constructor'
            if( NameCapper.length !== 1){
                studentError.throw(method, `<code>${method}</code> should expect 1 argument1, a <code>string</code>, it expected ${CounterBasic.length} arguments`);
            }
        } catch( error ){
			return handleStudentError(error, 'render not found');
		}
        const capper = new NameCapper('doe');

        try{
            const method = 'Constructor';

            const valueTests = [
				{passed: 'doe', requiredValue: 'doe', test: ( value ) => value === 'doe', error: 'the initial name value' },
			]
            const testResult = testForProps( capper, valueTests );
            if(testResult.length){
                studentError.throw(method, `<code>Constructor</code> should have stored parameters in the object, but could not find some.  Missing <code>${testResult[0]}</code>`);
			}
			displayMessage(`${method} method tests passed`, 'message');
        } catch( error ){
			return handleStudentError(error, 'constructor');
		}
		
		try{
			const method = 'render';
			const hasMethodCheck = hasMethod(capper, method);
			if(hasMethodCheck !== true){
				studentError.throw(method, hasMethodCheck);
			}
			var dom = capper.render();
			if($(dom).prop('tagName') !== 'DIV'){
				studentError.throw(method, `should have returned a <code>DIV</code> dom element, but returned a ${dom}`);
			}
			if(!$(dom).hasClass('nameHolder')){
				studentError.throw(method, `should have return an element that had a class of <code>nameHolder</code> but it did not`);
			}
			const valueTests = [
				{passed: '<div class="counter"', requiredValue: dom, test: ( value ) => value === dom, error: 'the stored dom element' },
			]
			const testResult = testForProps( capper, valueTests );
			if(testResult.length){
				studentError.throw(method, `should have stored a property of the element it just made, but does not appear to have done so`);
			}
			$("#name1Area").append( dom );
			displayMessage(`${method} method tests passed`, 'message');

		} catch( error ){
			return handleStudentError(error, 'constructor');
		}
		try{
			const method = 'update';
			const hasMethodCheck = hasMethod(capper, method);
			if(hasMethodCheck !== true){
				studentError.throw(method, hasMethodCheck);
			}
			if(capper.update.length !== 0){
				studentError.throw(method, ` update should not have any arguments, but expects ${capper.update.length}`);
			}
			capper.update();
			const targetDom = $("#name1Area > .nameHolder");
			const domText = targetDom.text();
			if( domText !== 'doe'){
				studentError.throw(method, `should have updated the dom element to have text of <code>doe</code>, but had <code>${domText}</code>`);
			}
			displayMessage(`${method} method tests passed`, 'message');
		} catch( error ){
			return handleStudentError(error, 'update');
		}
		try{
			const method = 'getName';
			const hasMethodCheck = hasMethod(capper, method);
			if(hasMethodCheck !== true){
				studentError.throw(method, hasMethodCheck);
			}
			if(capper[method].length !== 0){
				studentError.throw(method, ` should not have any arguments, but expects ${capper.update.length}`);
			}
			const test = capper.getName();
			if(test!=='doe'){
				studentError.throw(method, ` should have returned 'doe' but returned ${test}`);
			}
			displayMessage(`${method} method tests passed`, 'message');
		} catch( error ){
			return handleStudentError(error, 'getName');
		}
		try{
			const method = 'upperCaseName';
			const hasMethodCheck = hasMethod(capper, method);
			if(hasMethodCheck !== true){
				studentError.throw(method, hasMethodCheck);
			}
			if(capper[method].length !== 0){
				studentError.throw(method, ` should not have any arguments, but expects ${capper.update.length}`);
			}
			const test = capper.upperCaseName();
			if(test!==undefined){
                studentError.throw(method, ` should not have returned anything, but returend ${test}`);
			}
            const valueTests = [
				{passed: 'DOE', requiredValue: 'DOE', test: ( value ) => value === 'DOE', error: 'the name capitalized' },
			]
            const testResult = testForProps( capper, valueTests );
            if(testResult.length){
                studentError.throw(method, `<code>${method}</code> should have 'DOE' as a stored parameters in the object, but could not find some.  Missing <code>${testResult[0]}</code>`);
			}
			displayMessage(`${method} method tests passed`, 'message');
		} catch( error ){
			return handleStudentError(error, 'getName');
		}
		try{
			const method = 'lowerCaseName';
			const hasMethodCheck = hasMethod(capper, method);
			if(hasMethodCheck !== true){
				studentError.throw(method, hasMethodCheck);
			}
			if(capper[method].length !== 0){
				studentError.throw(method, ` should not have any arguments, but expects ${capper.update.length}`);
			}
			const test = capper.lowerCaseName();
			if(test!==undefined){
                studentError.throw(method, ` should not have returned anything, but returend ${test}`);
			}
            const valueTests = [
				{passed: 'doe', requiredValue: 'doe', test: ( value ) => value === 'doe', error: 'the name lowercased' },
			]
            const testResult = testForProps( capper, valueTests );
            if(testResult.length){
                studentError.throw(method, `<code>${method}</code> should have 'doe' as a stored parameters in the object, but could not find some.  Missing <code>${testResult[0]}</code>`);
			}
			displayMessage(`${method} method tests passed`, 'message');
		} catch( error ){
			return handleStudentError(error, 'getName');
		}
		try{
			const method = 'setName';
			const hasMethodCheck = hasMethod(capper, method);
			if(hasMethodCheck !== true){
				studentError.throw(method, hasMethodCheck);
			}
			if(capper[method].length !== 1){
				studentError.throw(method, ` should have 1 argument, a <code>string</code> for the new name, but expects ${capper.update.length}`);
			}
			const result = capper.setName('teST');
			if(result!==true){
                studentError.throw(method, ` should have returned <code>true</code>, but returend <code>${result}</code>`);
			}
            const valueTests = [
				{passed: 'test', requiredValue: 'test', test: ( value ) => value === 'test', error: 'the changed name "teST" lowercased to "test"' },
			]
            const testResult = testForProps( capper, valueTests );
            if(testResult.length){
                studentError.throw(method, `<code>${method}</code> should have 'doe' as a stored parameters in the object, but could not find it.  Missing <code>${testResult[0]}</code>`);
			}
			displayMessage(`${method} method tests passed`, 'message');
		} catch( error ){
			return handleStudentError(error, 'getName');
		}
		try{
			const method = 'handleClick';
			const hasMethodCheck = hasMethod(capper, method);
			if(hasMethodCheck !== true){
				studentError.throw(method, hasMethodCheck);
			}
			if(capper[method].length !== 0){
				studentError.throw(method, ` should have 0 arguments, but expects ${capper.update.length}`);
			}
			capper.handleClick();
			const targetDom = $("#name1Area > .nameHolder");
			let domText = targetDom.text();
			if( domText !== 'TEST'){
				studentError.throw(method, `should have updated the dom element to have text of <code>TEST</code>, but had <code>${domText}</code>`);
			}
			$("#name1Area > .nameHolder").click();
			domText = targetDom.text();
			if( domText !== 'test'){
				studentError.throw(method, `after click, should have updated the dom element to have text of <code>test</code>, but had <code>${domText}</code>`);
			}
			$("#name1Area > .nameHolder").click();
			domText = targetDom.text();
			if( domText !== 'TEST'){
				studentError.throw(method, `after another click, should have updated the dom element to have text of <code>TEST</code>, but had <code>${domText}</code>`);
			}
			displayMessage(`${method} method tests passed`, 'message');			
		} catch( error ){
			return handleStudentError(error, 'getName');
		}
		try{
			const method = 'handleClick';
			displayMessage(`performing multiple element click test`, 'message');
			const name2 = new NameCapper( 'john' );
			const name2Dom = name2.render();
			$("#name2Area").append(name2Dom);
			const name3 = new NameCapper( 'samANtha' );
			const name3Dom = name3.render();
			$("#name3Area").append(name3Dom);
			displayMessage(`${method} method tests passed`, 'message');	
			$("#name1Area > .nameHolder").click();
			const words = ['test', 'john', 'samantha'];
			let elements = $(".nameHolder");
			for( let wordElementIndex = 0; wordElementIndex < words.length; wordElementIndex++){
				if( elements.eq(wordElementIndex).text() !== words[wordElementIndex]){
					studentError.throw(method, `.nameHolder ${wordElementIndex} should have had ${words[wordElementIndex]}, but had ${elements.eq(wordElementIndex).text()}`);
				}
			}
			words[1] = words[1].toUpperCase();
			elements.eq(1).click();
			for( let wordElementIndex = 0; wordElementIndex < words.length; wordElementIndex++){
				if( elements.eq(wordElementIndex).text() !== words[wordElementIndex]){
					studentError.throw(method, `.nameHolder ${wordElementIndex} should have had ${words[wordElementIndex]}, but had ${elements.eq(wordElementIndex).text()}`);
				}
			}
			words[2] = words[2].toUpperCase();
			elements.eq(2).click();
			for( let wordElementIndex = 0; wordElementIndex < words.length; wordElementIndex++){
				if( elements.eq(wordElementIndex).text() !== words[wordElementIndex]){
					studentError.throw(method, `.nameHolder ${wordElementIndex} should have had ${words[wordElementIndex]}, but had ${elements.eq(wordElementIndex).text()}`);
				}
			}
			displayMessage(`${method} multi element click tests passed`, 'message');	
		} catch( error ){
			return handleStudentError(error, 'getName');
		}
        

		displayMessage(`NameCapper passed all tests!`, 'green');
		return true;
	} catch(error) {
		handleStudentError(error);
	}
	
	displayMessage(`CounterBasic render passed all tests`, 'message');
}

function christmasLightTests(){
	const fileName = 'exercises/christmaslight.js';
	const handleStudentError = handleError('ChristmasLight', fileName);
	const studentError = new SectionError('ChristmasLight');

	try {
		displayMessage(`--Testing - ChristmasLight | ${fileName}`, 'header');
		if(typeof ChristmasLight=== 'undefined'){
			throw studentError.throw(null, `ChristmasLight object does not exist. Check ${fileName} and make sure the object is still defined and there are no syntax errors in the console.`);
        }
        displayMessage(`ChristmasLight object Exists`, 'message');
        try{
            const method = 'Constructor'
            if( ChristmasLight.length !== 1){
                studentError.throw(method, `<code>${method}</code> should expect 1 argument1, a <code>string</code>, it expected ${CounterBasic.length} arguments`);
            }
        } catch( error ){
			return handleStudentError(error, 'render not found');
		}
		const colorArray = ['red','green','blue'];
        const light = new ChristmasLight(colorArray);

        try{
            const method = 'Constructor';

            const valueTests = [
				{passed: colorArray, requiredValue: colorArray, test: ( value ) => value+'' === colorArray.join(','), error: 'color array' },
			]
            const testResult = testForProps( light, valueTests );
            if(testResult.length){
                studentError.throw(method, `<code>Constructor</code> should have stored parameters in the object, but could not find some.  Missing <code>${testResult[0]}</code>`);
			}
			displayMessage(`${method} method tests passed`, 'message');
        } catch( error ){
			return handleStudentError(error, 'constructor');
		}
		
		try{
			const method = 'render';
			const hasMethodCheck = hasMethod(light, method);
			if(hasMethodCheck !== true){
				studentError.throw(method, hasMethodCheck);
			}
			var dom = light.render();
			if($(dom).prop('tagName') !== 'DIV'){
				studentError.throw(method, `should have returned a <code>DIV</code> dom element, but returned a ${dom}`);
			}
			if(!$(dom).hasClass('christmasLight')){
				studentError.throw(method, `should have return an element that had a class of <code>christmasLight</code> but it did not`);
			}
			const valueTests = [
				{passed: '<div class="christmasLight"', requiredValue: dom, test: ( value ) => value === dom, error: 'the stored dom element' },
			]
			const testResult = testForProps( light, valueTests );
			if(testResult.length){
				studentError.throw(method, `should have stored a property of the element it just made, but does not appear to have done so`);
			}
			$("#lightDisplay").append( dom );
			displayMessage(`${method} method tests passed`, 'message');

		} catch( error ){
			return handleStudentError(error, 'render');
		}
        try{
            const method = 'displayColor';
			const hasMethodCheck = hasMethod(light, method);
			if(hasMethodCheck !== true){
				studentError.throw(method, hasMethodCheck);
			}
			if(light[method].length !== 0){
				studentError.throw(method, ` should have 0 arguments, but expects ${light[method].length}`);
			}
			$('.christmasLight').css('background-color', 'black');
			light.displayColor();
			let color = $('.christmasLight').css('background-color');
			if( color !== 'rgb(255, 0, 0)'){
				studentError.throw(method, ` should have updated the color to 'red', <code>rgb(255, 0, 0)</code>, but the color is <code>${color}</code>`);
			}
			displayMessage(`${method} method tests passed`, 'message');
        } catch( error ){
			return handleStudentError(error, 'displayColor');
		}
        try{
            const method = 'cycleColor';
			const hasMethodCheck = hasMethod(light, method);
			if(hasMethodCheck !== true){
				studentError.throw(method, hasMethodCheck);
			}
			if(light[method].length !== 0){
				studentError.throw(method, ` should have 0 arguments, but expects ${light[method].length}`);
			}
			light.cycleColor();
			light.displayColor();
			let color = $('.christmasLight').css('background-color');
			if( color !== 'rgb(0, 128, 0)'){
				studentError.throw(method, ` should have updated the color to 'red', <code>rgb(0, 128, 0)</code>, but the color is <code>${color}</code>`);
			}
			displayMessage(`${method} method tests passed`, 'message');
        } catch( error ){
			return handleStudentError(error, 'cycleColor');
		}
        try{
            const method = 'handleClick';
			const hasMethodCheck = hasMethod(light, method);
			if(hasMethodCheck !== true){
				studentError.throw(method, hasMethodCheck);
			}
			if(light[method].length !== 0){
				studentError.throw(method, ` should have 0 arguments, but expects ${light[method].length}`);
			}
			light.handleClick();
			let color = $('.christmasLight').css('background-color');
			if( color !== 'rgb(0, 0, 255)'){
				studentError.throw(method, ` should have updated the color to 'red', <code>rgb(0, 0, 255)</code>, but the color is <code>${color}</code>`);
			}
			$('.christmasLight').click();
			color = $('.christmasLight').css('background-color');
			if( color !== 'rgb(255, 0, 0)'){
				studentError.throw(method, ` should have updated the color to 'red', <code>rgb(255, 0, 0)</code>, but the color is <code>${color}</code>`);
			}
			displayMessage(`${method} method tests passed`, 'message');
        } catch( error ){
			return handleStudentError(error, 'handleClick');
		}
		displayMessage(`ChristmasLight completed all tests!`, 'green');
		return true;
	} catch(error) {
		handleStudentError(error);
	}
	
	displayMessage(`ChristmasLight render passed all tests`, 'message');
}