    // STEP 1: Initialize game variables
    // STEP 1a: Pick random number
    let randomNumber = Math.floor(Math.random() * 50 + 1) //Random num between 1 and 50

    // STEP 1b: Create variables to represent the three paragraphs above that will contain user feedback
    const guesses = document.querySelector("#guesses")
    const lowOrHigh = document.querySelector("#lowOrHi")
    const lastResult = document.querySelector("#lastResult")

    // STEP 1c: Create variables to represent the guessing form
    const guessField = document.querySelector("#guessField")
    const guessSubmit = document.querySelector("button")
    const guessesLeft = document.querySelector("#guessesLeft") //number of guesses left


    // STEP 1d: Create variables to initialize counter for number of guesses
    let guessCount = 1


    // STEP 2: Put focus on the field that allows user to type in guesses
    guessField.focus()
    guessesLeft.textContent = `You have ${10} guesses left`

    // STEP 3: Build a function to check the user's guess
    const checkGuess = () => {
    
            // STEP 3b: Create a variable to contain what number the user entered
            let usersGuess = Number(guessField.value)
            
            
            // STEP 3c: If this is the first guess, add some text to the screen as a label for listing previous guesses for reference
            if(guessCount === 1) {
                guesses.textContent = "Previous Guesses:"
            }
            
            
            
            // STEP 3d: Add the user's current guess to that list, plus a space
            guesses.textContent += ` ${usersGuess}`
            
            // STEP 3e: Conditional - the user guessed correctly
            if(usersGuess === randomNumber){
                // Output a success message, then end the game
                lastResult.textContent = `YOU GUESSED ${randomNumber} Correctly`
                lastResult.style.backgroundColor = "green"
                gameOver()
            }
                
            // STEP 3f: Conditional - the user is all out of guesses
            else if(guessCount === 10) {
                // Output an appropriate message, then end the game
                lastResult.textContent = "You are all out of guesses"
                lastResult.style.backgroundColor = "red"
                gameOver()
            }

            // STEP 3g: Conditional - the user's guess is incorrect
            else {
                // Output an appropriate message
                lastResult.textContent = "Wrong Number!"
                lastResult.style.backgroundColor = "orange"
                guessesLeft.textContent = `You have ${10-guessCount} guesses left`
                
                // If the guess is too low, let the user know
                if(usersGuess < randomNumber) {
                    lowOrHigh.textContent = "Too low"
                //if the guess is too low message will be in lowercase & color will be orange
                    lowOrHigh.style.textTransform = "lowercase"
                    lowOrHigh.style.color = "orange"
                }
                
                // Else if the guess is too high, let the user know
                else if (usersGuess > randomNumber) {
                    lowOrHigh.textContent = "Too high"
                //if the guess is too high message will be in UPPERCASE & color will be blue
                    lowOrHigh.style.textTransform = "uppercase"
                    lowOrHigh.style.color = "blue"
                }
            }
                       
            
            // STEP 3h: Increment the guess count, move focus to the guess field for the next guess, and clear out the old input
            guessCount++
            guessField.value = ""
            guessField.focus()
    }

        
    // STEP 4: Build a function called gameOver() to end the game
    const gameOver = () => {
    
        // STEP 4a: Disable the guessing field and submit button
        guessSubmit.disabled = true
        guessField.disabled = true
        
        
        // STEP 4b: Change the textContent of the #lowOrHi paragraph to a short phrase indicating that the game is over, and that the user can start a new game by refreshing the browser page or tab
        lowOrHigh.textContent = "Game Over, refresh the page to start a new game"
    }
        
    
    // STEP 3a: Add an event listener for the guess form button that calls the checkGuess function, then test that the event listener is working and that it invokes the function
    guessSubmit.addEventListener("click", checkGuess)
    
    // This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash