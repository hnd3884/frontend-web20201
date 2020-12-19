// === carousel ===
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

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
