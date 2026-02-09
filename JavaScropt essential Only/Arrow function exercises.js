// 1. Convert simple function expressions into arrow functions.
function add(num1, num2){
    return num1 + num2;
}
console.log(add(5, 2)); //7
// Conversion to arrow function

const add2 = (num3, num4) => num3 + num4;

//2. Write an arrow function that implicitly returns an object literal.
const createObj1 = () => { return { name: "Bob" }; };

const createObj = () => ({ name: "Bob" });

// 3. Use map() with an arrow function to transform array elements.
const nums = [2, 4, 6];
const doubled1 = nums.map(function(n) { return n * 2; });

const double = nums.map(n => n * 2);

// 4. Use filter() with an arrow function to select elements.
const tasks = [{done: true}, {done: false}];
const completed1 = tasks.filter(function(task) { return task.done; });

const completed = tasks.filter(n => task.done);