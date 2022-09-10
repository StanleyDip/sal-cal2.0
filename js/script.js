const arr=[];
document.getElementById("submit").onclick =function(){
arr["SalaryAmount"]=parseInt(document.getElementById('sal-amount').value);
arr["NightShifts"]=parseInt(document.getElementById('night-shifts').value);
arr["OTs"]=parseInt(document.getElementById('ots').value);
arr["EidBonus"]=document.getElementById('eid-bonus').value;
arr["EidCoverage"]=parseInt(document.getElementById("eid-cov").value);
arr["Food"]=parseInt(document.getElementById('food').value);

    console.log(typeof arr.SalaryAmount);
    console.log(typeof arr.NightShifts);
    console.log(typeof arr.OTs);
    console.log(typeof arr.EidBonus);
    console.log(typeof arr.EidCoverage);
    console.log(typeof arr.Food);
    console.log(arr);
    calculate();
}

function calculate(){
    let calculation=arr.SalaryAmount;
    if(arr.EidBonus=="yes"){
        
        calculation=calculation+arr.SalaryAmount*0.4-2000;
        console.log("eidb"+calculation);
    }
    if(arr.SalaryAmount<40000){
     calculation=calculation+250*arr.NightShifts;
    }
        calculation= calculation+400*arr.NightShifts+(arr.SalaryAmount/30)*1.5*arr.OTs+(arr.SalaryAmount/30)*2.85*arr.EidCoverage;
        calculation= calculation-arr.Food*30;
    document.getElementById('submit').remove();
    document.getElementById('result-div').innerHTML="You have got approximately: "+ calculation +"Tk"+ "";

}

