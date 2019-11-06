$(document).ready(initializeApp);

var mixedArray = [62, 49, 4, 13, 43, 42, 47, 22, 27, 64, 45, 61, 21, 57, 46, 63, 2, 58, 41, 56, 17, 11, 59, 14, 36, 54, 34, 3, 33, 28, 40, 52, 7, 16, 37, 50, 29, 26, 39, 19, 12, 38, 18, 23, 8, 5, 60, 31, 48, 44, 55, 51, 32, 6, 20, 15, 30, 9, 25, 24, 10, 35, 1, 53];
var numbers = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];
var students = {
    '#001': {name: 'Bob John', class: '', grade: 82},
    '#002': {name: 'Susan Walker', class: 'Math 101', grade: 98},
    '#003': {name: 'Fred Jenkins', class: 'Math 101', grade: 70},
    '#004': {name: 'Betty Wilson', class: 'Math 101', grade: 92},
    '#005': {name: 'Stuart James', class: 'Math 101', grade: 95},
    '#006': {name: 'Lisa Wallace', class: 'Math 101', grade: 78},
    '#007': {name: 'Ken Jennings', class: 'Math 101', grade: 63},
    '#008': {name: 'Kate Winslet', class: 'Math 101', grade: 87}
};

function initializeApp(){
    console.log('Initializing App...');





    // Keep these at the bottom of initializeApp
    displayStudentData();
    buildGameBoard();
    populateNumbers(mixedArray);
}

function displayStudentData(){

}

function buildGameBoard(){
    var boardSize = { rows: 8, squares: 8 };
    var gameBoard = $('#game-board');


}

function bubbleSort(dataArray){

}

function populateNumbers(numArr){
    var squareArr = [];

    for(var i = 0; i < numArr.length; i++){
        var square = $('<div>', {
            class: 'number',
            text: numArr[i]
        });

        squareArr.push(square);
    }
    $('#numbers').append(squareArr);
}

bubbleSort(mixedArray);
