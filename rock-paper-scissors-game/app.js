let buttons = document.querySelectorAll(".button");
const optionBtn = document.querySelectorAll("div.optionBtn button");
const roundResults = document.querySelector("#roundResults");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const resetBtn = document.querySelector("#reset");

//refresh page for new game
resetBtn.addEventListener("click", () => location.reload());

buttons.forEach((button) => {
  button.addEventListener("click", getPlayerChoice);
});

function getPlayerChoice(e) {
  let computerSelection = "paper";
  let playerSelection = e.target.id;
  console.log(playerSelection);
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
}

//Old script
/* let playerScore = 0;
let computerScore = 0;

const computerSelection = getComputerChoice();

function getComputerChoice() {
  const items = ["rock", "paper", "scissors"];
  const i = Math.floor(Math.random() * 3);
  const choice = items[i];
  return choice;
}

console.log(computerSelection);

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
