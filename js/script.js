const arr=[];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d = new Date();
let month = months[d.getMonth()];
let year =d.getFullYear();
const mon = document.getElementById('mon');
const mon_output=document.getElementById('mon-output');
mon.innerHTML='Calculate The Salary of Month: '+month+"&nbsp;&nbsp;&nbsp;<i id='re' onClick='window.location.reload();' class='fa-solid fa-rotate-right'></i>";
mon_output.innerHTML='For the month of '+month+", "+year;
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
    let night_allowance;
    let Eid_bonus;
    let Eid_coverages=(arr.SalaryAmount/30)*2.85*arr.EidCoverage;
    let ot_amount;
    if(arr.EidBonus=="yes"&& arr.SalaryAmount>3000){
        Eid_bonus=arr.SalaryAmount*0.4-2000;
        calculation=calculation+Eid_bonus;
    }
    if(arr.SalaryAmount<39999){
        night_allowance=250*arr.NightShifts;
     calculation=calculation+night_allowance;
    }else{
        night_allowance=400*arr.NightShifts;
       calculation= calculation+night_allowance; 
    }
        calculation= calculation+(arr.SalaryAmount/30)*1.5*arr.OTs+Eid_coverages;
        calculation= calculation-arr.Food*30;
        if(!(isNaN(calculation))){
            if(success==true){
                ot_amount=(arr.SalaryAmount/30)*1.5*arr.OTs;
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
        if(success){
            if(arr.OTs>0){
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                td1.setAttribute('id', 'table__ot_header');
                td2.setAttribute('id', 'table__ot');
                document.getElementById('creator').appendChild(td1);
                document.getElementById('creator').appendChild(td2);
            document.getElementById('table__ot_header').innerHTML= "Total "+arr.OTs+" OT's received";          
        document.getElementById('table__ot').innerHTML= ot_amount;
            }

        document.getElementById('table__salary').innerHTML=arr.SalaryAmount;
        document.getElementById('table__lunch').innerHTML=arr.Food*30;
        document.getElementById('table__night').innerHTML=night_allowance;
        document.getElementById('table__total').innerHTML=calculation;
        }

}

