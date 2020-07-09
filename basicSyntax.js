// Standard Input and Output
// let userInput = readline();
console.log(`${simpleString}`);

// Declaring variables
var a = 1;
let b = 2;
const c = 3;

// Data Types
let integerNumber = 1;
let floatingPointNumber = 1.123124;
let binaryNumber = 0b1111; // What is stored is the same as binaryNumber = 15

// Operators
    // Arithmetics
    let arithmetics = 1 + 3 / 4 % 7;
    // Not Allowed: let result = 1 + (2++);

// Conditions
    let condition = 1 && 3 || 5;
    let condition2 = true;
    if (condition) {
        // do something
    } else if (condition2) {
        // do something 2
    } else {

    }
    switch (something) {
        case 1:
            // do something
            break;
        case 2:
            // do sth else
            break;
        default:
            // default action
            break;
    }

// Arrays and Loops (Javascript arrays have no fixed sizes)
let array = [13, 1, 8, 4, 6, 3, 0, 12, 5, 9];
for (let item of array) {
    console.log(item);
}
let squareArray = array.map(item => Math.pow(item, 2));
let filteredArray = array.filter(item => item % 2);
array.sort((a,b) => a-b);

// Objects
let NTUStudent = {
    matricNumber: "U12345678",
    course: "EEE",
    details: {
        age: 20,
        name: "Nobody"
    },
    GPA: [2.0, 3.0, 4.0, 5.0, 6.0],
    CGPA() {
        return this.GPA.reduce((prev, current) => prev + current) / this.GPA.length
    },
    [Symbol("hi")]: "Asdf",
    [array]: "weird"
}
console.log(NTUStudent);

// Strings
let simpleString = "Hello World!";
let splitString = simpleString.split(" ");
let templateLiteral = `The student studies ${NTUStudent.course}`;

// Function & Arrow Syntax
function sayHi() {
    return "hi";
}
const sayShortHi = () => {
    return "hi";
}
function functionThatCallsAnotherFunction(func) {
    return func();
}
console.log(functionThatCallsAnotherFunction(sayHi));
console.log(functionThatCallsAnotherFunction(() => {
    return "hi";
}));

// Promises
let wait5Seconds = new Promise(
    (resolve, reject) => {
        setTimeout(resolve, 5000);
    }
);
function sayAfter5Secs(message) {
    wait5Seconds.then(() => {
        console.log(message);
    }, err => {
        console.log(err.message);
    });
    setInterval(() => {
        console.log("1 second has passed...");
    }, 1000);
}

sayAfter5Secs("I learnt promises!");