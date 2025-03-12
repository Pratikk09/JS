
let number = [1,2,3,4]
let number2 = [5,6,7,8]

// number.push(number2)
// console.log(number);

// console.log(number[4][1]);

// const  out = number.concat(number2)

// console.log(out);

// const newnumber = [...number, ...number2]
// console.log(newnumber);

const ary = [1,2,3,[4,5,6],7,6,[2,[6,7]]]

let real = ary.flat(Infinity)

console.log(real);

console.log(Array.isArray("pratik"));

console.log(Array.from("pratik"));

console.log(Array.from({name:"pratik"}));

let score1 = 10
let score2 = 20
let score3 = 30

console.log(Array.of(score1,score2,score3));

