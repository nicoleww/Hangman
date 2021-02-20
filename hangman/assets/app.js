// constants

const wordArr = ["cheers", "warmly", "thanks"];
const maxWrong = 6;

// app state variables

let numWrong = 0;
let guessedWord = ['_', '_', '_', '_', '_', '_'];
let secretWord = ['', '', '', '', '', ''];

// cached elements

const guessBtn = document.getElementById("btn");
const resetBtn = document.querySelector(".replay");
const wrongLetterBox = document.querySelector(".guessed");
const letter0 = document.querySelector(".letter0");
const letter1 = document.querySelector(".letter1");
const letter2 = document.querySelector(".letter2");
const letter3 = document.querySelector(".letter3");
const letter4 = document.querySelector(".letter4");
const letter5 = document.querySelector(".letter5");
const minutesLeft = document.querySelector(".num-score");
const message = document.querySelector("h2");
const letter = document.querySelector("#input").value;

// event listeners

window.onload = init;
resetBtn.addEventListener("click", reset);
guessBtn.addEventListener("click", checkLetter);

// functions

function init() {
    secretWord = wordArr[Math.floor(Math.random() * wordArr.length)].split('');
    console.log(secretWord);
}

function checkLetter() {
        secretWord.forEach(function(string) {
            if (letter === secretWord[0]) {
                guessedWord[0] = secretWord[0];
            } else if (letter === secretWord[1]) {
                guessedWord[1] = secretWord[1];
            } else if (letter === secretWord[2]) {
                guessedWord[2] = secretWord[2];
            } else if (letter === secretWord[3]) {
                guessedWord[3] = secretWord[3];
            } else if (letter === secretWord[4]) {
                guessedWord[4] = secretWord[4];
            } else if (letter === secretWord[5]) {
                guessedWord[5] = secretWord[5];
            }
        })
        console.log(guessedWord[5]);
        console.log(letter);
    }



function render() {
    setTimeout(render, 200);
    letter0.textContent = guessedWord[0];
    letter1.textContent = guessedWord[1];
    letter2.textContent = guessedWord[2];
    letter3.textContent = guessedWord[3];
    letter4.textContent = guessedWord[4];
    letter5.textContent = guessedWord[5];
}

function checkWin() {
    if (numWrong === maxWrong) {
        message.textContent = "Time's Up! Click Replay button to try again.";
    } else if (guessedWord.length === secretWord.length && guessedWord !== secretWord) {
        message.textContent = "Not quite, click Replay button to try again.";
    } else if (guessedWord.length === secretWord.length && guessedWord === secretWord) {
        message.textContent = "Perfect! Click Replay if you'd like to play again." 
    }
}

function reset() {
    location.reload();
}

// invoked functions

render();