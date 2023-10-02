'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //no input given by the user
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number Entered';
  }

  //when guess is correct
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#613895';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.getElementById('.check').disabled = true;
  }

  //when guess is higher than actual number
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Higher Value!';
      score--;
      document.querySelector('.score').textContent = score;
    } else
      document.querySelector('.message').textContent = '🫤 You lost the game';
  }

  //when guess is lower than actual number
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Lower Value';
      score--;
      document.querySelector('.score').textContent = score;
    } else
      document.querySelector('.message').textContent = '🫤 You lost the game';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  score = 20;

  document.querySelector('.message').textContent = 'Start Guessing....';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
