const display =document.querySelector(".display");
const buttons =document.querySelectorAll("button");
const specialChar =["%","*","/","-","=","+"]

const alph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let output = "";
const calculate = (btnValue) => {
if(btnValue=== "=" && output!== ""){

  output=eval(output.replace("%","/100"));
}else if(btnValue==="AC"){
  output="";
}else if(btnValue==="DEl")
{
  output=output.toString().slice(0,-1);
}else{
  if(output=== ""&& specialChar.includes(btnValue))return;
output+= btnValue;
}

display.value = output;
};

if(display===alph){
  alert("only Number");

}

buttons.forEach((button)=>{
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));

});