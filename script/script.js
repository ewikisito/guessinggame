// Initialize variables
let attempts = 0
const maxAttempts = 10
const secretNumber = 24

const guessInput = document.getElementById('screen-child')
const submitButton = document.getElementById('btn')
const hintElement = document.getElementById('hint')
const attemptsElement = document.getElementById('attempts')

// Add event listener to the submit button
submitButton.addEventListener('click', userGuess)

// Function to check the user's guess
function userGuess () {
  // Get the user's guess and convert it to a number
  const userGuess = parseInt(guessInput.value)
  attempts++

  // Check if the guess is correct
  if (userGuess === secretNumber) {
    hintElement.textContent = `Congratulations! You guessed the correct number in ${attempts} attempts.`
    hintElement.style.color = 'green'
    disableGame()
  } else if (attempts === maxAttempts) {
    hintElement.textContent = `Game over! The correct number was ${24}.`
    disableGame()
  } else if (userGuess < secretNumber) {
    hintElement.textContent = 'Too low! Try a higher number.'
  } else {
    hintElement.textContent = 'Too high! Try a lower number.'
  }

  // Update attempts display
  attemptsElement.textContent = `Attempts: ${attempts}/${maxAttempts}`

  // Clear the input field
  guessInput.value = ''
}

// Function to disable the game after it ends
function disableGame () {
  guessInput.disabled = true
  submitButton.disabled = true
}