// variable in JS are contanaires to store data

let firstName = "Enock"; // string variable
let age = 30; // integer variable
let isStudent = true; // boolean variable (true or false)

console.log(firstName + ", " + age + ", " + "student: " + isStudent);

// let, const, var

// let: Block scoped (accessible within the specific block)
// const: Block scoped as well but cannot be modified after it's declared.
// var: Globally/funtion scoped (can be accessible everywhere after being declared)


// var example
var x = 10;
var x = 20;   // Re-declaration allowed
x = 30;       // Update allowed
console.log(x); // Output: 30


// let example
let y = 10;
// let y = 20; // Re-declaration NOT allowed
y = 25;       // Update allowed
console.log(y); // Output: 25


// const example
const z = 10;
// z = 20;     // Re-assignment NOT allowed
console.log(z); // Output: 10


// Block scope demonstration
if (true) {
  var a = 1;
  let b = 2;
  const c = 3;
}

console.log(a); // Works (var is function/global scoped)
// console.log(b); //  Error (let is block scoped)
// console.log(c); //  Error (const is block scoped)