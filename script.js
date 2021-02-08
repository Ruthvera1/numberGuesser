let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 10)
};

function compareGuesses(currentHumanGuess, computerGuess, target) {
    if (currentHumanGuess === computerGuess) {
    return true;
  } if (Math.abs(target - currentHumanGuess) > Math.abs(target - computerGuess))
  {
    return false ;
  } else { 
    return true; }
};

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore++
  } else if (winner === 'computer') {
    computerScore++
  }
};

const advanceRound = () => {
  currentRoundNumber++;
}
