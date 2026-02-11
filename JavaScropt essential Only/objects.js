/*objects are a fundamental data type used to
store collections of related data and functions.
They are composed of properties (key-value pairs)
and methods (functions as property values), and are
central to the language's object-based paradigm.
*/


let user = {
    // properties
    firstName: "Enock",  // key, value
    age: 30, // key, value
    "is admin": false  // key, value
};

console.log(user.age); // 30

// adding properties
user.isSeniorCitizen = false; 
user["movie lover"] = true;

console.log(user);

console.log(user["is admin"]);

// modify properties
user.age = 34;
user["movie lover"] = false;

// deleting properties
//delete user["movie lover"];
//delete user.age;
console.log(user);

// dynamic retriving values of a key.
const someKey = "age";
console.log(user[someKey]); // 34 for age.

let car = prompt("which is your fav car");

let favCars ={
    [car]: 5
}

console.log(favCars);