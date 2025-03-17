// generate a rendom color

const rendomColor = function(){
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * hex.length);
    color += hex[random];
  }
  return color;
}
let intrid
document.getElementById("start").addEventListener('click',function(){
  intrid = setInterval(() => {
    document.body.style.backgroundColor = rendomColor();
  }, 100);
})

document.getElementById("stop").addEventListener('click',function(){
  clearInterval(intrid)
  intrid = null;
})
