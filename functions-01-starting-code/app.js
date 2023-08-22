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


const getWinner = (cChoice, pChoice = Default_player_choice) =>
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
      let winner;
      if(playerChoice){
        winner = getWinner(computerChoice, playerChoice);
      }else{
        winner = getWinner(computerChoice)
      }
      let message = `You picked ${playerChoice || Default_player_choice} and the computer picked ${computerChoice}.`;
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


// not related to the GAME

const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = number => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    if (operation === 'ADD') {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }
  resultHandler(sum);
};

const subtractUp = function(resultHandler, ...numbers) {
  let sum = 0;
  for (const num of numbers) {
    // don't use that
    sum -= num;
  }
  resultHandler(sum, 'The result after adding all numbers is');
};

const showResult = (messageText, result) => {
  alert(messageText + ' ' + result);
};

// combine(
//   showResult.bind(this, 'The result after adding all numbers is:'),
//   'ADD',
//   1,
//   5,
//   'fdsa',
//   -3,
//   6,
//   10
// );
// combine(
//   showResult.bind(this, 'The result after adding all numbers is:'),
//   'ADD',
//   1,
//   5,
//   10,
//   -3,
//   6,
//   10,
//   25,
//   88
// );
// combine(
//   showResult.bind(this, 'The result after subtracting all numbers is:'),
//   'SUBTRACT',
//   1,
//   10,
//   15,
//   20
// );
