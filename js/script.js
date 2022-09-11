const arr=[];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d = new Date();
let month = months[d.getMonth()];
const mon = document.getElementById('mon');
mon.innerHTML='Calculate The Salary of Month: '+month+"&nbsp;&nbsp;&nbsp;<i id='re' onClick='window.location.reload();' class='fa-solid fa-rotate-right'></i>";
const form =document.getElementById('form');

form.addEventListener('submit', (e)=>{
e.preventDefault();
arr["SalaryAmount"]=parseInt(document.getElementById('sal-amount').value);
arr["NightShifts"]=parseInt(document.getElementById('night-shifts').value);
arr["OTs"]=parseInt(document.getElementById('ots').value);
arr["EidBonus"]=document.getElementById('eid-bonus').value;
arr["EidCoverage"]=parseInt(document.getElementById('eid-cov').value);
arr["Food"]=parseInt(document.getElementById('food').value);
    calculate();
});


 


function calculate(){
    let success= true;
    const pattern= /^[0-9]\d*$/;
    const pattern1= /^[1-9]\d*$/;
   if(!(pattern1.test(arr.SalaryAmount) && pattern.test(arr.NightShifts)&& pattern.test(arr.OTs) && pattern.test(arr.Food))){
    
//  window.location.reload();
success= false;
 
   }
        
       
   
    let calculation=arr.SalaryAmount;
    if(arr.EidBonus=="yes"){
        calculation=calculation+arr.SalaryAmount*0.4-2000;
    }
    if(arr.SalaryAmount<40000){
     calculation=calculation+250*arr.NightShifts;
    }
        calculation= calculation+400*arr.NightShifts+(arr.SalaryAmount/30)*1.5*arr.OTs+(arr.SalaryAmount/30)*2.85*arr.EidCoverage;
        calculation= calculation-arr.Food*30;
        if(!(isNaN(calculation))){
            if(success==true){
                document.getElementById('submit').remove();
                document.getElementById('error').remove();
                mon.style.opacity="1";
                mon.innerHTML=month+" Month's Salary: &nbsp;&nbsp;&nbsp;<i id='re' onClick='window.location.reload();' class='fa-solid fa-rotate-right'></i>";
                document.getElementById('result-div').innerHTML="You have got approximately: "+ calculation +"Tk"+ "";
            }
            else{
                mon.style.opacity="0";
                document.getElementById('error').innerHTML="Please try again!! &nbsp;&nbsp;&nbsp;<i id='re-re' onClick='window.location.reload();' class='fa-solid fa-rotate-right'></i>";
            }
        }
 

}

