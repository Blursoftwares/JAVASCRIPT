Here’s a small and simple project based on **JavaScript Functions** that students can work on:

---

# **Project: Simple Tip Calculator**

## **Objective:**
Create a function that calculates the tip amount based on the bill total and the desired tip percentage. The function will also display the final amount (bill + tip) for the user.

### **Project Requirements:**
1. **Create a function** called `calculateTip` that:
   - Accepts two parameters: `billAmount` and `tipPercentage`.
   - Calculates the tip by multiplying the `billAmount` by the `tipPercentage`.
   - Returns the total amount (bill + tip).

2. **Use the function** to calculate the total when a user provides a bill amount and tip percentage.

---

### **Step-by-Step Instructions:**

1. **Create the Function:**

   Write a function `calculateTip` that takes in `billAmount` and `tipPercentage` as parameters and calculates the total cost including the tip.

   ```javascript
   function calculateTip(billAmount, tipPercentage) {
       let tip = billAmount * (tipPercentage / 100);
       let total = billAmount + tip;
       return total;
   }
   ```

2. **Prompt the User for Input:**

   Use `prompt()` to get input from the user for the bill amount and desired tip percentage.

   ```javascript
   let billAmount = parseFloat(prompt("Enter the bill amount:"));
   let tipPercentage = parseFloat(prompt("Enter the tip percentage:"));
   ```

3. **Call the Function and Display the Result:**

   Call the `calculateTip()` function with the user's inputs and display the result using `alert()`.

   ```javascript
   let totalAmount = calculateTip(billAmount, tipPercentage);
   alert("The total amount, including tip, is: $" + totalAmount.toFixed(2));
   ```

---

### **Bonus Features (Optional):**
1. **Validate Input:**
   - Ensure the user enters valid numbers for both the bill amount and tip percentage.
   - If not, display an error message and ask for input again.

2. **Enhance the User Interface:**
   - Use HTML and CSS to create a simple webpage where users can enter the bill amount and tip percentage in input fields instead of using `prompt()`.
   - Display the calculated total on the webpage rather than using an alert.

---

### **Example Output:**
1. If the user enters a bill amount of `$50` and a tip percentage of `20%`, the function will calculate:
   - Tip = $50 × (20 / 100) = $10
   - Total = $50 + $10 = $60
2. The program will display: `The total amount, including tip, is: $60.00`

---

### **Project Benefits:**
- Reinforces the concept of functions, parameters, and return values.
- Provides practice with getting user input and displaying output.
- Introduces real-world applications of functions in problem-solving.

---