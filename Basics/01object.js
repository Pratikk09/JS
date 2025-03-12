// const tinder = new Object()

const tinder = {}

tinder.id = "123qwe"
tinder.name = "pratik"
tinder.isLoggedin = false

// console.log(tinder);

const regularuser = {
  email: "pratik2gmail.com",
  fullname:{
    userfullname:{
      firstname:"qwer",
      lastname: "pooi"
    }
  }
}

// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {
    1:"a",
    2:"b"
}

const obj2 = {
  3:"c",
  4:"e"
}

// console.log(Object.assign({},obj1,obj2));

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
  {
    id:1,
    email:"pratik@gmial.com"
  },
  {
    id:1,
    email:"pratik@gmial.com"
  },
  {
    id:1,
    email:"pratik@gmial.com"
  },
]


// console.log(users[1].email);

// console.log(tinder);

// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));

const course = {
  cname:"hindi",
  price:"212",
  courseInstructor: "pratik"
}

// course.courseInstructor

const {courseInstructor:instructor} = course
console.log(instructor);
