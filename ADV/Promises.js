// const Promises =new Promise(function(resolve,reject){
//   // Do Async task
//   // DB calls, cryptography
//   setTimeout(function(){
//       console.log("Async task complet");
//       resolve()
      
//   },1000)

// })

// Promises.then(function(){
//   console.log("promis consumed");
  
// })
 
// //---------------------------------------------------------------------------

// new Promise(function(resolve,reject){
  
//   setTimeout(function(){
//     console.log("Async task complet2");
//     resolve()
    
// },1000)

// }).then(function(){
//   console.log("promis consumed2");
  
// })

// //---------------------------------------------------------------------

// const Promis3 = new Promise(function(resolve,reject){
 
 
//     console.log("Async task complet2");
//     resolve({
//       name:"Pratik",
//       age:23
//     })
    

// })
// Promis3.then(function(user){
//   console.log(user);
  
// })

//---------------------------------------------------------------

// new Promise(function(resolve,reject){
 
 
//   let error = true
//   if (!error) {
//     resolve({
//       name:"Pratik",
//       age:23
//     })
//   }else{
//     reject("Error")
//   }
// }).then((user)=>{
//   console.log(user);
//   return user.name
// }).then((name)=>{
//   console.log(name);  
// }).catch(function(error){
//   console.log(error); 
// }).finally(function(){
//   console.log("Finally resolve or reject");
// })

//------------------------------------------------------------------------------


//  const Promis5 = new Promise((resolve, reject) => {
//   let error = false
//   if (!error) {
//     resolve({
//       name:"Pratik",
//       age:23
//     })
//   }else{
//     reject("Error")
//   }
// })

// async function getuser(){
//   try {
//     const user = await Promis5
//     console.log(user);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getuser()

// async function getuser1(){
//   try {
//     const user = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await user.json()
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getuser1()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.log(error))