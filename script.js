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


function playRound (playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    let result = 'win';

    if (playerSelection == computerSelection) {
        result = 'tie';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        result = 'loss';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        result = 'loss';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        result = 'loss'
    }

    return result
}

function game () {
    const playerSelection = window.prompt('Choose your weapon: rock, paper or scissors', 'rock');
    const rounds = 5;
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < rounds; i++) {
        let roundResult = playRound(playerSelection, computerPlay());

        if (roundResult == 'win') {
            playerScore++;
        } else if (roundResult == 'loss'){
            computerScore++;
        }
    }

    let gameResult = '';

    if (playerScore == computerScore) {
        gameResult = 'The game is tied.'
    } else if (playerScore > computerScore) {
        gameResult = 'You are the winner.';
    } else {
        gameResult = 'You are the loser.';
    }

    const score = `Score: ${playerScore} : ${computerScore}`;

    const endScreen = gameResult + ' ' + score;

    alert(endScreen);

}
game();
