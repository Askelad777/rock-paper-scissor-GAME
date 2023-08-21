const startGameBtn = document.getElementById('start-game-btn');

const ROCK  = 'ROCK';
const PAPER = 'PAPER';
const SCISSOR = 'SCISSOR';
const Default_player_choice = ROCK;
let gameIsRunning = false;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER WIN';
const RESULT_COMPUTER_WINS = 'COMPUTER WIN';
const RESULT_LOSE = 'LOSE';



const GetPlayerChoice = function(){
  const selection = prompt(`${ROCK}, ${PAPER} and, ${SCISSOR}`).toUpperCase;
  if(
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSOR 
    ) {
      alert(`Invalid choice, Player's choice back to default '${Default_player_choice}'`);
      return Default_player_choice;
  }
  return selection;
}

const getComputerChoice = function(){
  const computerChoice = Math.random();
  if(computerChoice < .34){
    return ROCK;
  }else if(computerChoice < .64){
    return PAPER;
  }else{
    return SCISSOR;
  }
}


const getWinner = function(cChoice, pChoice){
  if(cChoice === pChoice){
    return RESULT_DRAW;
  }else if(
      cChoice === ROCK && pChoice === PAPER ||
      cChoice === PAPER&& pChoice === SCISSOR ||
      cChoice === SCISSOR&& pChoice === ROCK

  ){
    return RESULT_PLAYER_WINS;
  }else{
    return RESULT_COMPUTER_WINS;
  }

}





//startGame(); // work directly.

startGameBtn.addEventListener('click', function(){
    if(gameIsRunning){
      return;
    } 
      gameIsRunning = true;
      console.log('The game has start.....');
      const playerChoice = GetPlayerChoice();
      const computerChoice = getComputerChoice();
      const winner = getWinner(computerChoice, playerChoice);
      console.log(winner);
});