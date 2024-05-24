// class task on function 
//1. calculate the area  of a rectangle 
//2. chech if a number is even or odd 
//3. calculate the area of a circle 

var numbs = ["2","4","6","9","8"]

console.log(numbs)

//4. calculate the perimeter of a square


var fruits = ["apple","orange","banana","mango","cherry"]

console.log(fruits[0]) 
//5. calculate the volume of a sphere
//6. calculate the perimeter of a triangle 


function calculateSum(num1, num2) { 
  return num1 + num2; 
}
var output = calculateSum(40, 20); 
console.log(output);
// hint: find the formula for calculating each of the above shapes.





let n = 4; 
 
function factorial(n) { 
    let ans = 1; 
     
    if(n === 0)
        return 1;
    for (let i = 2; i <= n; i++) 
        ans = ans * i; 
    return ans; 
}
 
console.log(factorial(n));

// JAVASCRIPT OBJECT

const person = {
    name: 'john',
    age: "30",
    job: "mobile app developer"
}
console.log(person['age'])


const dog = {
    breed: 'pitbul',
    color: 'black',
    bark: function () {
        console.log('woof woof')
    }
}

console.log(dog.bark())



 
const book = {};
    book.title = "mindshift"
    book.author = "daniel"

console.log(book)




// json
const jsonstring = '{"name":"john","age":"40"}'
const covertedIntoObject = JSON.parse(jsonstring);

console.log(covertedIntoObject) 

// call back  and asynchronous javascript
//CREATE  AN OBJECT REPRESENTING A BOOK WITH PROPERTIES FOR TITLE, AUTHOR, AND YEAR THEN, LOG THE AUTHORS NAME TO THE CONSOLE .

var book = {};
book.title = "japa";
book.author = 'lekan';
book.year = "1978"

console.log(book.author);


// ADD A NEW PROPERTY TO THE GENRE TO THE BOOK OBJECT
book.genre = "thriller";
console.log(book);




// ggh




function greet(name, callback){
    console.log("Hello" + name)
    callback()
  }
  
  function sayGoodbye(){
    console.log('Goodbye')
  }
  
  console.log(greet("Moses", sayGoodbye))
  


// sbgsg
function log(value) {
    console.log(value)
    
}
function calculatesum(num1, num2, callback){
const sum =num1 + num2

callback(sum)
} 
calculatesum (10, 30, log)


console.log(calculatesum)


// gdhhd
function square(number) {
    return (number * number);
  }
  
  const number = 5;
  const result = square(number);

  console.log(result);


  // arrow function 
  const add = function (a,b){
return a+b
  }
  console.log(add(10,15))
