// === card ===
var cards = document.getElementsByClassName("card");
for (i = 0; i < cards.length; i++) {
  cards[i].setAttribute('onmouseover', 'CardHover(this)');
  cards[i].setAttribute('onmouseout', 'CardMouseOut(this)');
}

function CardHover(card){
  var hover = card.childNodes[3];
  hover.style.display='block';
}

function CardMouseOut(card){
  var hover = card.childNodes[3];
  hover.style.display='none';
}