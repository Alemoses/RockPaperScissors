//Logic for getting the computer's choice in the game at random//

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

//Logic for the user's input and the game round results//

const playRound = (playerSelection, computerSelection) => {
  //Computer wins----------------------------------------------------
  if (playerSelection === 'rock'&& getComputerChoice() === 'paper') {
    return "You lost this round!";
  } else if (playerSelection === 'paper' && getComputerChoice() === 'scissors') {
    return "You lost this round!";
  } else if (playerSelection === "scissors" && getComputerChoice() === 'rock') {
    return "You lost this round!";
  }
    //Tied round---------------------------------------
    else if (playerSelection === getComputerChoice()) {
    return "This round resulted in a tie!";
  } 
    //Player wins--------------------------------------------------------------
    else if (playerSelection === 'rock'&& getComputerChoice() === 'scissors') {
    return "You win this round!";
  } else if (playerSelection === 'paper' && getComputerChoice() === 'rock') {
    return "You win this round!";
  } else if (playerSelection === "scissors" && getComputerChoice() === 'paper') {
    return "You win this round!";
  } 
    //Default
    else {
    return "Invalid selection! Please enter rock, paper or scissors."
  }
}

//Logic for the 5 rounds of play

const game = () => {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('What do you chose?').toLowerCase();

    const computerSelection = getComputerChoice();
    
    alert(playRound(playerSelection,computerSelection));
  }
}

game();