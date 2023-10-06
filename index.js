let player = 0;
let computer = 0;
let tie = 0;

const compChoseRock = document.getElementById('comp-rock');
const compChosePaper = document.getElementById('comp-paper');
const compChoseScissors = document.getElementById('comp-scissors')

const restart = document.getElementById('restart-btn');
const roundNum = document.getElementById('round-num');
const userWin = document.getElementById('user-win');
const compWin = document.getElementById('comp-win');

const playerScoreElem = document.getElementById('player-score');
const compScoreElem = document.getElementById('computer-score');
const tieScoreElem = document.getElementById('tie-score');

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

//Logic for getting the computer's choice in the game at random//

function getComputerChoice(){
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
      computerChoice = 'rock';
      compChoseRock.style.display = 'block';
      compChoseScissors.style.display ='none';
      compChosePaper.style.display = 'none';
  } else if (computerChoice === 1) {
      computerChoice ='paper'
      compChosePaper.style.display = 'block';
      compChoseRock.style.display = 'none';
      compChoseScissors.style.display ='none';
  } else {
      computerChoice = 'scissors'
      compChoseScissors.style.display ='block';
      compChosePaper.style.display = 'none';
      compChoseRock.style.display = 'none';
  };
  return computerChoice;
}

//Logic for game round results//

function playRound(userChoice, computerChoice){
  if(userChoice === 'rock' && computerChoice === 'paper'){
    compScoreElem.innerHTML = ++computer;
    console.log('The computer wins this round!')
  }else if(userChoice === 'paper' && computerChoice === 'scissors'){
    compScoreElem.innerHTML = ++computer;
    console.log('The computer wins this round!');
  }else if(userChoice === 'scissors' && computerChoice === 'rock'){
    compScoreElem.innerHTML = ++computer;
    console.log('The computer wins this round!');
  }else if(userChoice === 'rock' && computerChoice === 'scissors'){
    playerScoreElem.innerHTML = ++player;
    console.log('You chose rock');
    console.log('You win this round!');
  }else if(userChoice === 'paper' && computerChoice === 'rock'){
    playerScoreElem.innerHTML = ++player;
    console.log('You chose paper');
    console.log('You win this round!');
  }else if(userChoice === 'scissors' && computerChoice === 'paper'){
    playerScoreElem.innerHTML = ++player;
    console.log('You chose scissors');
    console.log('You win this round!');
  }else{
    tieScoreElem.innerHTML = ++tie;
    console.log(`You chose ${userChoice}`)
    console.log('This round was a tie')
  }
}

function restartGame(){
  userWin.style.display = "none";
  compWin.style.display = "none";
  restart.style.display = "none";
  roundNum.innerHTML = 0;
  player = 0;
  computer = 0;
  tie = 0;
  playerScoreElem.innerHTML = '0';
  compScoreElem.innerHTML = '0';
  tieScoreElem.innerHTML = '0';
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
  rock.style.cursor = 'pointer';
  paper.style.cursor = 'pointer';
  scissors.style.cursor = 'pointer';
  compChoseScissors.style.display = 'none';
  compChosePaper.style.display = 'none';
  compChoseRock.style.display = 'none';
}

function game(){
  if(player === 5){
    userWin.style.display = "block";
    restart.style.display = "block";
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    rock.style.cursor = 'not-allowed';
    paper.style.cursor = 'not-allowed';
    scissors.style.cursor = 'not-allowed';
    restart.onclick = restartGame;
  }else if(computer === 5){
    compWin.style.display = "block";
    restart.style.display = "block";
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    rock.style.cursor = 'not-allowed';
    paper.style.cursor = 'not-allowed';
    scissors.style.cursor = 'not-allowed';
    restart.onclick = restartGame;
  }
}

const buttons = document.querySelectorAll('button');
        
buttons.forEach((button) => {   
  button.addEventListener('click', () => {
    let compSel = getComputerChoice();
    let playSel = button.id;
    playRound(playSel, compSel);
    game();
    ++roundNum.innerHTML
    });
    });

