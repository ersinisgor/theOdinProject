const computerSelection = getComputerChoice();

function getComputerChoice() {
  const items = ["rock", "paper", "scissors"];
  const i = Math.floor(Math.random() * 3);
  const choice = items[i];
  return choice;
}

console.log(computerSelection);

const playerSelection = prompt("Write rock, paper or scissors").toLowerCase();

const c = `Computer wins, cause computer selected ${computerSelection}!`;
const d = "It's a draw, Please play again!";
const p = `You win!, couse computer selected ${computerSelection}`;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      alert(d);
    } else if (computerSelection === "paper") {
      alert(c);
    } else if (computerSelection === "scissors") {
      alert(p);
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      alert(p);
    } else if (computerSelection === "paper") {
      alert(d);
    } else if (computerSelection === "scissors") {
      alert(c);
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      alert(c);
    } else if (computerSelection === "paper") {
      alert(p);
    } else if (computerSelection === "scissors") {
      alert(d);
    }
  }
}
playRound(playerSelection, computerSelection);
