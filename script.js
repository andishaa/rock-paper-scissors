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
    button.addEventListener('click', (event) => {
        playerSelection = button.textContent.toLowerCase();
        playRound();
    });
});

let computerScore = 0;
let playerScore = 0;

function playRound () {

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

    const results = document.querySelector('#results');
    results.textContent = `Your choice: ${playerSelection} VS computer's choice: ${computerSelection}. Result: ${result}`;
    results.append;
    
       if (result === 'You lost') {
        computerScore++;
    } else if (result === 'You won!'){
        playerScore++;
    }
    console.log(`Computer: ${computerScore}`);
    console.log(`player: ${playerScore}`);

}

// function game () {
//     const playerSelection = window.s('Choose your weapon: rock, paper or scissors', 'rock');
//     const rounds = 5;
//     let playerScore = 0;
//     let computerScore = 0;

//     for (let i = 0; i < rounds; i++) {
//         let roundResult = playRound(playerSelection, computerPlay());

//         if (roundResult == 'win') {
//             playerScore++;
//         } else if (roundResult == 'loss'){
//             computerScore++;
//         }
//     }

//     let gameResult = '';

//     if (playerScore == computerScore) {
//         gameResult = 'The game is tied.'
//     } else if (playerScore > computerScore) {
//         gameResult = 'You are the winner.';
//     } else {
//         gameResult = 'You are the loser.';
//     }

//     const score = `Score: ${playerScore} : ${computerScore}`;

//     const endScreen = gameResult + ' ' + score;

//     alert(endScreen);

// }
// game();
