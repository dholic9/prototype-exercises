$(document).ready(intializeApp);

function intializeApp(){
  console.log('Initializing App...');
  var dynamicCol = $('.container .col:nth-child(2)');
  dynamicCol.append('<h1>Dynamic Content</h1>');
  var firstCard = createCard('heart', 'ten');
  dynamicCol.append(firstCard);
  var firstRandomCard = createRandomCard();
  dynamicCol.append(firstRandomCard)
  addRandomCardToDom();
  var addCardButton = $('<button>', {
      text: 'Add Card to DOM',
      click: addRandomCardToDom
  });
  dynamicCol.prepend(addCardButton);
}

function createCard(suit, rank){
  var card = $('<div>', {
      class: 'card ' + suit + ' ' + rank,
      click: toggleCardback
  });
  return card;

}

function createRandomCard(){
  var suitArray = ['heart', 'club', 'diamond', 'spade'];
  var rankArray = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king'];
  var suitIndex = Math.floor(Math.random() * suitArray.length);
  var rankIndex = Math.floor(Math.random() * rankArray.length);
  var randomSuit = suitArray[suitIndex];
  var randomRank = rankArray[rankIndex];
  var randomCard = createCard(randomSuit, randomRank);
  return randomCard;
}

function addRandomCardToDom(){
  var randomCard = createRandomCard();
  $('.container .col:nth-child(2)').append(randomCard);
}

function toggleCardback(){
  var clickedCard = $(this);
  clickedCard.toggleClass('back');
}
