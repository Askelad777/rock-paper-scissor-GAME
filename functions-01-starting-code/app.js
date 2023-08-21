const startGameBtn = document.getElementById('start-game-btn');


const ROCK  = 'ROCK';
const PAPER = 'PAPER';
const SCISSOR = 'SCISSOR';
const Default_player_choice = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER WIN';
const RESULT_COMPUTER_WINS = 'COMPUTER WIN';
let gameIsRunning = false;


const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER} or, ${SCISSOR}?`, '').toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSOR
     ) {
      alert(`Invalid choice, Player's choice back to default '${Default_player_choice}'`);
      return Default_player_choice;
    }
    return selection;
};

const getComputerChoice = () =>{
  const computerChoice = Math.random();
  if(computerChoice < .34){
    return ROCK;
  }else if(computerChoice < .64){
    return PAPER;
  }else{
    return SCISSOR;
  }
}


const getWinner = (cChoice, pChoice) =>
    cChoice === pChoice 
    ? RESULT_DRAW 
    : cChoice === ROCK && pChoice === PAPER ||
      cChoice === PAPER&& pChoice === SCISSOR ||
      cChoice === SCISSOR&& pChoice === ROCK 
      ? RESULT_PLAYER_WINS 
      : RESULT_COMPUTER_WINS;

//   if(cChoice === pChoice){
//     return RESULT_DRAW;
//   }else if(
//       cChoice === ROCK && pChoice === PAPER ||
//       cChoice === PAPER&& pChoice === SCISSOR ||
//       cChoice === SCISSOR&& pChoice === ROCK
//   ){
//     return RESULT_PLAYER_WINS;
//   }else{
//     return RESULT_COMPUTER_WINS;
//   }






//startGame(); // work directly.

startGameBtn.addEventListener('click',() =>{
    if(gameIsRunning){
      return;
    } 
      gameIsRunning = true;
      console.log('The game is starting.....');
      const playerChoice = getPlayerChoice();
      const computerChoice = getComputerChoice();
      const winner = getWinner(computerChoice, playerChoice);
      console.log(winner);
      let message = `You picked ${playerChoice} and the computer picked ${computerChoice}.`;
      if (winner === RESULT_DRAW){
        message += 'It\' a draw';
      }else if(winner === RESULT_PLAYER_WINS){
        message += 'You won';
      }else{
        message+= 'You lost';
      }
      alert(message);
      gameIsRunning = false;
});