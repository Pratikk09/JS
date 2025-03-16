const form = document.querySelector("form")

form.addEventListener('submit',function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector("#height").value)
  const weight = parseInt(document.querySelector("#weight").value)
  const result = document.querySelector("#results")
  const result2 = document.querySelector("#results2")
  let bmi;
  if(!height || !weight){
  
    result.innerHTML = `Please enter valid input ${height} & ${weight}`
    return
  }else{
    bmi = (weight / ((height * height)/10000)).toFixed(2)
    result.innerHTML = `Your BMI is ${bmi}`
  }
  
  
  if (bmi<18.6) {
    result2.innerHTML="You are in under Weight";
    
  }else if (bmi > 18.6 && bmi < 24.9){
    result2.innerHTML="Your Weight is Normal";

  }else if(bmi>24.9) {
    result2.innerHTML="Your Weight is Over";
  }
})

