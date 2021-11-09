function computerPlay() {
    const choices = ['rock', 'paper', 'sciossors'];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

// paper beats rock
// rock beats scissors
// scissors beat paper
// if they have duplicate choice they are tied

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return 'You are tied. Play again.';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'You lose! Paper beats rock.';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'You lose! Rock beats scissors.';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You lose! Scissors beats paper.';
    } else {
        return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}.`;
    }
}
