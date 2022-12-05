let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll(".button");
const resetBtn = document.querySelector("#reset");
const results = document.querySelector("#roundResults");

function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
  let computerSelection = computerPlay();
  let result = "";

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore += 1;
    result = `You win!, ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;

    if (playerScore === 5) {
      result += "<br><br>You won the game! Play Again?";
      playerScore = "Play Again!";
      computerScore = "Play Again!";
      results.setAttribute("style", "background:#86cb92");
    }
  } else if (playerSelection === computerSelection) {
    result = `It's a draw. You both chose ${playerSelection.toUpperCase()}`;
  } else {
    computerScore += 1;
    result = `You lose!, ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;

    if (computerScore === 5) {
      result += "<br><br>Computer won the game! Play Again?";
      playerScore = "Play Again!";
      computerScore = "Play Again!";
      results.setAttribute("style", "background:#fc5130");
    }
  }

  document.getElementById("computerScore").innerHTML = computerScore;
  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("roundResults").innerHTML = result;
  return;
}

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    playRound(button.id);
  });
});

//refresh page for new game
resetBtn.addEventListener("click", () => location.reload());

/* ----------------------------------------------------------------------------- */

/* Old Script - */
/* let buttons = document.querySelectorAll(".button");
const optionBtn = document.querySelectorAll("div.optionBtn button");
const roundResults = document.querySelector("#roundResults");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const resetBtn = document.querySelector("#reset");

//refresh page for new game
resetBtn.addEventListener("click", () => location.reload());

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", getPlayerChoice);
});

for (j = 0; j < 5; j++) {
  function getPlayerChoice(e) {
    let playerSelection = e.target.id;
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    function playRound(playerSelection, computerSelection) {
      if (playerSelection === "rock") {
        if (computerSelection === "rock") {
          result = "d";
        } else if (computerSelection === "paper") {
          result = "c";
        } else if (computerSelection === "scissors") {
          result = "p";
        }
      } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
          result = "p";
        } else if (computerSelection === "paper") {
          result = "d";
        } else if (computerSelection === "scissors") {
          result = "c";
        }
      } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
          result = "c";
        } else if (computerSelection === "paper") {
          result = "p";
        } else if (computerSelection === "scissors") {
          result = "d";
        }
      }

      if (result === "c") {
        computerScore++;
         alert(`Computer wins, cause Computer selected: ${computerSelection}!`);
      } else if (result === "d") {
         alert("It's a draw, Please play again!");
      } else if (result === "p") {
        playerScore++;
         alert(`You win!, couse Computer selected: ${computerSelection}`);
      }
      return {
        playerScore,
        computerScore,
      };
    }
  }
}

function getComputerChoice() {
  const items = ["rock", "paper", "scissors"];
  const i = Math.floor(Math.random() * 3);
  const choice = items[i];
  return choice;
} */

/* --------------------------------------------------------------------------- */

//Old script
/* let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const items = ["rock", "paper", "scissors"];
  const i = Math.floor(Math.random() * 3);
  const choice = items[i];
  return choice;
}

let playerSelection = prompt("Write rock, paper or scissors").toLowerCase();

let result;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      result = "d";
    } else if (computerSelection === "paper") {
      result = "c";
    } else if (computerSelection === "scissors") {
      result = "p";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      result = "p";
    } else if (computerSelection === "paper") {
      result = "d";
    } else if (computerSelection === "scissors") {
      result = "c";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      result = "c";
    } else if (computerSelection === "paper") {
      result = "p";
    } else if (computerSelection === "scissors") {
      result = "d";
    }
  }

  if (result === "c") {
    alert(`Computer wins, cause Computer selected: ${computerSelection}!`);
  } else if (result === "d") {
    alert("It's a draw, Please play again!");
  } else if (result === "p") {
    alert(`You win!, couse Computer selected: ${computerSelection}`);
  }
  return result;
}

playRound(playerSelection, computerSelection);

function playGame() {
  getComputerChoice();
  playerSelection;
  playRound(playerSelection, computerSelection);
  if (result === "p") {
    playerScore++;
  } else if (result === "d") {
    playerScore = playerScore;
    computerScore = computerScore;
  } else if (result === "c") {
    computerScore++;
  }
  return playerScore, computerScore;
}

for (let j = 0; j < 5; j++) {
  playGame();
}

console.log(playerScore, computerScore); */
