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
function flipCard() {}
