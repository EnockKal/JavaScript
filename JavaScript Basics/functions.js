// a function is a block of code used to be use and reused after being called.
function sayHello(){
    console.log("Hello world");
}

sayHello(); // calling the function
sayHello(); // can be called many time

//------------------------------------------------

// function with parameter
function sayHi(name){
    console.log("Hi" + name);
}

sayHi("Enock") // will pass "enock to the parameter and will print hi enock"
sayHi("Tom") // print hi Tom (easy to reuse the code)

function addition(num1, num2){
    console.log(num1 + num2);
}

addition(2, 4) // print 6
addition(10, 5)// print 15
