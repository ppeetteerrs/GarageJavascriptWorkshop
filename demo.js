// console.log("Hello World");

let b = 2;
const c = 3;

let integer = 1;
let floatingNumber = 1.1111;
let binaryNumber = 0b111;
let stringValue = "string";

//console.log(binaryNumber);

let arith = 1 + 3 / 4 % 7;

let andCondition = 1 && 3;
let orCondition = 1 || 3;
// console.log(null && 1);
// False: 0, null, None, undefined, false

if (1 || 3) {
    // console.log("True");
} else if (1 || 2) {

} else {

}

let something = 1;

// switch (something) {
//     case 1:
//         console.log("Something is 1");
//         break;
//     case 2:
//         console.log("Something is 2");
//         break;
//     case 3:
//         console.log("Something is 3");
//         break;
// }

let array = [2, 1, 5, 13, 5, 4, 2];

// for (let item of array) {
//     console.log(item);
// }

function randomFunction(arg1, arg2) {
    return arg1 + arg2;
}

let randomFunction2 = (arg1) => {
    return arg1 * 2;
}

let doubleArray = array.map((item) => {
    return item * 2;
});

let filteredArray = array.filter((item) => {
    return item < 10;
});

array.sort((itema, itemb) => {
    return itema - itemb;
});

let NTUStudent = {
    matricNumber: "U12345678",
    course: "EEE",
    details: {
        age: 20,
        name: "Nobody"
    },
    GPA: [2.0, 3.0, 4.0, 5.0, 6.0],
    CGPA() {
        return this.GPA.reduce((prev, current) => {
            return prev + current
        }) / this.GPA.length
    }
};

let simplyString = "Hello World";
let splitString = simplyString.split("l");
let same = "The student studies " + NTUStudent.course;
let templateLiteral = `The student studies ${NTUStudent.course}`;


// Callbacks
// setTimeout(() => {
//     console.log("delayed");
// }, 2000);

function someoneElseFunction(func) {
    // do something
    let arg2 = 1 + 1;
    func(null, arg2);
}

someoneElseFunction((err, arg1) => {
});

// function wait5SecondsFunction() {
//     return new Promise(
//         (resolve, reject) => {
//             setTimeout(
//                 () => {
//                     resolve();
//                 },
//                 5000
//             );
//         }
//     );
// }

// async function sayAfter5Seconds(message) {
//     console.log("Function is called.");
//     await wait5SecondsFunction();
//     console.log(message);
// }




function readFile() {
    return new Promise(
        (resolve, reject) => {
            setTimeout(
                () => {
                    resolve("text file");
                },
                5000
            );
        }
    );
}

async function readFileData() {
    console.log("Function is called.");
    const textFile = await readFile();
    console.log(textFile);
}

readFileData();