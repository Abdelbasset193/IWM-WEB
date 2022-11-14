

var currency = document.getElementById("currency");
var salary = document.getElementById("salary");
var percentage_saving = document.getElementById("percentage_saving");
var percentage_raise = document.getElementById("percentage_raise");
var startAge = document.getElementById("startAge");
var ageEnd = document.getElementById("ageEnd");
const errorElement= document.getElementById("error");


errorElement.innerText= "hi";

form.addEventListner('submit',(e)=>{
let message =[]; 

alert("dd");
if (salary.value==='' || salary.value==null )
{
message.push('Name is required ');
}
if (message.length>0)
{
    e.preventDefault();
    errorElement.innerText= message.join(' ,');
}
});