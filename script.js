function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.random();
    let randomChoice = random * choices.length;
    randomChoice = Math.floor(randomChoice);
    return choices[randomChoice];
}

const buttons = document.querySelectorAll('button');
let playerSelection = '';
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.textContent.toLowerCase();
        computerSelection = computerPlay();
        if (playerScore === 5 || computerScore === 5) {
            return;
        }
        playRound(playerSelection, computerSelection);
    });
});

let computerScore = 0;
let playerScore = 0;

function playRound() {
    const gameMsg = document.querySelector('#gameMsg');
    gameMsg.textContent = `Your choice: ${playerSelection} VS computer's choice: ${computerSelection}.`;
    gameMsg.append;

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
    } else if (result === 'You are Tied') {
        gameMsg.textContent = `Oh no, you are tied! Try again.`;
        gameMsg.append;
        return;
    } else {
        playerScore++;
    }

    const playerResult = document.querySelector('#playerResult');
    playerResult.textContent = `Player score: ${playerScore}`;
    playerResult.append;

    const computerResult = document.querySelector('#computerResult');
    computerResult.textContent = `Computer score: ${computerScore}`;
    computerResult.append;

}

