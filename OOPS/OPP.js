// const user = {
//   name:"Pratik",
//   age:23,
//   signIn: true,

// ud: function(){
//   // console.log("got user details from database");
//   // console.log(this.name);
  
// }
// }
// console.log(user.age);
// console.log(user.ud());

//------------------------------------------------------------

function User(username,logincount,isloggin) {
  this.username = username
  this.logincount = logincount;
  this.isloggin = isloggin

   return this 
}
const user = new User("Pratik", 23, true)
const user2 = new User("pratik2", 23, true)

console.log(user);
console.log(user2);
