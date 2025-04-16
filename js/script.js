//# DOM ELEMENTS
const countdownEl = document.getElementById("countdown");
const instructionsEl = document.getElementById("instructions");
const numbersListEl = document.getElementById("numbers-list");
const answersFormEl = document.getElementById("answers-form");
const messageEl = document.getElementById("message");
const inputContainer = document.getElementById("input-group");
const submitButton = document.querySelector("#answers-form button");

const inputList = document.querySelectorAll("#answers-form input");
console.log(inputList);

//# RANDOM NUMBER GENERATOR

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomNumbers = [];
while (randomNumbers.length < 5) {
  const generatedNumber = generateRandomNumber(1, 50);
  if (!randomNumbers.includes(generatedNumber)) {
    randomNumbers.push(generatedNumber);
    numbersListEl.innerHTML += `<li>${generatedNumber}<li>`;
  }
}

// # COUNTDOWN
let secondsLeft = 30;

const handleCountdownTick = () => {
  secondsLeft--;

  if (secondsLeft <= 0) {
    secondsLeft = 0;
    clearInterval(clock);
    countdownEl.classList.add("d-none");
    answersFormEl.classList.remove("d-none");
    numbersListEl.classList.add("d-none");
    instructionsEl.innerText =
      "Inserisci i numeri visualizzati precedentemente";
  }

  countdownEl.innerText = secondsLeft;
};

const clock = setInterval(handleCountdownTick, 1000);
handleCountdownTick();

//# FORM NUMBERS SUBMIT
let guessedNumbers = [];
answersFormEl.addEventListener("submit", (e) => {
  guessedNumbers = [];
  e.preventDefault();

  for (let i = 0; i < inputList.length; i++) {
    const currentInput = inputList[i];
    const currentValue = parseInt(currentInput.value);
    if (randomNumbers.includes(currentValue)) {
      guessedNumbers.push(currentValue);
    }
  }
  inputContainer.classList.add("d-none");
  submitButton.classList.add("d-none");

  numbersListEl.classList.remove("d-none");
  messageEl.classList.remove("text-danger");
  messageEl.innerText = `Il tuo punteggio è: ${guessedNumbers.length}. `;
  messageEl.innerText +=
    guessedNumbers.length > 0
      ? " Hai indovinato i numeri: " + guessedNumbers.join(", ")
      : " Non hai indovinato nessun numero";
});
