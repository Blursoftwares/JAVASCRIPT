# **Project: Favorite Movies List**

## **Objective:**
Create a program that allows users to manage a list of their favorite movies. Users can add movies to the list, remove the last movie, and view the total number of movies in the list.

### **Project Requirements:**

1. **Create an Array** to store movie names.
2. **Allow users to:**
   - Add new movies to the list using the `push()` method.
   - Remove the last movie from the list using the `pop()` method.
   - Display the total number of movies using the `length` property.
3. **Use a loop** to display all the movies in the list.

---

<!-- ### **Step-by-Step Instructions:**

1. **Create an Array:**

   Start by creating an empty array called `favoriteMovies`.

   ```javascript
   let favoriteMovies = [];
   ```

2. **Add Movies to the Array:**

   Use the `push()` method to add movies to the array.

   ```javascript
   favoriteMovies.push("Inception");
   favoriteMovies.push("The Matrix");
   favoriteMovies.push("Interstellar");
   ```

3. **Display the List of Movies:**

   Use a `for` loop to display all the movies in the array.

   ```javascript
   for (let i = 0; i < favoriteMovies.length; i++) {
       console.log(favoriteMovies[i]);
   }
   ```

4. **Remove the Last Movie:**

   Use the `pop()` method to remove the last movie from the array.

   ```javascript
   favoriteMovies.pop();
   ```

5. **Display the Total Number of Movies:**

   Use the `length` property to display the total number of movies in the list.

   ```javascript
   console.log("Total movies: " + favoriteMovies.length);
   ```

---

### **Complete Code Example:**

```javascript
// Step 1: Create an empty array
let favoriteMovies = [];

// Step 2: Add movies to the list
favoriteMovies.push("Inception");
favoriteMovies.push("The Matrix");
favoriteMovies.push("Interstellar");

// Step 3: Display the list of movies
console.log("Favorite Movies:");
for (let i = 0; i < favoriteMovies.length; i++) {
    console.log(favoriteMovies[i]);
}

// Step 4: Remove the last movie
favoriteMovies.pop();

// Step 5: Display the updated list and the total number of movies
console.log("\nUpdated Movie List:");
for (let i = 0; i < favoriteMovies.length; i++) {
    console.log(favoriteMovies[i]);
}

console.log("\nTotal movies: " + favoriteMovies.length);
```

--- -->

### **Bonus Features (Optional):**

1. **User Input:**
   - Use `prompt()` to allow the user to add movies interactively.
   - Example: `let newMovie = prompt("Enter a movie name:"); favoriteMovies.push(newMovie);`

2. **Enhanced Display:**
   - Instead of logging to the console, display the movie list and total count on a webpage using HTML and JavaScript.

---

### **Expected Output:**

- The initial list of movies (after adding 3 movies) might look like:
  ```
  Favorite Movies:
  Inception
  The Matrix
  Interstellar
  ```

- After removing the last movie, the updated list might look like:
  ```
  Updated Movie List:
  Inception
  The Matrix

  Total movies: 2
