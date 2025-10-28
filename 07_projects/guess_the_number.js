const numbers = Math.floor(Math.random() * 100 + 1);
// console.log(numbers);
const form = document.querySelector("form");
const guess = document.querySelector("#guess");
const submit = document.querySelector("#submit");
const message = document.querySelector("#message");
const reset = document.querySelector("#reset");
const required = document.querySelector("#required");

let attempt = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const val = parseInt(guess.value);

  if (val === "" || val < 0 || isNaN(val)) {
    // console.log("error");
    required.style.display = "inline-block";
  } else {
    attempt.push(val);
    if (attempt.length < 10) {
      // console.log(parseInt(val));
      // console.log(attempt);
      if (val === numbers) {
        submit.style.display = "none";
        reset.style.display = "inline-block";
        // console.log(attempt.toString());
        message.append(
          `You guess the correct one! and your previous guesses are ${attempt.toString()}`
        );
      } else if (val < numbers) {
        message.append(`📉 Too low! Try a higher number.`);
      } else if (val > numbers) {
        message.append(`📈 Too high! Try a lower number.`);
      }
    } else {
      submit.style.display = "none";
      reset.style.display = "inline-block";
      guess.value = "";
      message.append(
        `You exceed the maximum trial. correct number is ${numbers}`
      );
    }
  }
  guess.blur();
});
guess.addEventListener("focus", (e) => {
  guess.value = "";
  message.innerHTML = "";
  required.style.display = "none";
});

reset.addEventListener("click", () => {
  window.location.reload();
});
// document.addEventListener("keydown", (event) => {
//   if (event.key === "Tab") {
//     guess.value = "";
//     message.innerHTML = "";
//     required.style.display = "none";
//   }
// });

// =======================================Channel=================================================
// let randomNumber = parseInt(Math.random() * 100 + 1);

// const submit = document.querySelector('#subt');
// const userInput = document.querySelector('#guessField');
// const guessSlot = document.querySelector('.guesses');
// const remaining = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');
// const startOver = document.querySelector('.resultParas');

// const p = document.createElement('p');

// let prevGuess = [];
// let numGuess = 1;

// let playGame = true;

// if (playGame) {
//   submit.addEventListener('click', function (e) {
//     e.preventDefault();
//     const guess = parseInt(userInput.value);
//     console.log(guess);
//     validateGuess(guess);
//   });
// }

// function validateGuess(guess) {
//   if (isNaN(guess)) {
//     alert('PLease enter a valid number');
//   } else if (guess < 1) {
//     alert('PLease enter a number more than 1');
//   } else if (guess > 100) {
//     alert('PLease enter a  number less than 100');
//   } else {
//     prevGuess.push(guess);
//     if (numGuess === 11) {
//       displayGuess(guess);
//       displayMessage(`Game Over. Random number was ${randomNumber}`);
//       endGame();
//     } else {
//       displayGuess(guess);
//       checkGuess(guess);
//     }
//   }
// }

// function checkGuess(guess) {
//   if (guess === randomNumber) {
//     displayMessage(`You guessed it right`);
//     endGame();
//   } else if (guess < randomNumber) {
//     displayMessage(`Number is TOOO low`);
//   } else if (guess > randomNumber) {
//     displayMessage(`Number is TOOO High`);
//   }
// }

// function displayGuess(guess) {
//   userInput.value = '';
//   guessSlot.innerHTML += `${guess}, `;
//   numGuess++;
//   remaining.innerHTML = `${11 - numGuess} `;
// }

// function displayMessage(message) {
//   lowOrHi.innerHTML = `<h2>${message}</h2>`;
// }

// function endGame() {
//   userInput.value = '';
//   userInput.setAttribute('disabled', '');
//   p.classList.add('button');
//   p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
//   startOver.appendChild(p);
//   playGame = false;
//   newGame();
// }

// function newGame() {
//   const newGameButton = document.querySelector('#newGame');
//   newGameButton.addEventListener('click', function (e) {
//     randomNumber = parseInt(Math.random() * 100 + 1);
//     prevGuess = [];
//     numGuess = 1;
//     guessSlot.innerHTML = '';
//     remaining.innerHTML = `${11 - numGuess} `;
//     userInput.removeAttribute('disabled');
//     startOver.removeChild(p);

//     playGame = true;
//   });
// }
