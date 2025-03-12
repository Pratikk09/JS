const muobj = {
  js: "javasscript",
  cpp: 'C++',
  rb: 'ruby'

}

for (const key in muobj) {
    // console.log(`${key} shortcut is ${muobj[key]}`);
    
}

// const pro = ["js","rb"]

// for (const key in pro) {
//   // console.log(pro[key]);
  
// }

// const code = ["js","rb","java","pyrhon"]
// code.forEach(function (val){
//   // console.log(val);
  
// })

// code.forEach((item)=>{
//   // console.log(item);
  
// })

 function print(item){
//     // console.log(item);
    
 }

// code.forEach(print)

//  code.forEach((item,index,arr)=>{
// //   console.log(item,index,arr);
  
//  })



//  const code = ["js","rb","java","pyrhon"]
// const varr = code.forEach((item)=>{
//   // console.log(item);
  
  
// })
// console.log(varr);


// const myNumb =[1,2,3,4,5,6,7,8,9]

// const newnum= myNumb.filter((num)=>{

//    return num>4

// })
// console.log(newnum);

// const number = [1,2,3,4,5,6]

// const pr = number.map((num)=>num+10)
// console.log(pr);

// const ar  = number.forEach((num)=>{
//       return console.log(num+10);
       

// })
// console.log(ar);

// const br = number
//             .map((num)=>num*10)
//             .map((num)=>{return num+1})
//             .filter((num)=> num>=40)

// console.log(br);


const number = [1,2,3]

// const as = number.reduce((acc,current)=>{
//   return acc + current
// },0)
// console.log(as);


// const as = number.reduce((acc,current) => acc + current,0)
// console.log(as);


const shopping =[
  {
    book:"js",
    price:199
  },
  {
    book:"cs",
    price:299
  },
  {
    book:"css",
    price:99
  },
  {
    book:"as",
    price:99
  }
]

const shop = shopping.reduce((acc,item)=> acc+item.price,0)
console.log(shop);
