# **Project: Personal Profile Manager**

## **Objective:**
Create a program that allows users to manage a **profile** object. The profile contains information such as the user’s name, age, and favorite hobby. Users can view the profile details, update certain properties, and add new information.

### **Project Requirements:**

1. **Create an Object** called `profile` to store user information such as:
   - `name` (string)
   - `age` (number)
   - `hobby` (string)
2. **Allow the user to:**
   - View the profile details.
   - Update the `name` and `age` using dot notation.
   - Add a new property, `favoriteColor`, to the object.
3. **Use a function** to update and display the profile.

---

### **Step-by-Step Instructions:**

1. **Create the Profile Object:**

   Create an object called `profile` to store basic information about the user.

   ```javascript
   let profile = {
       name: "John",
       age: 30,
       hobby: "Reading"
   };
   ```

2. **Display Profile Details:**

   Create a function to display the current details of the profile.

   ```javascript
   function displayProfile() {
       console.log("Name: " + profile.name);
       console.log("Age: " + profile.age);
       console.log("Hobby: " + profile.hobby);
       if (profile.favoriteColor) {
           console.log("Favorite Color: " + profile.favoriteColor);
       }
   }

   displayProfile(); // Call the function to display profile details
   ```

3. **Update Profile Properties:**

   Create a function that allows the user to update the `name` and `age` properties.

   ```javascript
   function updateProfile(newName, newAge) {
       profile.name = newName;
       profile.age = newAge;
       console.log("Profile updated successfully.");
   }

   // Example usage:
   updateProfile("Alice", 28); // Update name and age
   displayProfile(); // Display the updated profile
   ```

4. **Add a New Property:**

   Add a new property, `favoriteColor`, to the `profile` object.

   ```javascript
   function addFavoriteColor(color) {
       profile.favoriteColor = color;
       console.log("Favorite color added successfully.");
   }

   // Example usage:
   addFavoriteColor("Blue");
   displayProfile(); // Display the profile with the new property
   ```

---

### **Complete Code Example:**

```javascript
// Step 1: Create the profile object
let profile = {
    name: "John",
    age: 30,
    hobby: "Reading"
};

// Step 2: Function to display the profile details
function displayProfile() {
    console.log("Name: " + profile.name);
    console.log("Age: " + profile.age);
    console.log("Hobby: " + profile.hobby);
    if (profile.favoriteColor) {
        console.log("Favorite Color: " + profile.favoriteColor);
    }
}

// Step 3: Function to update name and age
function updateProfile(newName, newAge) {
    profile.name = newName;
    profile.age = newAge;
    console.log("Profile updated successfully.");
}

// Step 4: Function to add a new property (favorite color)
function addFavoriteColor(color) {
    profile.favoriteColor = color;
    console.log("Favorite color added successfully.");
}

// Example usage:
displayProfile(); // Display initial profile

updateProfile("Alice", 28); // Update name and age
displayProfile(); // Display updated profile

addFavoriteColor("Blue"); // Add favorite color
displayProfile(); // Display profile with new property
```

---

### **Bonus Features (Optional):**

1. **User Input:**
   - Use `prompt()` to allow the user to enter new values for the name, age, and favorite color.
   - Example: `let newName = prompt("Enter new name:"); profile.name = newName;`

2. **Validation:**
   - Add validation to check if the user is entering valid data (e.g., check if age is a number).

---

### **Expected Output:**

- Initially, the profile might look like:
  ```
  Name: John
  Age: 30
  Hobby: Reading
  ```

- After updating the profile and adding a new property, the output might look like:
  ```
  Name: Alice
  Age: 28
  Hobby: Reading
  Favorite Color: Blue
  ```

---
