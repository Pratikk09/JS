

function myname(){
  console.log("p");
  console.log("p");
  console.log("p");

  console.log("p")
  
}

// myname()

// function addnumber(number1,number2){
     
//       console.log(number1+number2);
      
// }
// addnumber(2,3)


function addnumber(number1,number2){
     
  // let result = number1+number2
  // return result
  return number1+number2
}

const result=addnumber(2,3)

// console.log(result);

function loginusermsg(username){
  // if(username===undefined){
  if(!username){
    console.log("Pleace enter User Name");
    return

  }
  return`${username} hello`
}
// console.log(loginusermsg());

// function calculateCartPrice (...number){

//   console.log(number);
//   return
  

// }
// calculateCartPrice(11,22,33,55)

// const user = {
//     name: "laptop",
//     price: 122
// }

// function handleObject(anyObject){
//     console.log(`product name is ${anyObject.name} and price is ${anyObject.price}`);
    
// }
// handleObject(user)

const myarray = [1,2,3,4]

function getarray(ary){
  return ary[2]
  
}
console.log(getarray(myarray));
