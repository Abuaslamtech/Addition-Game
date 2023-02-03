let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let output = document.getElementById("output");
let submit = document.getElementById("submit");
let retry = document.getElementById("retry");
let timer = document.getElementById("timer");
let scoreb = document.getElementById("scoreb");

let rnum1;
let rnum2;
let sum;
let score = 0;
let countDownDate = new Date().getTime() + 15000; // 15 seconds in milliseconds

let countDownInterval;

function countDown() {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let seconds = Math.floor(distance / 1000);

  timer.innerHTML = seconds + "s";

  if (distance < 0) {
    clearInterval(countDownInterval);
    timer.innerHTML = "Time's up!";
    submit.setAttribute("disabled", "true");
  }
}

function generateNumbers() {
  rnum1 = Math.floor(Math.random() * 100);
  rnum2 = Math.floor(Math.random() * 100);
  num1.value = rnum1;
  num2.value = rnum2;
  sum = rnum1 + rnum2;
}

function checkAnswer() {
  if (output.value == sum) {
    clearInterval(countDownInterval);
    timer.innerHTML = "You won!";
    submit.setAttribute("disabled", "true");
    playAgain();
    score++;
    console.log(score);
  } else {
    if (score > 0) {
      score--;
      playAgain();
    } else {
      score = 0;
      playAgain();
    }
  }
  scoreb.innerHTML = score;
  console.log(score);
}

function playAgain() {
  generateNumbers();
  timer.innerHTML = "15s";
  output.value = "";
  submit.removeAttribute("disabled");
  countDownDate = new Date().getTime() + 15000;
  countDownInterval = setInterval(countDown, 1000);
}

countDownInterval = setInterval(countDown, 1000);
generateNumbers();
submit.addEventListener("click", checkAnswer);
retry.addEventListener("click", playAgain);
