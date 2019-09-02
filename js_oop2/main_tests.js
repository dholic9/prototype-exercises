
$(document).ready( startApp );

function startApp(){
    intiateTestDisplay();
    startTests();
    $("#cycleAllLights").click( cycleAllLights );
}

function cycleAllLights(){
    $(".christmasLight").click(); 
}