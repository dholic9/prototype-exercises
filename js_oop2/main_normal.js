
/* basic counter test */

var c1;

$(document).ready( function(){ 
    c1 = new CounterBasic(-20, "#counter1");
});

/* medium counter test */

var c2;

$(document).ready( function(){ 
    c2 = new CounterMedium(5);
    var c2Dom = c2.render();
    $("#counter2Area").append( c2Dom );
    c2.addClickHandler();
});

/* callback counter test */

var c3;

function demoCallbackFunction( clickedObject ){
    console.log("an object was clicked, it's value is "+ clickedObject.getValue())
}

$(document).ready( function(){ 
    c3 = new CounterCallback(100, demoCallbackFunction );
    var c2Dom = c3.render();
    $("#counter3Area").append( c2Dom );
    c3.addClickHandler();
});

/* name capper/decapper * test */

var name1, name2, name3

$(document).ready( function(){ 
    name1 = new NameCapper( 'chuck' );
    var name1Dom = name1.render();
    $("#name1Area").append(name1Dom);
    name2 = new NameCapper( 'SaNdY' );
    var name2Dom = name2.render();
    $("#name2Area").append(name2Dom);
    name3 = new NameCapper( 'CHRisTINe!' );
    var name3Dom = name3.render();
    $("#name3Area").append(name3Dom);
});

/* christmas light test */

var lights = [];

function cycleAllLights(){
    for( var lightIndex = 0; lightIndex < lights.length; lightIndex++){
        lights[lightIndex].handleClick();
    }    
}

$(document).ready( function(){ 
    lights.push( new ChristmasLight( ['red','blue','yellow']));
    lights.push( new ChristmasLight( ['pink','lightgreen','lavender', 'lightblue']));
    lights.push( new ChristmasLight( ['red','blue','yellow']));
    lights.push( new ChristmasLight( ['blue','yellow','red']));
    lights.push( new ChristmasLight( ['yellow','red','blue']));

    for( var lightIndex = 0; lightIndex < lights.length; lightIndex++){
        var dom = lights[lightIndex].render();
        $("#lightDisplay").append( dom );
    }
    $("#cycleAllLights").click( cycleAllLights );
});