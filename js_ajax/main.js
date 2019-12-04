//Create GLOBAL variable below here on line 2
var global_result;


$(document).ready(initializeApp);

function initializeApp(){
    $('button').click(getData);
}

function getData(){
    console.log('1) getData called from button click');
    var ajaxConfig = {
        dataType: 'json',
        url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json',
        success: function(result) {

            console.log('2) AJAX Success function called, with the following result:', result);
            global_result = result;

            var movie0PictureInfo = result.feed.entry[0]["im:image"][2].label;

            for(var i=0; i<10; i++){
                var imageUrl = result.feed.entry[i]["im:image"][2].label;
                var movieTitle = result.feed.entry[i].title.label;
                var movieDirector = result.feed.entry[i]["im:artist"].label;
                var divCard = $("<div>").append($('<img>').attr('src', imageUrl), $("<p>").text(movieTitle), $("<p>").text(movieDirector))
                $("#main").append(divCard);
            }
        }
    }

    console.log('3) Making AJAX request');
    $.ajax(ajaxConfig);

    console.log('4) End of getData');
}
