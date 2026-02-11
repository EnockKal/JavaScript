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

console.log(user.firstName); // Enock
console.log(user.age); // 30

// adding properties
user.isSeniorCitizen = false; 

console.log(user["is admin"]);