//************************************************** */
//* Accessing the DOM Elements

// getting input values 
const numInput1El = document.getElementById('num1') as HTMLInputElement;
const numInput2El = <HTMLInputElement> document.getElementById('num2');

// getting the submit btn
const CalcBtnEl = document.querySelector('button')!;


//************************************************** */
//* Adding Event Listeners

  CalcBtnEl.addEventListener('click', CalcBtnElHandler);



//************************************************* */
//* Implementing Events Handlers

function calcSum(num1:number, num2:number){
  return num1 + num2;
}

function CalcBtnElHandler(e: Event){
  e.preventDefault();
  const result = calcSum(+numInput1El.value,+numInput2El.value)
  console.log(result);
}


//************************************************ */
//* trying with types 

let isDone: false;

const arr : Array<any> = [
  ]
  
  const names :string[] = [
      'ahmed',
      'mohamed',
      'ali',
      'hassan',
      'khaled',
      'mohamed',
    ]
    
    arr.push(...names);
    
    console.log(arr);
    
    //************************************************ */
interface IPerson {
  name:string,
  age:number,
  hobbies: string[],
  country:string
}

//* note:
// the naming convention for interfaces in C# is PascalCase like:
// interface IPerson
// the naming convention for interfaces in TS is camelCase like:
// interface iPerson

type TPerson = {name:string,age:number,hobbies: string[],country:string};

const person : IPerson = {
  name: 'Mostafa',
  age: 25 ,
  hobbies: ['sports', 'programming'],
  country: 'Egypt'
};

person.country = 'South Sudan';

console.log(person);

//************************************************ */
// trying with nested objects and arrays


const results: {}[]=[];

//* note:
// function type can be defined as follows:
// print:Function  // general function type
// print:()=>void  // more detailed function type
// print():void   // as be


const result : {result:number, print:()=>void}  = {
  result: 123,
  print(){
    console.log(this.result);
  }
};

results.push(result);



//************************************************ */


// trying void function
function printResult(num:number):undefined{
  console.log('Result: ' + num);
}


//************************************************ */
// trying enum type, type, and union type, literal type

enum Role {ADMIN, READ_ONLY, AUTHOR};

interface EmployeeType {
  name:string,
  age:number,
  role:Role
}


const employee : EmployeeType = {
  name: 'Mostafa',
  age: 25 ,
  role: Role.ADMIN
};

console.log(employee);

enum juice {ORANGE='orange', APPLE='apple', BANANA='banana'};
type juiceType = 'orange' | 'apple' | 'banana';

//********************************************************** */
// trying classes




class Person {
  private name:string;
  private age:number;
  private hobbies: string[];
  private country:string;

  constructor(name:string, age:number, hobbies:string[], country:string){
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
    this.country = country;
  }

    print(){
      console.log(`Name: ${this.name}, Age: ${this.age}, Hobbies: ${this.hobbies}, Country: ${this.country}`);
  }

}


// short hand for the above class
class Person2 {
  constructor(public name:string, public age:number, public hobbies:string[], public country:string){}

  print(){
    console.log(`Name: ${this.name}, Age: ${this.age}, Hobbies: ${this.hobbies}, Country: ${this.country}`);
  }
}

//****************************************************************** */
// trying generic types

function logAndReturn<T>(val:T){
  console.log(val);
  return val;
}

logAndReturn<string>('hello world');
logAndReturn<number>(123);

//****************************************************************** */
