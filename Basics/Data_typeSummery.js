// Primitive

// String, Number , Boolen , Null, Nudefine, Symbol,BIGint

 const score  = 29
 const scoreValue = 100.3

 const isLogin = true
const outSide = null
let userEmail;

const id = Symbol('123')
const id2 = Symbol('123')

// console.log(id === id2)


// reference (Non Primitive)

// Array , Objects , Function

const namee = ["pratik","mehta","kesrot"];

let obj = {
  name: "pratik",
  age: 29,
  address: "TODA"
}

const myfunction = function() {

  console.log("Namaste");
  
}

// console.log(typeof myfunction);
// console.log(typeof obj);
// console.log(typeof namee);
// console.log(typeof outSide);
// console.log(typeof userEmail);
// console.log(typeof score);
// console.log(typeof scoreValue);
// console.log(typeof isLogin);



//*****************************************************

// Stack (Primitive),  Heap(Non Priitive)


let myname = "Pratik"

let name1 = myname
 name1 = "Mehta"

// console.log(myname);

// console.log(name1);

let use1 = {
  name: "Pratik",
  age: 29
}

let use2 = use1;

use2.age = 21

console.log(use1.age);
console.log(use2);

