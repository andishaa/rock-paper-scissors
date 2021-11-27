function computerPlay() {
    const choices = ['rock', 'paper', 'sciossors'];
    const random = Math.random();
    let randomChoice = random * choices.length;
    randomChoice = Math.floor(randomChoice);
    return choices[randomChoice];
}

// paper beats rock
// rock beats scissors
// scissors beat paper
// if they have duplicate choice they are tied

const buttons = document.querySelectorAll('button');
let playerSelection = '';
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.textContent.toLowerCase();
        playRound();
    });
});

let computerScore = 0;
let playerScore = 0;

function playRound() {

    computerSelection = computerPlay();

    let result = 'You won!';

    if (playerSelection == computerSelection) {
        result = 'You are Tied';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        result = 'You lost';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        result = 'You lost';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        result = 'You lost';
    }

    if (result === 'You lost') {
        computerScore++;
    } else if (result === 'You won!') {
        playerScore++;
    }

    const gameStatus = document.querySelector('#gameStatus');
    gameStatus.textContent = `Your choice: ${playerSelection} VS computer's choice: ${computerSelection}.`;
    gameStatus.append;

    const playerResult = document.querySelector('#playerResult');
    playerResult.textContent = `Player score: ${playerScore}`;
    playerResult.append;

    const computerResult = document.querySelector('#computerResult');
    computerResult.textContent = `Computer score: ${computerScore}`;
    computerResult.append;

}