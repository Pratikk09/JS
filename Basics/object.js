// singleton

// objects literals

const mySym = Symbol("key1")
const jsuser = {
  name: 'John',
  age: 30,
  [mySym]: "mykey1",
  email: "Jhon@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Mon","Sat"]
  
}

console.log(jsuser["name"]);
console.log(jsuser.name);
console.log(jsuser[mySym]); 

jsuser.name = "pratik"
// Object.freeze(jsuser)

console.log(jsuser);

jsuser.greeting = function(){
  console.log("hello");
  
}

jsuser.greeting2 = function(){
  console.log(`hello,${this.name}`);
  
}

console.log(jsuser.greeting());
console.log(jsuser.greeting2());

