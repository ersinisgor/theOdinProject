'use strict';

let playerText = document.querySelector('#playerText');
const restartBtn = document.querySelector('#restartBtn');
const gameBoard = document.querySelector('#gameboard');
const boxes = Array.from(document.getElementsByClassName('box'));
let winnerIndicator = getComputedStyle(document.body).getPropertyValue(
  '--winning-blocks'
);

const O_TEXT = 'O';
const X_TEXT = 'X';
let currentPlayer = X_TEXT;

let spaces = ['', '', '', '', '', '', '', '', ''];

function createBoard() {
  spaces.forEach((_cell, index) => {
    const cellElement = document.createElement('div');
    cellElement.classList.add('box');
    cellElement.id = index;
    cellElement.addEventListener('click', boxClicked);
    gameBoard.append(cellElement);
  });
}

// const startGame = () => {
//   boxes.forEach(box => box.addEventListener('click', boxClicked));
// };

function boxClicked(e) {
  const id = e.target.id;

  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;

    if (playerHasWon() !== false) {
      playerText = `${currentPlayer} has won!`;
      let winning_blocks = playerHasWon();

      winning_blocks.map(
        box => (boxes[box].style.backgroundColor = winnerIndicator)
      );
      return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function playerHasWon() {
  for (const condition of winningCombos) {
    let [a, b, c] = condition;

    if (spaces[a] && spaces[a] === spaces[b] && spaces[a] === spaces[c]) {
      return [a, b, c];
    }
  }
  return false;
}

restartBtn.addEventListener('click', restart);

function restart() {
  spaces = ['', '', '', '', '', '', '', '', ''];

  boxes.forEach(box => {
    box.innerText = '';
    box.style.backgroundColor = '';
  });

  playerText = 'Tic Tac Toe';

  currentPlayer = X_TEXT;
}

// startGame();
createBoard();
