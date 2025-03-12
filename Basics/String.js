const name = "Pratik"
const age =  23

// console.log(name + age );

// console.log(`Hello My name is ${name} and my age is ${23}`);


const gamename = new String("Pratik");
console.log(gamename[5]);

console.log(gamename.toUpperCase());

console.log(gamename.indexOf('t'));

const newString = gamename.substring(0,3);

console.log(newString);


const strin1 = gamename.slice(-6,5);
console.log(strin1);

const strin2 = "   Pratik "

console.log(strin2);
console.log(strin2.trim());

const url = "https://praik.com/%20mehta.20"

console.log(url.replace('%20', '_'));

console.log(url.includes('mehta'));

