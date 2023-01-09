//task.js

// Margo Aston
//CSE 121B - lesson 6

/* This project will build an online spelling test. It will display a series of 10 pictures. The user will enter the corresponding word for each picture. Once the words are submitted the game will display the score. */

// Step 1: Declare and initialize a new variable to hold the current date

// Step 2: Declare a global array variable to store a list of spelling words and images

// Step 3: Create a function called getSpellingList. Make it an async function. This function will use the built-in fetch method. Create a variable to hold the response from fetch. The program will wait until it finishes
// - In the function, using the built-in fetch method, call an absolute URL. Create a variable to hold the response from fetch. The program wait until it finishes.

// Step 3: Declare an array function named gameBoard that accepts a list of words as an arry argument and does the following for each word:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the wordList's word property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples

//Step 4: Declare a function named output and does the following
// - gets the value of an HTML form control with the ID of studentWord
//  - Passes the value to the isCorrect function.
//  - Assign the return value to an HTML form element with an ID of isCorrect.

//Step 5: Add a "click" event listener to the HTML button with an ID of submitWord that calls the output function