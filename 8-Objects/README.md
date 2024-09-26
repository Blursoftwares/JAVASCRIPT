# JavaScript Objects

## Overview
In this section, we will explore **objects**, one of the most important data types in JavaScript. Objects allow you to group related data and functionality together, making it easier to organize and manage complex information.

## Table of Contents

- [What are Objects?](#what-are-objects)
- [Creating and Using Objects](#creating-and-using-objects)
  - [Accessing Properties](#accessing-properties)
  - [Modifying Object Values](#modifying-object-values)
- [Conclusion](#conclusion)

## What are Objects?
In JavaScript, an **object** is a collection of properties. Each property is a key-value pair, where the key is a string (also known as the property name) and the value can be anything, such as a string, number, array, or even another object.

Think of an object as a way to group related information together. For example, if you have information about a car, such as its color, brand, and speed, you can represent this using an object.

### Example:
```javascript
let car = {
    color: "red",
    brand: "Toyota",
    speed: 120
};
```

In this example, `car` is an object that has three properties: `color`, `brand`, and `speed`.

---

## Creating and Using Objects

### Creating an Object
You can create an object using curly braces `{}` and defining the key-value pairs inside.

#### Example:
```javascript
let person = {
    name: "Alice",
    age: 25,
    isStudent: true
};
```

In this example, the `person` object has three properties: `name`, `age`, and `isStudent`.

---

### Accessing Properties

To access the values stored in an object, you can use **dot notation** or **bracket notation**.

#### Using Dot Notation:
```javascript
console.log(person.name); // Output: Alice
console.log(person.age);  // Output: 25
```

#### Using Bracket Notation:
```javascript
console.log(person["name"]); // Output: Alice
console.log(person["age"]);  // Output: 25
```

---

### Modifying Object Values

You can easily change the value of an object’s property by using dot notation or bracket notation.

#### Example:
```javascript
person.age = 26; // Modifies the 'age' property
console.log(person.age); // Output: 26

person["name"] = "Bob"; // Modifies the 'name' property
console.log(person.name); // Output: Bob
```

You can also add new properties to an object after it has been created.

#### Example:
```javascript
person.height = 170; // Adds a new 'height' property
console.log(person.height); // Output: 170
```

---

## Conclusion
Objects are a key part of JavaScript, allowing you to group related data together in a structured way. You can create objects to store properties, access them using dot notation or bracket notation, and modify or add new values as needed. Understanding objects will help you handle more complex data and build more powerful programs.

---

### Further Resources:
- [MDN Web Docs: Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [JavaScript.info: Objects](https://javascript.info/object)
```

