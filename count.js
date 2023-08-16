function clock(){
let endDate="01 january 2024 23:59"
let end=new Date(endDate)
let now=new Date()
let inputs=document.querySelectorAll("input")
let diff=(end-now)/1000
console.log(diff)
inputs[0].value=Math.floor(diff/3600/24);
inputs[1].value=Math.floor(diff/3600)%24;
inputs[2].value=Math.floor(diff/60)%60;
// inputs[3].value=Math.floor(diff%60);4

inputs[3].value=Math.floor(diff%60/2);
if (inputs[3].value==0){
    console.log("time over")
}
}
setInterval(
    ()=>clock(),1000);


