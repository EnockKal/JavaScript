// > greater tha
// < less than
// == equal
// >= greater or equal than
// <= less or equal than
// != not equal

let x = 10;

console.log(x > 7); // true
console.log(x < 7); // false
console.log(x == 100); // false
console.log(x >= 20); // false
console.log(x <= 100); // true
console.log(x != 10); // false, bcz x is 10 so it's equals to 10.

// stricks equality and inequality
console.log(x == "10"); // true, bcz it doesn't check the datatype
console.log(x === "10"); // false, bcz === compare the datatype of the value as well. (stricks equality)
