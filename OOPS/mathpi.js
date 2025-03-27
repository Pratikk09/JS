const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descripter);

const chai = {
  name: "chai",
  price: 230,
  isAvalible: true
}

console.log(Object.getOwnPropertyDescriptor(chai,"price"));

// Object.defineProperty(chai,'price',{
//   writable: false,
//   enumerable: false,
 
// })