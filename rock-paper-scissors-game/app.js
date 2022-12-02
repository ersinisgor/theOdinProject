const computerSelection = getComputerChoice();

function getComputerChoice() {
  const items = ["rock", "paper", "secissors"];
  const i = Math.floor(Math.random() * 3);
  const choice = items[i];
  return choice;
}

const playerSelection = prompt("Write rock, paper or scissors").toLowerCase();
console.log(getComputerChoice());
console.log(getComputerChoice());
