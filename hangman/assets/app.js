// constants

const wordArr = ["warmly", "thanks"];
const maxWrong = 6;

// app state variables

let numWrong = 0;
let minutesLeft = 6;
let guessedWord = ['_', '_', '_', '_', '_', '_'];
let secretWord = ['', '', '', '', '', ''];
let correctSound = new Audio('correct.mp3');
let thinkingSound = new Audio('hmm.mp3');

// cached elements

let guessBtn = document.getElementById("btn");
let resetBtn = document.querySelector(".replay");
let wrongLetterBox = document.getElementById("guessed");
let letter0 = document.querySelector(".letter0");
let letter1 = document.querySelector(".letter1");
let letter2 = document.querySelector(".letter2");
let letter3 = document.querySelector(".letter3");
let letter4 = document.querySelector(".letter4");
let letter5 = document.querySelector(".letter5");
let message = document.getElementById("message");
let minutes = document.querySelector(".num-score");

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
    let letter = document.querySelector("#input").value;
    let isLetterInArray = secretWord.indexOf(letter);
    if (isLetterInArray === -1) {
        thinkingSound.play();
        minutesLeft--;
        minutes.textContent = `${minutesLeft}`;
        wrongLetterBox.textContent = `${letter}`;
        checkWin;
    } else {
        correctSound.play();
        guessedWord.splice(isLetterInArray, 1, secretWord[isLetterInArray]);
        checkWin;
    } 
    console.log(numWrong);
    console.log(minutesLeft);

}

function checkWin() {
    if (numWrong >= maxWrong) {
        message.textContent = "Time's Up! Click Replay button to try again.";
    } else if (guessedWord.length === secretWord.length && guessedWord !== secretWord) {
        message.textContent = "Not quite, click Replay button to try again.";
    } else if (guessedWord.length === secretWord.length && guessedWord === secretWord) {
        message.textContent = "Perfect! Click Replay if you'd like to play again." 
    }
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

function reset() {
    location.reload();
}

// invoked functions

render();