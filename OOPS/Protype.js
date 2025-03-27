let username = "pratik    "

// console.log(name.truelength);

String.prototype.truelength = function(){
  console.log(`${this}`);
  console.log(this.length);
  console.log(this.trim().length);
}

username.truelength()