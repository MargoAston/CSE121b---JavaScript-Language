/* Lesson 4 */

/* DATA */


// Step 1: Declare a new variable to hold information about yourself
const aBiography ={
    name: "Margo Aston",
    photo:'images/picture2.jpg',
    favFood: ['Strawberries', 'sushi', 'watermellon'],
    hobbies: ['gardening', 'reading'],
    placesLived: [
        {
          place: "San Diego, CA",
          length: "10 years",
        },
        {
            place: "Rocklin, CA",
            length: "2 years",
        },
        {
            place: "Lake Oswego, OR",
            length: "2 years",
        },
        {
            place: "Turlock, CA",
            length: "8 years",
        },    
    ],
};

//const myName = "margo"
//document.querySelector('#name').textContent = myName;

// Done -Step 2: Inside of the object, add a property named name with a value of your name as a string

// Done -Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string

// Done -Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )

// Done -Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

// Done -Step 6: Add another property named placesLived with a value of an empty array

// Done -Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

// Done -Step 8: For each property, add appropriate values as strings

// Done -Step 9: Add additional objects with the same properties for each place you've lived


/* OUTPUT */
// Set the name of the biography in the HTML
function setBioInfo(individual){
    console.log("in setBioInfo");
    
    document.querySelector("#name").textContent = individual.name;
    document.querySelector("#photo").setAttribute('src', individual.photo);
    document.querySelector("#photo").setAttribute('alt', individual.name);

    for (let i= 0; i < (individual.favFood).length; i++){

        var x = document.createElement("LI");
        var t = document.createTextNode(individual.favFood[i] + ", ");
        x.appendChild(t);
        document.getElementById("favorite-foods").appendChild(t);
    };

    for (let i= 0; i < (individual.hobbies).length; i++){

        var x = document.createElement("LI");
        var t = document.createTextNode(individual.hobbies[i] + ", ");
        x.appendChild(t);
        document.getElementById("hobbies").appendChild(t);
    };

    aBiography.placesLived.forEach((placeLived) => {
        let placesLivedPlace = document.createElement('dt'); //creating the element
        placesLivedPlace.textContent = placeLived.place; //This is accessing an object property in our array
       
        let placesLivedLength = document.createElement('dd');
        placesLivedLength.textContent = placeLived.length;
       
        document.querySelector('#places-lived').appendChild(placesLivedPlace); //Let's display this by grabbing the ID from our HTML
        document.querySelector('#places-lived').appendChild(placesLivedLength);
    })

}

// Done -Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name

// Done -Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo

// Done -Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo

// Done -Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element

// Done -Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Done -Step 6: Repeat Step 4 for each hobby in the hobbies property

// Done -Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

// Done -Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element


// Done -Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived

setBioInfo(aBiography);

