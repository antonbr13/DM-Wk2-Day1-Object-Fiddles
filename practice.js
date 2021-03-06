//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.
  //Code here

var me = {
  name :  "anton",
  age :  "25"
}

alert(me.name);



//NEXT PROBLEM
//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.
  //Code here
  
  var favoriteThings = {
    band :  "Rooney",
    food :  "sweet potatos",
    person :  "ari",
    book :  "the chalice and the blade",
    movie:  "1984",
    holiday :  "summer"
  }
  
  favoriteThings.car = "durango";
  favoriteThings["brand"] = "organic";
  
//Using square bracket notation:
// obj["key3"] = "value3";

// Using dot notation:
// obj.key3 = "value3";
  
favoriteThings.food = "lettuce";
favoriteThings["book"] = "50 Shades of Gray";


//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

  //Code here


//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

  //Code here









//NEXT PROBLEM
/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */
  //Code here
  var item = "firstPocket";
  
  var backPack = {
    
  }
 backPack[item] = "chapstick";
 alert(backPack);
 console.log(backPack);

//After you do the above, alert your entire backPack object.

  //Code here

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

  //Code here








//NEXT PROBLEM
//Create another 'me' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.
  //Code Here

var me = {
  name :  'anton',
  age :   '25',
  height :  '6 foot',
  gender :  'male',
  married :  'nope',
  eyeColor :  'blue',
  hairColor :  'brown',
}

function showObject(me) {
  var result = "";
  for (var prop in me) {
    if( me.hasOwnProperty(prop) ) {
      result +=  me[prop] + "\n";
    } 
  }              
  return result;
}


console.log(showObject(me));
// OUTPUT
// anton
// 25
// 6 foot
// male
// nope
// blue
// brown




//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

  //Code Here




//NEXT PROBLEM
//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.
  //Code Here

var album = {
  hey : '3:45',
  fate : '4:12',
  way : '3:35',
  ate : '4:19',
  bay : '2:59'
  
}

//Now, loop through your album object alerting every song title individually.

  //Code Here

function albumTitle( album ) {
  var result = "";
  for ( var prop in album ) {
    if ( album.hasOwnProperty(prop) ) {
      result += prop + "\n"; 
    }
  }
  return result;
}

console.log(albumTitle(album));

//  OUTPUT
// hey
// fate
// way
// ate
// bay



// A More Simple Way!!!
// _____________________

//Create another 'me' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.
​
var me = {
    name: "luke",
    age: 23,
    height: "74 inches",
    gender: "m",
    married: "no",
    eyeColor: "blue",
    hairColor: "blonde"
};
​
//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc
​
for (prop in me) {  
    alert(me[prop]);
}
​
​
​
​
//NEXT PROBLEM
​
​
​
​
//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.
​
var album = {
    girl: 120,
    "babe how's it going": 243,
    testing: 944,
    another: 239,
    peter: 232
};
​
//Now, loop through your album object alerting every song title individually.
​
for(prop in album) {
    alert(prop);
}





//NEXT PROBLEM
//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

  //Code Here

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

  //Code Here




//NEXT PROBLEM




var user = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

  //Code Here
for (var prop in user) {
  if (!(user[prop])) {
   delete user[prop];
  }
}

// b/c the property we are deleting is a variable --> we have to use dot notation


//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

  //Code Here
 user.name = 'anton';
 user.username = 'ab';

console.log(user);





//NEXT PROBLEM

var user = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

  //Code Here

//Now call the sayName method that's on the user object which will alert the users email

  //Code Here









//NEXT PROBLEM

//Create an empty object called methodCollection.

  //Code Here

/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

  //Code Here

//Now call your alertHello and logHello methods.

  //Code Here








//NEXT PROBLEM

// Create a function called MakePerson which takes in name, birthday, ssn as its parameters and returns a new object with all of the information that you passed in.

  //Code Here



//NEXT PROBLEM



// Create a function called MakeCard which takes in all the data it needs to make a Credit Card object and returns that object so that whenever you invoke MakeCard, you get a brand new credit card.

  //Code Here
  
  
  
//NEXT PROBLEM



/* As of this point you should have a MakePerson and a MakeCard function which returns you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard.
*/

  //Code Here

function bindCard(person, card) {
  var result = {};
  for (var prop in person) {
    result[prop] = person[prop];
  }
  for (var prop in card) {
    result[prop] = person[prop];
  }
  return result;
}


var fullPerson = bindCard(person, card);
console.log(fullPerson);

