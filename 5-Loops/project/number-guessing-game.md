# **Project: Build a Number Guessing Game**

## **Objective:**
Create a number guessing game where the computer picks a random number between 1 and 10, and the player (user) has to guess it. The game should provide feedback for each guess and allow the user multiple attempts.

### **Project Requirements:**

1. **Random Number Generation:**
   - Use `Math.random()` to generate a random number between 1 and 10.
   
2. **Loop:**
   - Use a `while` loop or a `do-while` loop to allow the player to keep guessing until they guess the correct number.

3. **Input and Output:**
   - Prompt the user to enter their guess.
   - Give feedback if the guess is too high, too low, or correct.

4. **Break Condition:**
   - Use a `break` statement to exit the loop once the correct number is guessed.

---

<!-- ### **Step-by-Step Instructions:**

1. **Start with a Random Number:**
   ```javascript
   let randomNumber = Math.floor(Math.random() * 10) + 1;
   ```

2. **Ask the User for a Guess:**
   ```javascript
   let guess = parseInt(prompt("Guess a number between 1 and 10:"));
   ```

3. **Create a Loop to Continue Asking:**
   ```javascript
   while (guess !== randomNumber) {
       if (guess > randomNumber) {
           guess = parseInt(prompt("Too high! Try again:"));
       } else {
           guess = parseInt(prompt("Too low! Try again:"));
       }
   }
   ```

4. **End the Game When Correct:**
   ```javascript
   alert("Congratulations! You guessed the correct number: " + randomNumber);
   ```

--- -->

### **Bonus Features (Optional):**

- **Add a Limit on Guesses:**
  - Allow the user a maximum of 3 guesses, and if they don’t guess correctly, end the game and reveal the number.

<!-- - **Use a `for` Loop to Limit Guesses:**
  ```javascript
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  let guess;
  let attempts = 3;

  for (let i = 0; i < attempts; i++) {
      guess = parseInt(prompt("Guess a number between 1 and 10:"));
      if (guess === randomNumber) {
          alert("Congratulations! You guessed the correct number: " + randomNumber);
          break;
      } else if (guess > randomNumber) {
          alert("Too high!");
      } else {
          alert("Too low!");
      }
      if (i === attempts - 1) {
          alert("Sorry, you've run out of attempts. The number was: " + randomNumber);
      }
  }
  ```

--- -->

### **Expected Output:**
- The program will repeatedly prompt the user to guess a number.
- If the guess is too high or too low, the user gets another chance.
- If the guess is correct, the program congratulates the user and exits.

---

