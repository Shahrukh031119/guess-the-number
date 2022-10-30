let randomNumber = Math.floor(Math.random()*100)+1;
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessField = document.querySelector(".guessField");
const guessSubmit = document.querySelector(".guessSubmit");
let guessCount = 1;
let resetButton;

function checkGuess(){
    const userGuess = Number(guessField.value);
    if(guessCount===1){
        guesses.textContent = "Previous guesses: ";
    }
    guesses.textContent += `${userGuess}` + " ";
    if(userGuess===randomNumber){
        lastResult.textContent = "Congratulations! You guessed it correctly!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        setGameOver();
    }
    else if(guessCount===10){
        lastResult.textContent = "Game Over!";
        lowOrHi.textContent = "";
        setGameOver();
    }
    else{
        lastResult.textContent = "Wrong Answer";
        lastResult.style.backgroundColor = "red";
        if(userGuess < randomNumber){
            console.log("low");
            lowOrHi.textContent = "Last guess was too low";
        }
        else if(userGuess > randomNumber){
            console.log("high");
            lowOrHi.textContent = "Last guess was too high";
        }
    }
    guessCount++;
    guessField.value = "";
    guessField.focus();
}

guessSubmit.addEventListener("click",checkGuess);

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start New Game";
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click",resetGame);
}

function resetGame(){
    guessCount = 1;
    const resetParas = document.querySelectorAll(".resultParas p");
    for (const resetPara of resetParas){
        resetPara.textContent = "";
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();
    lastResult.style.backgroundColor = "white";
    randomNumber = Math.floor(Math.random()*100)+1;
}