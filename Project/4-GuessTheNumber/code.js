let randomNum = parseInt(Math.random()*100+1)

const submit = document.getElementById('subt')
const userInput = document.getElementById('guessField')

const guessSlot = document.querySelector('.guesses')
const Remaning = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const StratOver = document.querySelector('.resultParas')


const p = document.createElement('p')

let pevGue = []
let numGue = 1;

let playGame = true

if (playGame) {
    submit.addEventListener('click',function(e){
    e.preventDefault()
    const Guess = parseInt(userInput.value)
    validateGuess(Guess)
  })

}

function validateGuess(Guess){
    if (isNaN(Guess)) {
      alert('Please enter a valid number')
    } else if (Guess < 1) {
      alert('Please enter Positive Number')
    } else if (Guess > 100) {
      alert('Please enter number Number less then 100')
    } else {
      pevGue.push(Guess)
      if (numGue === 11) {
        displayGuess(Guess)
        displayMessage(`Game Over, Correct Number was ${randomNum}`)
        endGame()  
      } else {
        displayGuess(Guess)
        checkGuess(Guess)
      }
    }

}

function checkGuess(Guess){
    if(Guess === randomNum){
      displayMessage(`You got it right`)
      endGame()
    }else if(Guess < randomNum){
      displayMessage(`Your guess is too low`)
    }else if(Guess > randomNum){
      displayMessage(`Your guess is too high`)
    }
  }
function displayGuess(Guess) {
  userInput.value = ''
  guessSlot.innerHTML += `${Guess} , `
  numGue++;
  Remaning.innerHTML=`${10 - numGue}`
}

function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
   userInput.value = ''
   userInput.setAttribute('disabled','')
   p.classList.add('button')
   p.innerHTML=`<h2 id="newGame">Start New Game</h2>`;
   StratOver.appendChild(p)
   playGame = false
   newGame()
}


function newGame(){
 const newGamebtn = document.querySelector('#newGame')
 newGamebtn.addEventListener('click',function(){
   randomNum = parseInt(Math.random()*100+1)
   pevGue = []
   numGue = 1;
   guessSlot.innerHTML = ''
   Remaning.innerHTML=10
   lowOrHi.innerHTML = ''
   StratOver.removeChild(p)
   userInput.removeAttribute('disabled')
   playGame = true 
 })
}