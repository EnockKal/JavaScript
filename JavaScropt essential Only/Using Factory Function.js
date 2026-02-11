// no need for the new keyword


function createUser(name, age){
    return{
        name,
        age,
        greet(){
            console.log(this.name)
        }
    }
}

const user1 = createUser("enock", 29);
const user2 = createUser("kalonji", 30);
console.log(user1, user2);

user1.greet() // enock

//---------------------------------------------

// Nested objects
let profile = {
    name: "Enock",
    company: "MyCompany",
    message: function() {
        console.log(`${this.name} works at ${this.company}`);
    },
    // anather object
    address: {
        city: "bridgeport",
        pin: 55555,
        state: "CT",
        country: "usa"
    }
}

profile.message();

console.log(profile); // uper object (profile)
console.log(profile.address); // nested object (address)
console.log(profile.address.country); // usa

// in operator
// checking if profile has a salary:
let isSalaryExist = "salary" in profile;
console.log(isSalaryExist); // false. bcz there is no salary

let isAdressExist = "address" in profile;
console.log(isAdressExist); // true