const getComputerChoice = () => {
  let computerChoice = Math.floor(Math.random() * 3);
    
  if (computerChoice === 0) {
      return 'rock'
  } else if (computerChoice === 1) {
      return 'paper'
  } else {
      return 'scissors'
  };
}

let playRound = (playerSelection, computerSelection) => {
  if (playerSelection === 'rock'&& getComputerChoice === 'paper') {
    return "You lost this round!"
  } else if (playerSelection === 'paper' && getComputerChoice === 'scissors') {
    return "You lost this round!"
  } else if (playerSelection === "scissors" && getComputerChoice === 'rock') {
    return "You lost this round"
  } else if (playerSelection === getComputerChoice) {
    return "This round resulted in a tie!"
  } else {
    return "You win this round"
  };
}

const playerSelection = 'rock';

const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));