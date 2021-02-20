// constants

const wordArr = ["cheers", "warmly", "thanks"];
const maxWrong = 6;

// app state variables

let numWrong = 0;
let guessedWord = [];
let secretWord = [];

// cached elements

const input = document.getElementById("input");
const guessBtn = document.getElementById("btn");
const resetBtn = document.querySelector(".replay");
const wrongLetterBox = document.querySelector(".guessed");
const correctLetterBox = document.querySelectorAll(".correct");
const minutesLeft = document.querySelector(".num-score");

// event listeners

document.addEventListener("onload", init());
// resetBtn.addEventListener("click", reset());
// guessBtn.addEventListener("click", getLetter());

// functions

function init() {
    secretWord = wordArr[Math.floor(Math.random() * wordArr.length)];
    console.log(secretWord);
}

function getLetter() {

}

function checkWord() {

}

function assignCorrectLetter() {

}

function checkWin() {

}