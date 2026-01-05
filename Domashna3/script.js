window.addEventListener("load", start, false);

let cardpics = [
  "lion.jpg",
  "lion.jpg",
  "wolf.jpg",
  "wolf.jpg",
  "monkey.jpg",
  "monkey.jpg",
  "elephant.jpg",
  "elephant.jpg",
  "leopard.jpg",
  "leopard.jpg",
  "giraffe.jpg",
  "giraffe.jpg",
];

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let attempts = 0;
let attemptCountEl = document.getElementById("attempt-count");

function start() {
  cardpics.sort(() => 0.5 - Math.random());
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", flipCard);
  });
}
function flipCard(event) {
  if (lockBoard) return;

  let clickedcard = event.target;
  if (clickedcard === firstCard) return;
  let cardId = clickedcard.getAttribute("data-id");
  let faceToShow = cardpics[cardId];
  clickedcard.src = faceToShow;
  if (firstCard == null) {
    firstCard = clickedcard;
  } else {
    secondCard = clickedcard;
    attempts++;
    attemptCountEl.textContent = attempts;
    checkforMatch();
  }
}
function checkforMatch() {
  if (firstCard.src === secondCard.src) {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoard();
  } else {
    lockBoard = true;
    setTimeout(() => {
      firstCard.src = "back.jpg";
      secondCard.src = "back.jpg";
      resetBoard();
    }, 1000);
  }
}
function resetBoard() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}
