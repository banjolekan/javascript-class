function areaRectangle(a, b) {
   
    console.log(a * b); 
}

areaRectangle(5, 9)

// EVEN OR ODD NUMBER

function isEven (number) {
    return number % 2 === 0;
  }
  
  console.log(isEven(6)); 

  // GO
  
  function volumeOfSphere(radius){
    let volume=4/3*3.14*radius*radius*radius;
    return volume;
  }
  
  let  radius = 4;
  
  console.log(volumeOfSphere(radius));



  // JAVASCRIPT ARRAY 
 
//ARRAY CONTRACTOR 
  var fruits =new  Array("apple","orange","mango")
  console.log(fruits)
  
  
  


  // V
  var fruits = ["apple","orange","banana","mango","cherry"]

  console.log(fruits[0]) 


  // CLASS WORK UNSHIFT

var cars = ["benz","toyota","bmw","lexus","ford"]
  console.log(cars.unshift('volve'))

  console.log(cars)
  // SHIFT 

  var cars = ["benz","toyota","bmw","lexus","ford"]
  console.log(cars.shift())

  console.log(cars)

  // POP
  var cars = ["benz","toyota","bmw","lexus","ford"]
  console.log(cars.pop())

  console.log(cars)


// PUSH
var cars = ["benz","toyota","bmw","lexus","ford"]
console.log(cars.push('lamborghini'))

console.log(cars)

var employee = [
  {name:'ben',age:30},
  {name:'david',age:35},
  {name:'graet',age:37}
]

console.log["the names of employees"]

// class work

//Task 1: Create an array of numbers and print the second element.


var numbs = ["2","4","6","9","8"]


console.log(numbs[1]); 




//Task 2: Add an element to the end of an array and print the new array.

var numbs = ["2","4","6","9","8"]

console.log(numbs.push('14'))
console.log(numbs)


//Task 3: Remove the first element of an array and print the new array.

var numbs = ["2","4","6","9","8"]

console.log(numbs.shift())

console.log(numbs)



//Task 4: Create a function that takes two numbers as arguments and returns their sum.
function calculateSum(num1, num2) { 
  return num1 + num2; 
}
var output = calculateSum(40, 20); 
console.log(output);

//Task 5: Check if a person is old enough to vote.


const votingage = 18;

if (votingage > 20) {
  console.log("You are old enough to vote!!!");
} else {
  console.log("Sorry your not old enough");
}


//Task 6: Find the sum of all elements in an array of numbers.
//Task 7: Create a function that calculates the factorial of a number.
//Task 8: Determine the grade of a student based on marks.

let score = 80;

let grade;

switch (true) {
  case score >= 80:
    grade = "A";
    break;
  case score >= 70:
    grade = "B";
    break;
  case score >= 60:
    grade = "C";
    break;
  case score >= 50:
    grade = "D";
    break;
  case score >= 45:
    grade = "E";
    break;
  default:
    grade = "F";
}

console.log("Your grade is", grade);

// JAVASCRIPT OBJECT

let  person = {
  name: 'john'
  age: 30,
  job: mobile app developer, 
  
}







    
 


