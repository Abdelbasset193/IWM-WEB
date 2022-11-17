

function savingCalculator(x_code)
 {
    if (parseInt(x_code) ==1)
    {
    validateform(1);
    accumulatedAmountFromSaving();
    }
    
    if (parseInt(x_code)==2)
    {
        validateform(2);
        accumulatedAmountFromSaving();
    }
    if (parseInt(x_code)==3)
    {
        validateform(1);
        accumulatedAmountFromSaving();
    }
 }

 function accumulatedAmountFromSaving()
 {

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



 function validateform(x_code)
 {
    if (parseInt(x_code==1))
    {
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
       return;
    }

    if (parseInt(x_code==2))
    {
        return;
    }

    if (parseInt(x_code==3))
    {
        return;
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

//
function balanceTab(x_code) 
{
    if (parseInt(x_code)==1)
    {
        var tab1 = document.getElementById("tab-1");
        tab1.style.backgroundColor = "rgb(13, 159, 110)";//green
        tab1.style.color = "white";
     
        var tab2 = document.getElementById("tab-2");
        tab2.style.backgroundColor = "white";
        tab2.style.color = "rgb(107 114 128";
     
        var tab3 = document.getElementById("tab-3");
        tab3.style.backgroundColor = "white";
        tab3.style.color = "rgb(107 114 128";
     
        //hide form 2 and 3 and show 1
        var form_exec1 = document.getElementById("form-ex1");
         form_exec1.style.display="block";
     
         var form_exec2 = document.getElementById("form-ex2");
         form_exec2.style.display="none";
     
         var form_exec3 = document.getElementById("form-ex3");
         form_exec3.style.display="none";
         return;
    }
    if (parseInt(x_code)==2)
    {
        var tab2 = document.getElementById("tab-2");
        tab2.style.backgroundColor = "rgb(13, 159, 110)";//gree
        tab2.style.color = "white";
    
        var tab1 = document.getElementById("tab-1");
        tab1.style.backgroundColor = "white";
        tab1.style.color = "rgb(107 114 128";
    
        var tab3 = document.getElementById("tab-3");
        tab3.style.backgroundColor = "white";
        tab3.style.color = "rgb(107 114 128";
    
        //hide form 1 and 3 and show 2
    
        var form_exec1 = document.getElementById("form-ex1");
        form_exec1.style.display="none";
    
        var form_exec2 = document.getElementById("form-ex2");
        form_exec2.style.display="block";
    
        var form_exec3 = document.getElementById("form-ex3");
        form_exec3.style.display="none";
    }
    if (parseInt(x_code)==3)
    {
        var tab3 = document.getElementById("tab-3");
        tab3.style.backgroundColor = "rgb(13, 159, 110)";
        tab3.style.color = "white";
    
        var tab1 = document.getElementById("tab-1");
        tab1.style.backgroundColor = "white";
        tab1.style.color = "rgb(107 114 128";
     
        var tab2 = document.getElementById("tab-2");
        tab2.style.backgroundColor = "white";
        tab2.style.color = "rgb(107 114 128";
    
        //hide form 1 and 2  and show 3 
        var form_exec1 = document.getElementById("form-ex1");
        form_exec1.style.display="none";
    
        var form_exec2 = document.getElementById("form-ex2");
        form_exec2.style.display="none";
    
        var form_exec3 = document.getElementById("form-ex3");
        form_exec3.style.display="block";
    }
}
