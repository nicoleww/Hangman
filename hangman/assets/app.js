// constants

const wordArr = ["cheers", "warmly", "thanks"];
const maxWrong = 6;
const lose = numWrong >= maxWrong;

// app state variables

let numWrong = 0;
let guessedWord = [];
let secretWord = [];

// cached elements

const input = document.getElementById("input");
const guessBtn = document.getElementById("btn");
const resetBtn = document.querySelector("replay");
const wrongLetterBox = document.querySelector("guessed");
const correctLetterBox = document.querySelectorAll("correct");
const minutesLeft = document.querySelector("num-score");

// event listeners

document.addEventListener("onload", init());
resetBtn.addEventListener("click", reset());
guessBtn.addEventListener("click", getLetter());

// functions