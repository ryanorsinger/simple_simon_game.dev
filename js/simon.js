var userSequence = [];
var simonSequence = [];

var squares = document.getElementsByClassName('square');

function start() {
    simonSequence = [];
    next();
}

function next() {
    userSequence = [];
    addRandomSquareToSequence();
    playback();
}

function addRandomSquareToSequence() {
    var random = Math.floor(Math.random() * 4);
    simonSequence.push(squares[random].id);
}

function playback() {
    // disable user input
    disableInput();

    // update score
    document.getElementById('round').innerText = "Round: " + simonSequence.length;

    // create the counter variable
    var i = 0;

    // do the following at an interval based on the duration
    var intervalId = setInterval(function() {

        lightUp(document.getElementById(simonSequence[i]));

        i++;

        // check to see if the counter is equal to the game sequence length
        if (i >= simonSequence.length) {
            // stop repeating this interval
            clearInterval(intervalId);

            // call enableInput() function
            enableInput();
        }
    }, 1000);
}

function lightUp(element) {
    element.style.opacity = "1";
    var fadeoutTimerId = setTimeout(function() {
        element.style.opacity = "0.3";
    }, 600);
}

function compareSequences() {
    var sequenceError = false;

    // loop through the input sequence and perform the following:
    // check it the game sequence and input sequence match for a given offset
    // if they don't match set your error status variable to true and get out of the loop
    for (var i = 0; i < userSequence.length; i++) {
      if (simonSequence[i] == undefined || simonSequence[i] != userSequence[i]) {
        sequenceError = true;
        break;
      }
    }

    // check if there is an error
    // if there is, call gameOver()
    // otherwise, check if the input sequence is the same length as the game sequence
    // if it is, the user has completed the sequence, so clear the input sequence and call next()
    if (sequenceError) {
      gameOver();
    } else if (userSequence.length == simonSequence.length) {
      next();
    }
}

function gameOver() {
    // hard reload the page.
    location.reload(true);

    confirm("Game over. Play again?");
    if(confirm) {
        start();
    }
}

function stop() {
    alert('User stopped the game');
    location.reload(true);
}

function userClick() {
    var userChoice = this.id;

    lightUp(this);

    userSequence.push(userChoice);

    compareSequences();
}

function enableInput() {
    document.getElementById('0').addEventListener('click', userClick, false);
    document.getElementById('1').addEventListener('click', userClick, false);
    document.getElementById('2').addEventListener('click', userClick, false);
    document.getElementById('3').addEventListener('click', userClick, false);
}

function disableInput() {
    document.getElementById('0').removeEventListener('click', userClick, false);
    document.getElementById('1').removeEventListener('click', userClick, false);
    document.getElementById('2').removeEventListener('click', userClick, false);
    document.getElementById('3').removeEventListener('click', userClick, false);
}

document.getElementById('start').addEventListener('click', start, false);
document.getElementById('stop').addEventListener('click', stop, false);

// making squares disappear
// timing of showing the squares/buttons
// continuation of showing squares/buttons
// where to put comparison of sequences
// bug hunt some glitches
// listening for user input
