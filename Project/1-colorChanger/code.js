const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach((bt)=> {
  bt.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);

    const color = e.target.id
    
    switch(color){
      case "grey":
        body.style.backgroundColor = "grey"
        break;
      case "white":
        body.style.backgroundColor = "white"
        break;
      case "blue":
        body.style.backgroundColor = "blue"
        break;
      case "yellow":
        body.style.backgroundColor = "yellow"
        break; 
    }
    
  })
  
});