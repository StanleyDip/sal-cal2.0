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
    let Eid_coverages;
    let ot_amount;
    if(arr.EidBonus=="yes"&& arr.SalaryAmount>3000){
        Eid_bonus=(arr.SalaryAmount*0.38);
        calculation=calculation+Eid_bonus;
    }
    if(arr.SalaryAmount<39999){
        Eid_coverages=3333;
        night_allowance=250*arr.NightShifts;
     calculation=calculation+night_allowance;
    }else{
        Eid_coverages=4000;
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
                // document.getElementById('result-div').innerHTML="You have got approximately: "+ calculation +"Tk"+ "";
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
                td1.setAttribute('id', 'table_ot_header');
                td2.setAttribute('id', 'table_ot');
                document.getElementById('creator_ot').appendChild(td1);
                document.getElementById('creator_ot').appendChild(td2);
            document.getElementById('table_ot_header').innerHTML= "Total "+arr.OTs+" OT's";          
        document.getElementById('table_ot').innerHTML="+"+ot_amount;
            }
            if(arr.Food>0){
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                td1.setAttribute('id', 'table_lunch_header');
                td2.setAttribute('id', 'table_lunch');
                document.getElementById('creator_lunch').appendChild(td1);
                document.getElementById('creator_lunch').appendChild(td2);
                document.getElementById('table_lunch_header').innerHTML= "Lunch";          
                document.getElementById('table_lunch').innerHTML="-"+arr.Food*30;
            }

            if(arr.NightShifts>0){
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                td1.setAttribute('id', 'table_night_header');
                td2.setAttribute('id', 'table_night');
                document.getElementById('creator_night').appendChild(td1);
                document.getElementById('creator_night').appendChild(td2);
                document.getElementById('table_night_header').innerHTML= "Total Night Allowance";          
                document.getElementById('table_night').innerHTML="+"+night_allowance;
            }
            if(Eid_bonus){
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                td1.setAttribute('id', 'table_eid_bonus_header');
                td2.setAttribute('id', 'table_eid_bonus');
                document.getElementById('creator_eid_bonus').appendChild(td1);
                document.getElementById('creator_eid_bonus').appendChild(td2);
                document.getElementById('table_eid_bonus_header').innerHTML= "Eid Bonus";          
                document.getElementById('table_eid_bonus').innerHTML="+"+Eid_bonus;
            }
            if(Eid_coverages){
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                td1.setAttribute('id', 'table_eid_bonus_coverage_header');
                td2.setAttribute('id', 'table_eid_bonus_coverage');
                document.getElementById('creator_eid_bonus_coverage').appendChild(td1);
                document.getElementById('creator_eid_bonus_coverage').appendChild(td2);
                document.getElementById('table_eid_bonus_coverage_header').innerHTML= "Eid Coverage";          
                document.getElementById('table_eid_bonus_coverage').innerHTML="+"+Eid_coverages;
            }

        document.getElementById('table_salary').innerHTML=arr.SalaryAmount;


        document.getElementById('table_total').innerHTML="="+calculation;
        document.getElementById('submit_2').style.visibility="visible";
        document.getElementById('submit_2').style.opacity="1";
        document.getElementById('table__wrapper').style.visibility="visible";
        document.getElementById('table__wrapper').style.opacity="1";

        let remove_elem=document.getElementById('form');
        let parent_elem=remove_elem.parentNode;
        parent_elem.removeChild(remove_elem);
        }

}

