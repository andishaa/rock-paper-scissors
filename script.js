// 
function computerPlay() {
    const choices = ['rock', 'paper', 'sciossors'];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}