/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1, number2) {

    //Step 2: return the sum of the parameters.
    return (number1) + (number2);
}

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers(){
    const num1 = parseFloat(document.getElementById("addend1").value);
    const num2 = parseFloat(document.getElementById("addend2").value);

    // Step 4: Assign the return value to an HTML form element with an ID of sum
    const total = add(num1, num2);
    document.getElementById("sum").value = total;
}

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
const buttonElement = document.getElementById("addNumbers");

function addInput(event) {
    console.log(event);
    addNumbers();
}
buttonElement.addEventListener("click", addInput);



// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers

let subtract = function(subNumber1, subNnumber2) {
    //return the difference of the parameters.
    return (subNumber1) - (subNnumber2);
}

let subtractNumbers = function(){
    const sub1 = parseFloat(document.getElementById("minuend").value);
    const sub2 = parseFloat(document.getElementById("subtrahend").value);

    // Assign the return value to an HTML form element with an ID of difference
    const subTotal = subtract(sub1, sub2);
    document.getElementById("difference").value = subTotal;
}

const subButtonElement = document.getElementById("subtractNumbers");

let subtractInput = function(event) {
    console.log(event);
    subtractNumbers();
}
subButtonElement.addEventListener("click", subtractInput);


// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

let multiply = function(factor1, factor2) {
    //return the product of the parameters.
    return (factor1) * (factor2);
}

let multiplyNumbers = function(){
    const fact1 = parseFloat(document.getElementById("factor1").value);
    const fact2 = parseFloat(document.getElementById("factor2").value);

    // Assign the return value to an HTML form element with an ID of difference
    const productTotal = multiply(fact1, fact2);
    document.getElementById("product").value = productTotal;
}

const multiplyButtonElement = document.getElementById("multiplyNumbers");

let multiplyInput = function(event) {
    console.log(event);
    multiplyNumbers();
}
multiplyButtonElement.addEventListener("click", multiplyInput);


// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

let divide = function(dividend1, divisor2) {
    //return the product of the parameters.
    return (dividend1) / (divisor2);
}

let divideNumbers = function(){
    const div1 = parseFloat(document.getElementById("dividend").value);
    const div2 = parseFloat(document.getElementById("divisor").value);

    // Assign the return value to an HTML form element with an ID of difference
    const quotientTotal = divide(div1, div2);
    document.getElementById("quotient").value = quotientTotal;
}

const divideButtonElement = document.getElementById("divideNumbers");

let divideInput = function(event) {
    console.log(event);
    divideNumbers();
}
divideButtonElement.addEventListener("click", divideInput);

// Step 9: Test all of the mathematical functionality of the task3.html page. -- DONE --


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let today = new Date();
// Step 2: Declare a variable to hold the current year
let year = new Date().getFullYear();

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
today = new Date().getFullYear();
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.getElementById("year").innerHTML = "2022";

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.getElementById("array").innerHTML = numArr;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
const oddArr = numArr.filter(isOdd);

function isOdd(number){
    return (number % 2) !== 0;
};

document.getElementById("odds").innerHTML = oddArr;


// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
const evenArr = numArr.filter(isEven);

function isEven(number){
    return (number % 2) == 0;
};

document.getElementById("evens").innerHTML = evenArr;


// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
const arrSum = numArr.reduce(sumOfArr);

function sumOfArr(total, num) {
    return total + num;
}
document.getElementById("sumOfArray").innerHTML = arrSum;


// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const multArr = numArr.map(multiplyArray);
 
function multiplyArray(num) {
    return num * 2;
}
document.getElementById("multiplied").innerHTML = multArr;


// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"

const tempMultArr = numArr.map(multiplyArray);
const multSum = tempMultArr.reduce(sumOfArr);
document.getElementById("sumOfMultiplied").innerHTML = multSum;
