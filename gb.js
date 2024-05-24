
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
// DECLARING THE VARIABLE 
let num1 = 30;
let num2 = 80;
let num3 = 40;

if(num1>num2 && num1>num3){
    largestnum1
}

else if (num2>num1&&num2>num3)
    largestnum = 2;
    else {
        largestnum = 3;
    }
    console.log(largestnum);  


    const month = 9;

switch (month) {
  case 1:
    console.log("january");
    break;
  case 2:
    console.log("february");
    break;
  case 3:
    console.log("march");
    break;
  case 4:
    console.log("april");
    break;
  case 5:
    console.log("may");
    break;
  case 6:
    console.log("june");
    break;
  case 7:
    console.log("july");
    break;
  case 8:
    console.log("august");
    break;
  case 9:
    console.log("september");
    break;
   case 10:
    console.log("october");
    break;
   case 11:
    console.log("november");
    break;
    case 12:
    console.log("december");
    break;

  default:

    console.log("invalid month!");
}



 
// JAVASCRIPT FUNCTION
console.log("i need an investor!!!!") 


function banjo (){
  return "hello i am banjo";
};

console.log(banjo());

function banjo (a,b){
  return ("a*b");
}; 

console.log(banjo(5,6));

function banjo (name, age){
  return("my name is" + "name + and i am" + age )
};

console.log(banjo(richard,30));

// TENARY 

const number = -10;

const result = number >=0 ? "positive" : 'negative';

console.log(result);
// FUNCTION 
const temperature = 25;

const weather = temperature > 30  ? 'hot'  : temperation >20 ? 'warm' : 'cool';

console.log(weather)



// REACTANGLE

function reactangle (l,w){
  return ("l*w");
};

console.log(reactangle(5,2));

//    
// json
// json
const jsonstring = '{"name":"john","age":"30"}'
const covertedIntoObject = JSON.parse(jsonstringsonString);

console.log(covertedIntoObject) 



// create an array
var  myNums = [1,2,3,4,5];

var sum = myNums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
},0);

console.log(sum)











