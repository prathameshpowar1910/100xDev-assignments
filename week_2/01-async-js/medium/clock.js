// setInterval(()=>{
//   console.clear()
//   const time = new Date();
//   console.log(time.toLocaleTimeString());
// },1000)

function currentTime() {
  console.clear()
  // const time = ;
  console.log(new Date().toLocaleTimeString());
  let t = setTimeout(function(){ currentTime() }, 1000);
}
currentTime()