/* ponder w03 */

/* callgbacks */


const newParagraph = document.createElement('p');
newParagraph.innerText = "Activity 2 & 3 ouput.";
document.body.appendChild(newParagraph);

// Activity 1 - Map
const steps = ['one', 'two', 'three'];
// Callback declaration
const newArr = steps.map(function(item) {
    return `<li>${item}</li>`;
});
document.getElementById("myList").innerHTML = newArr.join("");

// Activity 2 - convert letters grades to gpa values.
const grades = ['A', 'B', 'A'];

function convertGpa(grade) {
    
    if (grade === 'A') {
        return 4; 
    } else if (grade === 'B') {
        return 3;
    } else if (grade === 'C') {
        return 2;
    } else if (grade === 'D') {
        return 1;
    } else {
        return 0;
    }
};
// Callback declaration to create an array of gpa values
const gpaPoints = grades.map(convertGpa);


// Activity 3 - calculate average gpa from that arrray of gpaPoints

const pointsTotal = gpaPoints.reduce(function(total, item) {
    return total + item;
});
const gpa = pointsTotal / gpaPoints.length;
const avgGpa = gpa.toFixed(2);
// 
const newTotal = document.createElement('p');
newTotal.innerHTML = (" points " + `${gpaPoints}` + " - average gpa " +`${avgGpa}` )
document.body.appendChild(newTotal);

// Activity 4 - Filter
const fruitBasket = ['watermelon', 'peach', 'apple', 'tomato', 'grape']
const result = fruitBasket.filter(fruit => fruit.length < 6);
console.log(result);


// Activity 5 - indexOf
let numbers = [12, 34, 21, 54];
let luckNumber = 21;
if (numbers.indexOf(luckNumber) > 0) {
    console.log('Found your lucky number.')
} else {
    console.log('Your out of luck.')
}

