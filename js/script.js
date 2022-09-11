const arr=[];
document.getElementById("submit").onclick =function(){
arr["SalaryAmount"]=parseInt(document.getElementById('sal-amount').value);
arr["NightShifts"]=parseInt(document.getElementById('night-shifts').value);
arr["OTs"]=parseInt(document.getElementById('ots').value);
arr["EidBonus"]=document.getElementById('eid-bonus').value;
arr["EidCoverage"]=parseInt(document.getElementById('eid-cov').value);
arr["Food"]=parseInt(document.getElementById('food').value);
    calculate();
    // console.log(arr);
 
}

function calculate(){
    const pattern= /^[0-9]\d*$/;
   if(!(pattern.test(arr.SalaryAmount) && pattern.test(arr.NightShifts)&& pattern.test(arr.OTs) && pattern.test(arr.Food))){
    console.log("hit");
//  console.log("sal-test "+pattern.test(arr.SalaryAmount)+" type of " + typeof arr.SalaryAmount+ arr.SalaryAmount);
//  console.log("Nightshift-test "+pattern.test(arr.NightShifts)+" type of " + typeof arr.NightShifts+ arr.NightShifts);
//  console.log("Ots-test "+pattern.test(arr.OTs)+" type of " + typeof arr.OTs+ arr.OTs);
//  console.log("Food-test "+pattern.test(arr.Food)+" type of " + typeof arr.Food+ arr.Food);
 
 window.location.reload();
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
            document.getElementById('submit').remove();
            document.getElementById('result-div').innerHTML="You have got approximately: "+ calculation +"Tk"+ "";
        }
 

}

