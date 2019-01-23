const BACK_FACE = "back.png";
const FLIP_TIME = 1500;
const CLEAR = "clear.png";
var cards = ["1clubs.png", "1hearts.png", "2clubs.png", "2hearts.png", "3clubs.png", "3hearts.png"];
var flippedCards = [];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function shuffle(cards) {
  var i = cards.length;
  var j;
  var temp;
  while (--i > 0) {
    j = getRandomIntInclusive(0, i);
    temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }
}
function generateCards() {
  flippedCards = [];
  var output = '';
  shuffle(cards);
  for (var i = 0; i < cards.length; i++) {
    output += '<img id="' + cards[i] + '" src="' + BACK_FACE + '" alt="cardImage" onclick="flip(this,\'' + cards[i] + '\')">';
  }
  document.getElementById('cards').innerHTML = output;
}

document.addEventListener("load", generateCards(), false);
document.getElementById("restartButton").addEventListener("click", function() {generateCards();}, false);
function flip(image, value) {
  if (image.getAttribute("src") == BACK_FACE && flippedCards.length < 2) {
    image.src = value;
    if (flippedCards.length == 0) {
      flippedCards.push(value);
    } else if (flippedCards.length == 1) {
      flippedCards.push(value);
      if (flippedCards[0].charAt(0) == flippedCards[1].charAt(0)) {
        function clearCards() {
          document.getElementById(flippedCards[0]).src = CLEAR;
          document.getElementById(flippedCards[1]).src = CLEAR;
          flippedCards = [];
        }
        setTimeout(clearCards, FLIP_TIME);
      } else {
        function flipCardsBack() {
          if (flippedCards.length == 2) {
            document.getElementById(flippedCards[0]).src = BACK_FACE;
            document.getElementById(flippedCards[1]).src = BACK_FACE;
            flippedCards = [];
          }
        }
        setTimeout(flipCardsBack, FLIP_TIME);
      }
    }
  }
}