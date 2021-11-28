function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.random();
    let randomChoice = random * choices.length;
    randomChoice = Math.floor(randomChoice);
    return choices[randomChoice];
}

const playerChoice = document.querySelectorAll('.playerChoice');
playerChoice.forEach((currentBtn) => {
    currentBtn.addEventListener('click', () => {
        playerSelection = currentBtn.textContent.toLowerCase();
        computerSelection = computerPlay();
        if (playerScore === 5) {
            return;
        } else if (computerScore === 5) {
            return;
        }
        playRound(playerSelection, computerSelection);
    })
})

let computerScore = 0;
let playerScore = 0;

function playRound() {
    const gameMsg = document.querySelector('#gameMsg');
    gameMsg.textContent = `Your choice: ${playerSelection} VS computer's choice: ${computerSelection}.`;
    gameMsg.append;

    let result = 'You won!';
// check who scores a point
    if (playerSelection == computerSelection) {
        result = 'You are Tied';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        result = 'You lost';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        result = 'You lost';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        result = 'You lost';
    }
// keep track of the score
    if (result === 'You lost') {
        computerScore++;
    } else if (result === 'You are Tied') {
        gameMsg.textContent = `Oh no, you are tied! Try again.`;
        gameMsg.append;
        return;
    } else {
        playerScore++;
    }
// check who won the game
    if (playerScore === 5) {
        gameMsg.textContent = `You won!`;
    } else if (computerScore === 5) {
        gameMsg.textContent = 'The computer won!';
    }

    const playerResult = document.querySelector('#playerResult');
    playerResult.textContent = `Player score: ${playerScore}`;
    playerResult.append;

    const computerResult = document.querySelector('#computerResult');
    computerResult.textContent = `Computer score: ${computerScore}`;
    computerResult.append;

}