// This is a single-line comment

/*
This is a multi-line comment*/

console.log("Hello, Node.js")

const studentName = "John Doe";
console.log('Student name: $(studentName)');
console.log("Student Name: ", studentName);
console.log('Student Name' + ':' + studentName);

let age = 20;
console.log('Student age: ${age}');

let isEnrolled = true;
let hasGraduated = false;

const studentDetails = {
    id: 1,
    name: "John Doe",
    section: "IT4C",
    isGraduated: false
}

console.log("Student Name: " + studentDetails.name);
console.log("Student Name: " +  studentDetails["Name"]);

const fruits = ["Apple", "Banana", "Cherry", "Orange", 1, "Grapes"];
console.log(fruits[1]);

const studentObject = {
    id: 2022341101,
    name: "Ed Villanueva",
    section: "IT4C",
    isGraduated: false,
    hobbies: ["Watching Movies", "Playing Games", "Coding"]
}

const hobbies = ["Watching Movies", "Playing Games", "Coding"];

console.log("Student Name: " + studentObject.name);
console.log("Student Number: " + studentObject.id);
console.log("Student Section: " + studentObject.section);
console.log("Is Student Graduated: " + studentObject.isGraduated);
console.log("Student Hobbies: " + studentObject.hobbies[1]);

let num = 5;
let strNum = "5";

console.log(num == strNum);
console.log(num === strNum);

function greet (name, age) {
    return `Hello ${name}!, age ${age}`;
}

function display (){
    console.log("Display function called");
}

function sum (firstNumber, secondNumber){
    return firstNumber + secondNumber;
}

console.log(greet("Ed"));
console.log(greet("Ed", 20));
console.log(sum(5, 10));

const add = (a, b) => {return a + b};

const subtract = (a, b) => a - b;

console.log(add(10, 5));
console.log(subtract(10, 5));