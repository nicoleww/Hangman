// constants

const wordArr = ["cheers", "warmly", "thanks"];
const maxWrong = 6;

// app state variables

let numWrong = 0;
let guessedWord = ['_', '_', '_', '_', '_'];
let secretWord = [];

// cached elements

const input = document.getElementById("input");
const guessBtn = document.getElementById("btn");
const resetBtn = document.querySelector(".replay");
const wrongLetterBox = document.querySelector(".guessed");
const letter0 = document.querySelector(".letter1");
const letter1 = document.querySelector(".letter2");
const letter2 = document.querySelector(".letter3");
const letter3 = document.querySelector(".letter4");
const letter4 = document.querySelector(".letter5");
const letter5 = document.querySelector(".letter6");
const minutesLeft = document.querySelector(".num-score");
const message = document.querySelector("h2");

// event listeners

window.onload = init;
resetBtn.addEventListener("click", reset);
guessBtn.addEventListener("click", checkWord);

// functions

function init() {
    secretWord = wordArr[Math.floor(Math.random() * wordArr.length)];
    console.log(secretWord);
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

function checkWord() {
    
}

function assignCorrectLetter() {

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

// called functions

render();