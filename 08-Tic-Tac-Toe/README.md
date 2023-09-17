# Tic Tac Toe Game

## About

This is a simple Tic Tac Toe game that you can play in your browser. The game board is created using HTML and CSS, and gameplay logic is implemented in JavaScript.

## Demo

You can see a live demo of the project 👉 [https://tictactoe-game-er.netlify.app/](https://tictactoe-game-er.netlify.app/)

![Demo GIF](https://github.com/ersinisgor/theOdinProject/blob/main/08-Tic-Tac-Toe/img/gif/Tic%20Tac%20Toe.gif)

## How to Play

1. Click the "Restart" button to start a new game.
2. The first player to play is "X". Click on an empty box to place your mark ("X" or "O").
3. Players take turns placing their mark until one of the following occurs:

   - One player gets three in a row ( horizontally, vertically, or diagonally). That player wins!
   - All the boxes are filled and no player has won. The game is a tie!

## How to Run

1. Clone the repository to your local machine.
2. Open the `index.html` file in your browser.
3. Click the "Restart" button to start a new game.

## Implementation Details

### HTML and CSS

The game board is created using a `div` element with a class of "gameboard". Inside this `div`, there are nine `div` elements with a class of "box". These are the boxes that the players will click on to place their marks. The CSS styling for the game board and the boxes is included in the `styles.css` file.

### JavaScript

The gameplay logic is implemented in the `app.js` file. The `Game` object is created using the module pattern, which allows us to encapsulate private variables and functions. The `Game` object has three public functions:

- `start()`: Initializes the game by setting up the game board and starting the first turn. The `start` function is the only function exposed to the public and it initializes the game by setting up the event listeners and creating the game board in the DOM.

- `boxClicked()`: Handles the click event on the game board boxes. This function checks if the clicked box is empty, places the mark of the current player in the box, and checks if the game has ended (either by a player winning or a tie game).

- `restart()`: Restarts the game by resetting the game board and starting a new game.

The `board` variable is an array of length 9 that keeps track of the current state of the game board. The `currentPlayer` variable is a string ("X" or "O") that keeps track of whose turn it is. The `playerHasWon()` function checks if the current player has won by looping through all the possible winning combinations on the game board.

When the game ends (either by a player winning or a tie game), the winning boxes are highlighted using CSS. The winning boxes are determined using the `playerHasWon()` function.

## Technologies Used

- HTML
- CSS
- JavaScript

## Credits

Created as part of [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-tic-tac-toe) curriculum.
