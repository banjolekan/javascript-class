// create an array
let myNums = [9,2,6,5,8];


var sum = myNums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
},0);

console.log(sum) 


// JSON 
let json = '{"name": "John", "age": 39}'

let object = JSON.parse(json);

console.log(object)


//CREATE  AN OBJECT REPRESENTING A BOOK WITH PROPERTIES FOR TITLE, AUTHOR, AND YEAR THEN, LOG THE AUTHORS NAME TO THE CONSOLE .

var book = {};

book.title = "japa";
book.author = 'lekan';
book.year = "1978"

console.log(book);

book.genre ='sci fa';
console.log(book);


// dgdn

var book = {};
book.title = "japa";
book.author = 'lekan';
book.year = "1978"

console.log(book.author);


// ADD A NEW PROPERTY TO THE GENRE TO THE BOOK OBJECT
book.genre = "thriller";
console.log(book);





function log(value) {
    console.log(value)
    
}
function calculatesum(num1, num2, callback){
const sum =num1 + num2

callback(sum)
} 
calculatesum (10, 30, log)


console.log(calculatesum)



