var wins = 0;
var losses = 0;
var ties = 0;
var possibleChoices = ['R', 'P', 'S'];

var play = function () {
    // As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.
    var promptValue = prompt('Enter R, P, or S');

    if (!promptValue.length) {
        alert('Enter a valid character.');
        playAgain('tryAgain');
        return;
    }

    var userChoice = promptValue.charAt(0).toUpperCase();

    if (!possibleChoices.includes(userChoice)) {
        alert('Please enter R, P, or S');
        playAgain('tryAgain');
        return;
    }

    // As a user, I expect the computer to choose R, P, or S in return.
    var random = Math.floor(Math.random() * possibleChoices.length);
    var computerChoice = possibleChoices[random];

    // If user plays Paper and computer plays Rock = user wins
    // If user plays Scissors and computer plays Paper = user wins
    // If user plays Rock and computer plays Scissors = user wins
    if (
        userChoice === 'P' && computerChoice === 'R' ||
        userChoice === 'S' && computerChoice === 'P' ||
        userChoice === 'R' && computerChoice === 'S'
    ) {
        alert('You Win');
        wins++;
    }
    // If user plays Scissors and computer plays Rock = comp wins
    // If user plays Paper and computer plays Scissors = comp wins
    // If user plays Rock and computer plays Paper = comp wins
    else if (
        userChoice === 'S' && computerChoice === 'R' ||
        userChoice === 'P' && computerChoice === 'S' ||
        userChoice === 'R' && computerChoice === 'P'
    ) {
        alert('Computer Wins');
        losses++;
    }
    // If user plays Rock and computer plays Rock = tie
    // If user plays Paper and computer plays Paper = tie
    // If user plays Scissors and computer plays Scissors = tie
    else {
        alert('It\'s a tie');
        ties++;
    }

    // As a user, I want to see my total wins, ties, and losses after each round.
    alert('Wins: ' + wins + '\nLosses: ' + losses + '\nTies: ' + ties);
    playAgain();
};

var playAgain = function (type) {
    // As a user, I want the option to play again whether I win or lose.
    var message = 'Would you like to play again?';

    if (type === 'tryAgain') {
        message = 'Try again';
    }

    var willPlayAgain = confirm('Would you like to play again?');
    if (willPlayAgain) {
        play();
    }
}

play();