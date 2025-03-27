class User{
  constructor(username){
      this.username = username
  }
  logme(){
    console.log(`username is ${this.username}`);
    
  }
}

class Teacher extends User{
  constructor(username,email,password){
    super(username)
    this.email = email
    this.password = password

  }
}

const pra = new Teacher("pratik","mehta@gmail.comm","12345")
pra.logme()
console.log(pra);
