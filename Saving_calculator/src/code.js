

function afficherSalaire()
 {
    validateform();
    accumulatedAmountFromSaving();
 }

 function accumulatedAmountFromSaving()
 {
//     Start
//     input "give me the your actual salary";  salary 
//      input "give me the your % of saving ";   pSaving 
//     input "give me  your start age ";   ageStart 
//     input "give me  your en of age ";   ageEnd 
//     input "give me  your % of raised salary ";   raisedSalary 
// nbrOfYears = ageEnd - ageStart ; 
// saving = 0 ; 
// for (i=1 ; i<nbrOfYears ; i++ )
// {
// if (nbrOfYears=1)
// {
//   saving = (salary * 12 * pSaving ) ; 
// }
// else
// {
//   saving = salary * 12 * raisedSalary  * pSaving  ; 
// }

var c = document.getElementById("currency")
var salary = parseFloat(document.getElementById("salary").value);
var percentage_saving = parseFloat(document.getElementById("percentage_saving").value);
var percentage_raise = parseFloat(document.getElementById("percentage_raise").value);
var startAge = parseInt(document.getElementById("startAge").value);
var Endage = parseInt(document.getElementById("ageEnd").value);
var currency = c.options[c.selectedIndex].text;
console.log(currency +"_ salary : "+salary +"_PS : " + percentage_saving +  "_ PR " + percentage_raise +  "_SA "+ startAge + "_ EA " + ageEnd)
var  nbyears =  Endage - startAge ; 
console.log("nbr of years "+ nbyears);
var saving = 0 ;
var  raise = 0 ;  
var a_salary=0 ; // salaire annuel ; 

for (let i = 0; i < parseInt(nbyears); i++) 
{
    if (i==0)
    {
        raise = 0 ; 
    }
    else
    {
        raise = percentage_raise;
    }
    salary = salary * (raise / 100) + salary; 
    saving =saving + ( salary * 12 * (percentage_saving/100));
    console.log("year" + i + "salary " + salary + " saving : "+ saving);
}

console.log("Final : saving : "+ saving);
//document.getElementById("succes-message").innerHTML="Your salary saving is : " + saving +" "+ currency  ;
//showsucces();

 }

 function getOptions() {
    var e = document.getElementById("percentage_saving");
    var value = e.value;
    var text = e.options[e.selectedIndex].text;
    console.log(value +"_" + text);
 }

 function validateform()
 {
    //validating salary null value
    var x_salary = document.getElementById("salary").value; 
   // var x = document.getElementById("error");
    if (x_salary==null || x_salary=="")
    {  
       
        document.getElementById("error-message").innerHTML="salary can't be blank";
        vieuError();
        return false;  
      }
      //validation  salary isNumeric
    if (isNaN(x_salary))
      {
        document.getElementById("error-message").innerHTML="salary must be number";
        vieuError();
        return false;  
      }
     //validating start age  null value
    var x_start_age = document.getElementById("startAge").value; 
    if (x_start_age==null || x_start_age==""){    
        document.getElementById("error-message").innerHTML="Start Age can't be blank";
        vieuError();
        return false;  
      }

    //validating  start age numeric
    if (isNaN(x_start_age))
      {
        document.getElementById("error-message").innerHTML="Start Age must be number";
        vieuError();
        return false;  
      }


     //validating End age null value
     var x_end_age = document.getElementById("ageEnd").value; 
     if (x_end_age==null || x_end_age==""){  
        document.getElementById("error-message").innerHTML="End Age can't be blank";
        vieuError();
         return false;  
       }

     //validating  start age numeric
     if (isNaN(x_end_age))
       {
        document.getElementById("error-message").innerHTML="End Age must be number";
        vieuError();
         return false;  
       }

       if (  x_start_age >= x_end_age){  
        document.getElementById("error-message").innerHTML="End age must be bigger thant Start Age";
        vieuError();
         return false;  
       }


       if (  x_start_age <18){  
        document.getElementById("error-message").innerHTML="Start age must be bigger 17 ";
        vieuError();
         return false;  
       }
      

 }

 function vieuError() {
    const box = document.getElementById('error');   
    box.style.display = 'block';
    box.style.display = 'block';
 }

 function hideError() {
    const box = document.getElementById('error');   
    box.style.display = 'none'; 
}

function showsucces() {
    const box = document.getElementById('succes');   
    box.style.display = 'block';
    box.style.display = 'block';
 }

 function hidesucces() {
    const box = document.getElementById('succes');   
    box.style.display = 'none'; 
}

function balanceTab1() 
{
   var tab1 = document.getElementById("tab-1");
   var btn_tab3 = document.getElementById("btn_tab3");
   tab1.style.backgroundColor = "white";
}
function balanceTab2() 
{
   var tab2 = document.getElementById("tab-2");
}
function balanceTab3() 
{
   var tab3 = document.getElementById("tab-3");
}