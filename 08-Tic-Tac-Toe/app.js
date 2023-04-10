'use strict';

// game object
const Game = (() => {
  // private functions and variables
  // selects DOM elements
  const playerText = document.querySelector('#playerText');
  const restartBtn = document.querySelector('#restartBtn');
  const gameBoard = document.querySelector('#gameboard');
  const boxes = Array.from(document.getElementsByClassName('box'));
  // gets the CSS variable value for the winning blocks color
  const winnerIndicator = getComputedStyle(document.body).getPropertyValue(
    '--winning-blocks'
  );

  //declares variables
  let currentPlayer;
  let board = [];

  //creates the game board in the DOM
  function createBoard() {
    board.forEach((_cell, index) => {
      const cellElement = document.createElement('div');
      cellElement.classList.add('box');
      cellElement.id = index;
      cellElement.addEventListener('click', boxClicked);
      gameBoard.append(cellElement);
    });
  }

  // handlesthe click event on game board boxes
  function boxClicked(e) {
    const id = e.target.id;

    // if the clicked box is not already taken
    if (!board[id]) {
      // sets the current player's mark in the clicked box
      board[id] = currentPlayer;
      e.target.innerText = currentPlayer;

      // checks if the current player has won
      if (playerHasWon() !== false) {
        // displays the winner and highlights the winning blocks
        playerText.innerText = `${currentPlayer} has won! 🏆`;
        let winning_blocks = playerHasWon();

        const allBoxes = document.querySelectorAll('.box');

        for (let i = 0; i < 3; i++) {
          allBoxes[winning_blocks[i]].style.backgroundColor = winnerIndicator;
        }

        removeEventListeners();
        return;

        // checks if it's a tie game
      } else if (!board.includes('')) {
        playerText.innerText = "It's a tie! 🤝";
        removeEventListeners();
        return;
      }

      // switches the current player
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      playerText.innerText = `${currentPlayer}'s turn`;
    }
    console.log(board);
  }

  // checks if the current player has won
  function playerHasWon() {
    // all the possible winning combinations on the game board
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
    // loops over all the winning combinations and checks if any of them are true
    for (const condition of winningCombos) {
      let [a, b, c] = condition;

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return [a, b, c];
      }
    }
    // return false if no winning condition is true
    return false;
  }

  // removes click event listeners from all game board boxes
  function removeEventListeners() {
    const allBoxes = document.querySelectorAll('.box');
    allBoxes.forEach(box => {
      box.removeEventListener('click', boxClicked);
    });
  }

  // restarts the game
  function restart() {
    // generate an empty board array
    board = Array(9).fill('');

    const allBoxes = document.querySelectorAll('.box');

    allBoxes.forEach(box => {
      box.innerText = '';
      box.style.backgroundColor = '';
      box.addEventListener('click', boxClicked);
    });

    playerText.innerText = 'X plays first!';
    currentPlayer = 'X';
  }

  function start() {
    playerText.innerText = 'X plays first!';
    restartBtn.addEventListener('click', restart);
    restart();
    createBoard();
  }

  // public API
  return {
    start,
  };
})();

Game.start();
