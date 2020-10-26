let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

let generateTarget = () => {
	return Math.floor(Math.random() * 10);
}

let compareGuesses (humanGuess, computerGuess, target) => {
if (Math.abs(humanGuess - target) <= Math.abs(computerGuess - target)) {
	return true; 
} else return false;
}


const updateScore = winner => {
	if (winner === 'human') { 
		humanScore++;
	} else if (winner === 'computer') {
		computerScore++;
	}
}

const advanceRound = () => currentRoundNumber++;