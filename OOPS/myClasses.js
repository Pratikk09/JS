 
 class User{
  constructor(username,email,password){
    this.username = username
    this.email = email
    this.password =password
  }
  encryptPassword(){
    return `${this.password}asd`
  }
 }

 const pratik = new User("pratik","mehta@gmail.com","12erfgl")

 console.log(pratik.encryptPassword());
 