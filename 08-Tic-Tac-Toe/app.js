const gameBoard = document.querySelector('#gameboard');
const infoDisplay = document.querySelector('#info');
const allCells = document.querySelectorAll('.square');
const restartBtn = document.querySelector('#restartBtn');
const startCells = ['', '', '', '', '', '', '', '', ''];
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

let currentPlayer = 'X';

infoDisplay.textContent = 'Cross goes first';

let running = false;
