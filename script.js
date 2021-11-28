function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.random();
    let randomChoice = random * choices.length;
    randomChoice = Math.floor(randomChoice);
    return choices[randomChoice];
}

const playerChoice = document.querySelectorAll('.playerChoice');
playerChoice.forEach((currentBtn) => {
    currentBtn.addEventListener('click', choiceHandler);
})

function isLastRound(){
    const neededWins = 5;
    const isLastRound = playerScore === neededWins || computerScore === neededWins;
    return isLastRound;
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    let result = 'You won!';

    // check who scores a point
    if (playerSelection == computerSelection) {
        result = 'You are Tied';
    } else if (playerSelection == 'rock' && computerSelection == 'paper' 
                || playerSelection == 'scissors' && computerSelection == 'rock' 
                || playerSelection == 'paper' && computerSelection == 'scissors') {
        result = 'You lost';
    }

    // keep track of the score
    if (result === 'You lost') {
        computerScore++;
    } else if (result === 'You won!') {
        playerScore++;
    }
    
    return result;
}

function endRoundUIUpdate(roundResult, playerSelection, computerSelection){
    const gameMsg = document.querySelector('#gameMsg');
    gameMsg.textContent = `Your choice: ${playerSelection} VS computer's choice: ${computerSelection}.`;

    // keep track of the score
    if (roundResult !== 'You lost' && roundResult !== 'You won!') {
        gameMsg.textContent = `Oh no, you are tied! Try again.`;
    } 

    // check who won the game
    if (isLastRound()) {
        if (playerScore > computerScore) {
            gameMsg.textContent = `You won!`;
        } else {
            gameMsg.textContent = 'The computer won!';
        }
    }
    
    const playerResult = document.querySelector('#playerResult');
    playerResult.textContent = `Player score: ${playerScore}`;

    const computerResult = document.querySelector('#computerResult');
    computerResult.textContent = `Computer score: ${computerScore}`;
}

function choiceHandler(event){
    
    const clickedButton = event.currentTarget
    const playerSelection = clickedButton.textContent.toLowerCase();
    const computerSelection = computerPlay();

    if (isLastRound()) {
        return;
    }

    let roundResult = playRound(playerSelection, computerSelection);

    endRoundUIUpdate(roundResult, playerSelection, computerSelection);  
}

const resetBtn = document.querySelector('.resetBtn');
resetBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;

    const playerResult = document.querySelector('#playerResult');
    playerResult.textContent = `Player score: 0`;

    const computerResult = document.querySelector('#computerResult');
    computerResult.textContent = `Computer score: 0`;
    
    const gameMsg = document.querySelector('#gameMsg');
    gameMsg.textContent = 'New game started';
});