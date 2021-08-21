'use strict';

let message = document.querySelector('.message');

let randomNum = Math.floor(Math.random() * 20);
console.log(randomNum);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const playerGuess = document.querySelector('.guess').value;

  if (playerGuess > randomNum) {
    message.textContent = `Too high!`;
    score -= 1;
    document.querySelector('.score').textContent = score;
  } else if (playerGuess < randomNum) {
    message.textContent = `Too low!`;
    score -= 1;
    document.querySelector('.score').textContent = score;
  } else {
    message.textContent = `You won!`;
    highScore = score;
    document.querySelector('.number').textContent = randomNum;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('body').style = 'background-color:green';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('body').style = 'background-color:#222';
  randomNum = Math.floor(Math.random() * 20);
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = "?";
  message.textContent = 'Start guessing...';
  console.log(randomNum);
});
