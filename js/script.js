//# DOM ELEMENTS 
const countdownEl = document.getElementById("countdown");
const instructionsEl = document.getElementById("instructions");
const numbersListEl = document.getElementById("numbers-list");
const answersFormEl = document.getElementById("answers-form");


//# RANDOM NUMBER GENERATOR

const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const randomNumbers = [];
for(let i = 0; i < 5, i++) {
    randomNumbers.push(generateRandomNumber(1,50));
}

// # COUNTDOWN
let secondsLeft = 3;

const handleCountdownTick = () => {
  secondsLeft--;

  if (secondsLeft <= 0) {
    secondsLeft = 0;
    clearInterval(clock);
    countdownEl.classList.add("d-none");
    answersFormEl.classList.remove("d-none");
    instructionsEl.innerText =
      "Inserisci i numeri visualizzati precedentemente";
  }

  countdownEl.innerText = secondsLeft;
};

const clock = setInterval(handleCountdownTick, 1000);
handleCountdownTick();
