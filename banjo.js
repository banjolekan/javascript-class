// JAVASCRIPT VARIABLES
// var
var firstName = "Prince";
firstName = "Paul";
console.log(firstName);
// let
// const (immutable)
const daniel = 20000000;
console.log(daniel);

// JAVASCRIPT DATA TYPES

// 1. Number
var age = 25.45;
// 2. Boolean
var isMarried = true;
// 3. String
var who =
  " My name is Prince's Charming and I am related to Paul but no related to Oluwabunmi!!! ";
console.log(who);
// 4. Null
var infinity = null;
// 5. Undefined
var electricityInNigeria;
console.log("Is there electricity in Nigeria? ", electricityInNigeria);
// 6. Object
var employee = {
  firstName: "John",
  lastName: "Doe",
  age: 24,
  gender: "Male",
  isMarried: true,
  nationality: "Spain",
  address: "Barcelona",
};

console.log(employee.age);

// JAVASCRIPT OPERATORS
// 1. Arithmetic Operators (+, -, /, *, %, ++, --)

var a = 50;
var b = 20;

console.log("Addition : ", a + b);
console.log("Subtraction : ", a - b);
console.log("Division : ", a / b);
console.log("Multiplication : ", a * b);
console.log("Modulus : ", a % b);

a++; // Postfix increment (++a)
b--; // Prefix decrement

console.log(++a);
console.log(--b);
console.log(a);
// Assignment Operators (=, -=, +=, *=, /=)
var c = 10;
var d = 4;

d /= c;

console.log(d);

// Create 2 variables and find the sum, multiplication and modulus of both values.

// COMPARISON OPERATORS (>, <, ==, ===, >=, <=, !=, !==)

var ab = 10;
var bc = "10";

console.log(ab === bc);

// Compare if two variables are equal, not equal and greater or less than.

// LOGICAL OPERATORS (!, &&, ||)

const agee = false;

console.log(!agee);

// var  x = 10;

// console.log((x>=20) || (x>30))

// Check if a number is even using the logical AND operator
// Check if a number is between 10 and 20 using the logical AND operator
// Check if  a number is positive using the logical OR operator
// Check if a string is either "hello" or "world" using the logical OR operatror

// const evenNumber = 9;
// const thisIsEven = (evenNumber % 2 ===0) && 'Even' || 'Odd';

// console.log(thisIsEven)

// JAVASCRIPT CONDITIONAL STATEMENT

if ("expression") {
  // Stements to be outputed if the condition is true
}

const licenseAge = 19;

if (licenseAge > 20) {
  console.log("You are eligible for a drivers license!!!");
} else {
  console.log("Sorry you are not eligible yet");
}

const temperature = 30;

if (temperature < 0) {
  console.log("It's freezing outside!");
} else if (temperature >= 0 && temperature < 10) {
  console.log("Cold outside!");
} else if (temperature >= 10 && temperature <= 50) {
  console.log("Perfect weather for walking!!");
} else {
  console.log("Hot outside!!");
}

// SWITCH STATEMENT

switch ("expression") {
  case "condition":
    // code block to be executed if expression matches "value"
    break;
  case "condition":
    // another code block
    break;
  default:
  // code block to be executed if no match found
}

const weight = 10;

switch (true) {
  case weight <= 1:
    console.log("Shipping cost: $4.50");
    break;
  case weight <= 10:
    console.log("Shipping cost: $10.00");
    break;
  case weight <= 15:
    console.log("Shipping cost: $12.00");
    break;
  default:
    console.log("Shiiping cost: $20.00");
}

const day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Day!");
}

const score = 30;

let grade;

switch (true) {
  case score >= 90:
    grade = "A";
    break;
  case score >= 80:
    grade = "B";
    break;
  case score >= 70:
    grade = "C";
    break;
  case score >= 60:
    grade = "D";
    break;
  case score >= 50:
    grade = "E";
    break;
  default:
    grade = "F";
}

console.log("Your grade is", grade);

// JAVASCRIPT LOOP

// WHILE LOOP
// while ("expression"){
//     // Statement to be executed if true
// }

var i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
console.log("It STOPPED");

// DO WHILE LOOP
var we = 1;

do {
  console.log(we);
  we++;
} while (we <= 10);

// FOR LOOP

// for ('initialization'; 'test condition'; 'iteration statement'){
//     // Statements to be executed if test condition is true
// }

var counting;

for (counting = 0; counting <= 30; counting++) {
  console.log(counting);
}

// LOOP CONTROL

// break statement
/* This statement terminates the loop and transfers execution to the statement following the loop */

var x = 0;
while (x < 6) {
  if (x == 4) {
    break;
  }
  console.log("The number is: ", x);
  x++;
}

console.log("This is after the loop");

// CONTINUE
/* The continue statement causes a jump in the execution of code, by skipping over the remaining statements in the current iteration of a loop and immediately STATEMENT*/
/* The continue statement causes a jump in the execution of code, skipping the rest of that iteration's code and immediately executing the next iteration statement*/

var plenty = 1;

while (plenty < 20) {
  plenty = plenty + 1;
  if (plenty == 10) {
    continue;
  }
  console.log(plenty);
}



// JAVASCRIPT FUNCTION
// CONCATENATION
console.log("I need an investor!!!! ")

function banjo (name, age){
  return ("My name is " + name + " and i am " + age + " years old!!!");
};

console.log(banjo('Richard', 30));

// Function with parameters
var lateComingStudent = "SoTech Innovations";

function howManyBanjosNeeded (numOfBanjos) {
  var message = "";
  for (i=0; i< numOfBanjos; i++) {
    message += "We need another banjo!\n"
  };
  return message;
};

console.log(howManyBanjosNeeded(5));  


// TERNARY

const number = -10;


const result = number >=0 ? "Positive" : 'negative';

console.log(result)

function leapYear(year){
  // if ((year % 4 == 0 && year % 100 != 0) || year % 400 ==  0) {
  //   return true;
  // } else {
  //   return false;
  // }
  return (year % 4 == 0 && year % 100 != 0) || year % 400 ==  0;
}

console.log(leapYear(2013))

const temperature1 = 25;

const weather = temperature1 > 30 ? 'Hot' : temperature1 >20 ? 'Warm' : 'Cool';

console.log(weather)


// CLASS TASK ON FUNCTION
// 1. Calculate the area of a reactangle
// 2. Check if a number is even or odd
// 3.  Calculate the are of a circle
// 4. Calculate the perimeter of a square
// 5. Calculate the volume of a sphere
// 6. Claculate the perimeter of a triangle

// HINT: Find the formuklar for calculating each of the above shapes.


// / 2. check if a number is even or odd
function isEven (number){
    return number % 2 === 0;
     }
console.log(isEven(7))

//     function isOdd (number){
//     }
//     console.log(isEven(5));
//     //REGTANGLE
  function areaReactangle(a,b){
        console.log(a*b);
    }
  console.log(areaReactangle(5,9))
//     //function to calculate the area of a circle
    function findArea(r){
const pi = 3.14159265358979323846;
return pi * r * r;
    }

    console.log(findArea(10))

//     const radius = 5;
//     const area = findarea(radius);
//     console.log("Area of circle is: ${area}");
//     // PERIMETER
// function findperimeter(side){
//     return 4 * side;
// }


// JAVASCRIPT ARRAY
// Array constructor
// var fruits = new Array("apple", "orange", "mango");
// Array literal
var fruits = ["apple", "orange", "banana", "mango", "cherry"]
console.log("The length of fruit array is:", fruits.length);

console.log(fruits.unshift('Beans'))

console.log(fruits)
// Create an array of different data, and console log the output. Also find the length of each array.

// var employees =[
//   {
//     name:"John", 
//     age:30,
//     class: 'SS3'
//   },
//   {
//     name:"Jane", 
//   age:20
// },
//   {
//     name: "Ben",
//    age: 35
//   },

// ]

// console.log(employees[2])

// Create 4 arrays and apply the shift, pop, unshift and push method to the arrays

// JAVASCRIPT OBJECT

const person = {
  name: 'John',
  age: 30,
  job: 'Mobile App Developer'
}

console.log(person['job'])


const dog = {
  breed: 'Pitbull',
  color: 'black',
  bark: function () {
    console.log('Woof Woof')
  }
}

console.log(dog.bark())

const book = {};

book.title = "MindShift";
book.author = 'Daniel'

console.log(book)

// Object of an object
const student = {
  name: 'Alice',
  grades: {
    math: 90,
    english: 95,
    science: 85
  }
}

console.log(student.grades.english)
const JsonStudent = JSON.stringify(student)
console.log(JsonStudent)

// JSON (JavaScript Object Notation)

const rawJsonString = '{"name": "John", "age": 30}'

const convertedIntoObject = JSON.parse(rawJsonString);

console.log(convertedIntoObject)


// CALLBACK AND ASYNCHRONOUS JAVASCRIPT

console.log("Program 1: Start");

console.log("Program 2: Start");

setTimeout(()=>{
  console.log("This third program has been delayed by 10 seconds")
}, 10000);

setTimeout(()=>{
  console.log("This fourth program has been delayed by 5 seconds")
}, 5000);

console.log("Program 5: Start")

// CALLBACK

function greet(name, callback){
  console.log("Hello" + name)
  callback()
}

function sayGoodbye(){
  console.log('Goodbye')
}

console.log(greet("Moses", sayGoodbye))


function fetchData(callback) {
  setTimeout(()=>{
    callback("Data fetched")
    callback()
  }, 3000)
}

function processData() {
  console.log("Data processed")
}

fetchData(processData)

// JAVASCRIPT PROMISE

const fetchinData = new Promise ((resolve, reject) => {
  setTimeout(()=>{
    resolve("Data fetched")
  }, 2000)
});

fetchinData.then(data =>{
  console.log(data);
}).catch(error =>{
  console.log(error);
})


// Create an object representing a book with properties for title, author, and year. Then, log the author's name to the console.
// Add a new property for genre to the book object.
// Convert a JavaScript object into a JSON string and then parse it back into an object. Log the resulting object to the console.
// Write a function that takes two numbers and a callback function. The function should call the callback with the sum of the two numbers.
// Create an array of numbers and calculate the sum of all elements. Log the sum to the console.
// Write a function that takes a number and a callback to square the number.
// Check if a username and password match predefined values.


// ES6 FEATURES


// Arrow function
function greetMe () {

}

const add = function (a,b){
return a+b
}

console.log(add(10,20))

const add1 = (a,b)=>{
return a+b
}

console.log(add1(10,15))

// TEMPLATE LITERALS/STRING

const name1 = 'James Bond';

const message =  ` Hello ${name1}`

console.log(message)


const product = 'laptop';
const price = 1000;

const statement = `The price of
the ${product} is $${price}`

console.log(statement)


// DESTRUCTURING
const person1 = {
  name2: 'Doe',
  age2: '45'
}

const {name2, age2} = person1;

console.log(`This is for ${name2} and ${age2}`)

const numbers1 = [1,2,3];

const [first, second, last] = numbers1;

console.log(last)
console.log(first)
console.log(second);

const objectNigeria = {
  riversState: '23LGA',
  lagosState: '20LGA',
  ondoState:'18LGA',
  deltaState: '25LGA'
}

const {riversState, lagosState, ondoState, deltaState} = objectNigeria

console.log(riversState)


const student1 = {name: 'Alice', grade2: 'A'};


const {name:StudentName, grade2} = student1

console.log(StudentName)


const human ={name4: 'Bob', age: 25, city: 'Texas'};

const {name4, ...allOfThem} = human;

console.log(name4);
console.log(allOfThem)

const originalArray = [1,2,3];

const copiedArray = [...originalArray]

console.log(copiedArray)


const array1 = [1,2,3];
const array2 = [4,5,6];

const mergedArray = [...array1, ...array2]

console.log(mergedArray)


// ASYNCHOROUS JAVASCRIPT

function loginUser (username, password){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if (username === 'admin' && password === '1234'){
        resolve('Login Successful');
      } else {
        reject('Login failed')
      }
    }, 1500)
  })
}

async function login() {
  try{
    const message = await loginUser('admin1', '1234');
    console.log(message)
  } catch (error){
    console.log(error)
  }
}

console.log(login())










