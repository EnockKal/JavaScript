/*
Arrow functions were introduced in ECMAScript 2015 (ES6)
as a concise alternative to traditional function expressions,
offering shorter syntax and distinct behavior regarding the this
keyword. They are primarily used to write more readable, concise,
and predictable code, especially for short functions and callbacks. 
*/

// 1. Stuntax:
// - Traditional function:
function myFunction1(){
    "do smthg"
}

// - Arrow function:
const myFunction2 = () =>{
    "do smthg"
}

//----------------------------------------------

// 2. example
// Traditional function
function square1(number){
    return number * number;
}
console.assert.log(square); // 25

// Arrow function:
// One parameter (parentheses optional):
const square2 = (number) => {
    return number * number;
}
// or 
/*
const square2 = (number) => return number * number;
or 
const square2 = number => return number * number;
*/

console.log(square2(5)); // 25

// Multiple parameters
const add = (a, b) => a + b;

//Concise body (implicit return):
const multiply = (a, b) => a * b; // Returns a * b implicitly

// Block body (explicit return):
const subtract = (a, b) => {
  const result = a - b;
  return result;
};
