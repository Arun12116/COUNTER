
var btn1=document.getElementById("LOWERCOUNT");
var btn2=document.getElementById("ADDCOUNT");
var zero=document.getElementById("zero");
let counter=0;
btn1.addEventListener("click",()=>{
    counter--;
    zero.innerText=counter;
});

btn2.addEventListener("click",()=>{
    counter++;
    zero.innerText=counter;
});