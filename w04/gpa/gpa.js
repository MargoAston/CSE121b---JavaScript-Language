function getGrades(inputSelector) {
    // get grades from the input box
    const grades = document.getElementById("grades").value;
    // clean up any extra spaces
    const cleanGrades = grades.replace(/\s+/g, '');
    // make the grades all upper case
    const upperCaseGrades = cleanGrades.toUpperCase()
    // split them into an array (String.split(','))
    const gradesArr = upperCaseGrades.split(',');

    // return grades
    return gradesArr
  }

function lookupGrade(letter) {
    // converts the letter grade to it's GPA point value and returns it

    if (letter === "A"){
        return 4;
    }
    else if (letter === "B"){
        return 3;
    }
    else if (letter === "C"){
        return 2;
    }
    else if (letter === "D"){
        return 1;
    }
    else{
        return 0;
    }
  }
  
function calculateGpa(grades) {
    // gets a list of grades passed in
    // convert the letter grades to gpa points

    const gpaPoints = grades.map(lookupGrade);
 
    // calculates the GPA
    let gpaSum = 0;
    for (let i= 0;  i < gpaPoints.length; i++ ){
        gpaSum += gpaPoints[i];
    }

    let gpa = gpaSum / gpaPoints.length;
    let gpaRounded = gpa.toFixed(2);

    // return the GPA
    return gpaRounded;
    
} 
  
  
function outputGpa(gpa, selector) {
    // takes a gpa value and displays it in the HTML in the element identified by the selector
    document.getElementById("output").innerHTML = gpa;
  }
  
const buttonElement = document.getElementById("submitButton");
function clickHandler(event) {
    // when the button in our html is clicked:
    // get the grades entered into the input()
    grades = getGrades();
    // calculate the gpa from the grades entered
    gpa = calculateGpa(grades);
    // display the gpa
    outputGpa(gpa, output);
  }
buttonElement.addEventListener("click", clickHandler); 