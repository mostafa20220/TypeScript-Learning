"use strict";
//************************************************** */
//* Accessing the DOM Elements
// getting input values 
const numInput1El = document.getElementById('num1');
const numInput2El = document.getElementById('num2');
// getting the submit btn
const CalcBtnEl = document.querySelector('button');
//************************************************** */
//* Adding Event Listeners
CalcBtnEl.addEventListener('click', CalcBtnElHandler);
//************************************************* */
//* Implementing Events Handlers
function calcSum(num1, num2) {
    return num1 + num2;
}
function CalcBtnElHandler(e) {
    e.preventDefault();
    const result = calcSum(+numInput1El.value, +numInput2El.value);
    console.log(result);
}
//************************************************ */
//* trying with types 
let isDone;
const arr = [];
const names = [
    'ahmed',
    'mohamed',
    'ali',
    'hassan',
    'khaled',
    'mohamed',
];
arr.push(...names);
console.log(arr);
const person = {
    name: 'Mostafa',
    age: 25,
    hobbies: ['sports', 'programming'],
    country: 'Egypt'
};
person.country = 'South Sudan';
console.log(person);
//************************************************ */
// trying with nested objects and arrays
const results = [];
//* note:
// function type can be defined as follows:
// print:Function  // general function type
// print:()=>void  // more detailed function type
// print():void   // as be
const result = {
    result: 123,
    print() {
        console.log(this.result);
    }
};
results.push(result);
//************************************************ */
// trying void function
function printResult(num) {
    console.log('Result: ' + num);
}
//************************************************ */
// trying enum type, type, and union type, literal type
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const employee = {
    name: 'Mostafa',
    age: 25,
    role: Role.ADMIN
};
console.log(employee);
var juice;
(function (juice) {
    juice["ORANGE"] = "orange";
    juice["APPLE"] = "apple";
    juice["BANANA"] = "banana";
})(juice || (juice = {}));
;
//********************************************************** */
// trying classes
class Person {
    constructor(name, age, hobbies, country) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
        this.country = country;
    }
    print() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Hobbies: ${this.hobbies}, Country: ${this.country}`);
    }
}
// short hand for the above class
class Person2 {
    constructor(name, age, hobbies, country) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
        this.country = country;
    }
    print() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Hobbies: ${this.hobbies}, Country: ${this.country}`);
    }
}
//****************************************************************** */
// trying generic types
function logAndReturn(val) {
    console.log(val);
    return val;
}
logAndReturn('hello world');
logAndReturn(123);
//****************************************************************** */
