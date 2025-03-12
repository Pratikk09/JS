const user ={
  name: "praik",
  price:122,

  wellcome: function (){
    console.log(`${this.name} , Welcome to website`);
    console.log(this);
    
    
  }
}
// user.wellcome()
// user.name = "sam"
// user.wellcome()

// console.log(this);

// function code(){
//   console.log(this);
  
// }

// code()

// *******************arrofunction
// const code = ()=>{
//   let  name = "meto"
//   console.log(this.name);
  
// }
// code()

// const addtwo = (n1,n2) => {
//   return n1+n2
// }
// console.log(addtwo(2,3));

// const addtwo = (n1,n2) => ( n1+n2 )

// console.log(addtwo(2,3))

const addtwo = (n1,n2) => ({name:"pratik"})
console.log(addtwo(2,3))