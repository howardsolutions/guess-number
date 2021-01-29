'use strict';

// global score
let score = 20;
let highscore = 0;

// create a secret number,  a random number from 0 -> 20 
let secretNum = Math.trunc(Math.random() * 20) + 1; 

// display the message
const displayMessage = message => {
    document.querySelector('.message').textContent = message
}

// add Event listener === "CHECK" BTN =  each time the CHECK BTN clicked, the global score will decrease 1
document.querySelector(".check").addEventListener('click', () => {  
   const guess =  Number(document.querySelector('.guess').value)
 
   if (!guess) { // doesnt type any number
     displayMessage("oops! No number🤬")    

    // when users win the game  == type in correct number
   } else if (guess == secretNum) { 
    displayMessage("Yah! CORRECT! 💪🏻")
    document.querySelector('.number').textContent = secretNum
    document.querySelector('body').style.backgroundColor = "#60b347";
    document.querySelector('.number').style.width = '30rem'
    // set the highscore
    if(score > highscore) {
      highscore = score
      document.querySelector('.highscore').textContent = highscore
    }        
    
   } else if(guess !== secretNum) {  // when guess is too high || too low 
       if(score > 1) {
           let message = guess > secretNum ? "ah! TOO HIGH 🤟🏻" : "ah! TOO LOW 👇🏻"
           displayMessage(message)  
           score--; 
           document.querySelector('.score').textContent = score; 
       } else {
           displayMessage("You lose the game 🤜")  
           document.querySelector('.score').textContent = 0
       }
   } 
})

// RESET BTN 
document.querySelector('.again').addEventListener('click', () => {
    score = 20; 
    secretNum = Math.trunc(Math.random() * 20) + 1;
    
    // set init value
    displayMessage("Start guessing...");
    document.querySelector('.number').textContent = "?";
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value = "";

    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = "15rem";
})