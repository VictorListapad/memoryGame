// ************************************************************************
// GLOBALS
// ************************************************************************
const cards = [
  {
    name: `cheeseburger`,
    img: `./images/cheeseburger.png`,
  },
  {
    name: `fries`,
    img: `./images/fries.png`,
  },
  {
    name: `hotdog`,
    img: `./images/hotdog.png`,
  },
  {
    name: `ice-cream`,
    img: `./images/ice-cream.png`,
  },
  {
    name: `milkshake`,
    img: `./images/milkshake.png`,
  },
  {
    name: `pizza`,
    img: `./images/pizza.png`,
  },
  {
    name: `cheeseburger`,
    img: `./images/cheeseburger.png`,
  },
  {
    name: `fries`,
    img: `./images/fries.png`,
  },
  {
    name: `hotdog`,
    img: `./images/hotdog.png`,
  },
  {
    name: `ice-cream`,
    img: `./images/ice-cream.png`,
  },
  {
    name: `milkshake`,
    img: `./images/milkshake.png`,
  },
  {
    name: `pizza`,
    img: `./images/pizza.png`,
  },
];
const board = document.getElementById(`board`);
const score = document.getElementById(`score`);
let chosenCards = [];
let chosenCardsIds = [];
let cardsWon = [];
// ************************************************************************
// CREATE BOARD
// ************************************************************************
function createBoard() {
  cards.sort(() => 0.5 - Math.random());
  cards.forEach((c, index) => {
    const card = document.createElement(`img`);
    card.setAttribute(`src`, `./images/blank.png`);
    card.dataset.id = index;
    card.addEventListener(`click`, flipCard);
    board.append(card);
  });
}
createBoard();

// CARD FLIP
function flipCard() {
  const cardId = this.dataset.id;
  console.log(cardId);
  this.setAttribute(`src`, cards[cardId].img);
  chosenCardsIds.push(cardId);
  chosenCards.push(cards[cardId].name);
  if (chosenCards.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

// CHECK MATCH
function checkMatch() {
  const allCards = document.querySelectorAll(`#board img`);
  console.log(allCards);
  const firstChosenId = chosenCardsIds[0];
  const secondsChosenId = chosenCardsIds[1];
  if (firstChosenId !== secondsChosenId && chosenCards[0] === chosenCards[1]) {
    score.innerText = Number(score.innerText) + 2;
    allCards[firstChosenId].setAttribute(`src`, `./images/white.png`);
    allCards[secondsChosenId].setAttribute(`src`, `./images/white.png`);
    cardsWon.push(chosenCards[0]);
    cardsWon.push(chosenCards[1]);
    allCards[firstChosenId].removeEventListener(`click`, flipCard);
    allCards[secondsChosenId].removeEventListener(`click`, flipCard);
  } else {
    allCards[firstChosenId].setAttribute(`src`, `./images/blank.png`);
    allCards[secondsChosenId].setAttribute(`src`, `./images/blank.png`);
  }
  chosenCards = [];
  chosenCardsIds = [];
  if (cardsWon.length === 12) {
    cardsWon = [];
    allCards.forEach((card) => card.remove());
    createBoard();
  }
}
