// constants

const wordArr = ["warmly", "thanks"];
const maxWrong = 6;

// app state variables

let numWrong = 0;
let minutesLeft = 6;
let guessedWord = ['_', '_', '_', '_', '_', '_'];
let secretWord = ['', '', '', '', '', ''];
let wrongGuesses = [];
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
let wrong0 = document.querySelector(".wrong0");
let wrong1 = document.querySelector(".wrong1");
let wrong2 = document.querySelector(".wrong2");
let wrong3 = document.querySelector(".wrong3");
let wrong4 = document.querySelector(".wrong4");
let wrong5 = document.querySelector(".wrong5");
let message = document.getElementById("message");
let minutes = document.querySelector(".score-num");

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
        numWrong ++;
        minutesLeft--;
        minutes.textContent = `${minutesLeft}`;
        wrongGuesses.push(letter);
        checkWin();
    } else {
        correctSound.play();
        guessedWord.splice(isLetterInArray, 1, secretWord[isLetterInArray]);
        checkWin();
        console.log(guessedWord);
    } 
    console.log(numWrong);
    console.log(minutesLeft);

}

function checkWin() {
    let guessedWordCheck = guessedWord.join('');
    let secretWordCheck = secretWord.join('');
    if (numWrong >= maxWrong) {
        message.textContent = "Time's Up! Click Replay button to try again.";
    } else if (guessedWordCheck === secretWordCheck) {
        message.textContent = "Perfect! Click Replay if you'd like to play again." 
    }
}console.log(guessedWord);

function render() {
    setTimeout(render, 200);
    letter0.textContent = guessedWord[0];
    letter1.textContent = guessedWord[1];
    letter2.textContent = guessedWord[2];
    letter3.textContent = guessedWord[3];
    letter4.textContent = guessedWord[4];
    letter5.textContent = guessedWord[5];
    wrong0.textContent = wrongGuesses[0];
    wrong1.textContent = wrongGuesses[1];
    wrong2.textContent = wrongGuesses[2];
    wrong3.textContent = wrongGuesses[3];
    wrong4.textContent = wrongGuesses[4];
    wrong5.textContent = wrongGuesses[5];
}

function reset() {
    location.reload();
}

// invoked functions

render();