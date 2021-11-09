function computerPlay() {
    const choices = ['rock', 'paper', 'sciossors'];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

// paper beats rock
// rock beats scissors
// scissors beat paper
// if they have duplicate choice they are tied
let playerWin = 0;
let computerWin = 0;

function playRound (playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return 'You are tied. Play again.';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerWin++;
        return 'You lose! Paper beats rock.';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerWin++;
        return 'You lose! Rock beats scissors.';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerWin++;
        return 'You lose! Scissors beats paper.';
    } else {
        playerWin++;
        return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}.`;
    }
}

function game () {
    const playerSelection = window.prompt('Choose your weapon: rock, paper or scissors', 'rock');

    for (let i = 0; i <5; i++) {
        playRound(playerSelection, computerPlay());
    }
    if (playerWin == computerWin) {
        console.log(`The game is tied. Score: ${playerWin} : ${computerWin}`);
    } else if (playerWin > computerWin) {
        console.log(`You are the winner. Score: ${playerWin} : ${computerWin}`);
    } else {
        console.log(`You are the loser. Score: ${playerWin} : ${computerWin}`);
    }
}
game();
