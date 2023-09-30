let win = 0;
let lose = 0;
let tie = 0;

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
  
  //Computer wins--------------------------------------------------------------//
  if (playerSelection === 'rock'&& getComputerChoice() === 'paper') {
      lose++;
      return "You lost this round!";
  } else if (playerSelection === 'paper' && getComputerChoice() === 'scissors') {
      lose++;
      return "You lost this round!";
  } else if (playerSelection === "scissors" && getComputerChoice() === 'rock') {
      lose++;
      return "You lost this round!";
  }
    //Tied round--------------------------------------------------------------//
    else if (playerSelection === getComputerChoice()) {
      tie++;
      return "This round resulted in a tie!";
  } 
    //Player wins------------------------------------------------------------//
    else if (playerSelection === 'rock'&& getComputerChoice() === 'scissors') {
      win++;
      return "You win this round!";
  } else if (playerSelection === 'paper' && getComputerChoice() === 'rock') {
      win++; 
      return "You win this round!";
  } else if (playerSelection === "scissors" && getComputerChoice() === 'paper') {
      win++;
      return "You win this round!";
  } 
    //Default---------------------------------------------------------------//
    else {
    return "Invalid selection! Please enter rock, paper or scissors."
  }
}

//Logic for the 5 rounds of play-------------------------------------------//
/*const game = () => {
  for (let i = 1; i < 6; i++) {
    const playerSelection = prompt('What do you chose?').toLowerCase();

    const computerSelection = getComputerChoice();
    
    alert(playRound(playerSelection,computerSelection));

    //Keeps track of score-----------------------------------------------
    alert(`Game: ${i}/5\rScore:\rYou: ${win}\rCPU: ${lose}\rTies: ${tie}`);
  }
}*/

game();