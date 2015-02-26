//Declaring Strict Mode
"use strict";

var simonSequence = [];
var userSequence = [];

var squares = document.getElementsByClassName('square');

function addRandomSquareToSequence() {
    var random = Math.floor(Math.random() * 4);
    simonSequence.push(squares[random]);
    return squares[random];
}

function animate(element) {
    element.style.opacity = "1";
    var fadeoutTimerId = setTimeout(function() {
        element.style.opacity = "0.3";
    }, 1000);
}

function userClick() {
    console.log(this);
    animate(this);
}

function simon(intervalId) {
    for(var i=0; i <= simonSequence.length; i++) {
        if (i == simonSequence.length) {
            clearInterval(intervalId);
        } else {
            console.log(simonSequence[i]);
            addRandomSquareToSequence();
        }
    }
}

var intervalId = setInterval(simon, 1000);

// simon makes selection, adds to sequence, then animates the sequence
// game listens for user selection(s), compares vs simon sequence


document.getElementById('0').addEventListener('click', userClick, false);
document.getElementById('1').addEventListener('click', userClick, false);
document.getElementById('2').addEventListener('click', userClick, false);
document.getElementById('3').addEventListener('click', userClick, false);
