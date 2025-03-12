for (let i = 0; i <= 10; i++) {
  const element = i;
  if(element == 5 ){
    // console.log("5");
    
  }
  // console.log(element);
  
  
}

for (let i = 0; i <=10; i++) {
  // console.log(`Outer loop value ${i}`);
  
  for (let j = 0; j <=10; j++) {
    // console.log(`Inner loop value ${j}  ${i}`);
    // console.log(i+'*' + j + '=' + i*j);
    
    
  }  
}

// let myarray = ["pratik","mehta","pratik"]
// console.log(myarray.length);

// for (let index = 0; index < myarray.length; index++) {
//   const element = myarray[index];
//   console.log(element);
  
// }


// break and continue

for (let index = 1; index <=20; index++) {
  if (index == 5) {
    // console.log(`detected 5 `);
    break
  }
  // console.log(`vlaue of i is ${index}`);
  
  
}


// for (let index = 1; index <=20; index++) {
//   if (index == 5) {
    
//     console.log(`detected 5 `);
//      continue
//   }
//    console.log(`vlaue of i is ${index}`);
  
  
// }

// for of

const arr = [1,2,3,4]

for (const num of arr) {
  // console.log(num);
  
}

const greetings = "pratik"

for (const gree of greetings) {
  // console.log(gree);
  
}

// MAp
const map = new Map()
map.set('IN',"Indeia")
map.set('USA',"United Sate of America")

// console.log(map);

for (const [key,value] of map) {
  // console.log(key, ':-',value);
    
}

