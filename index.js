const input=document.getElementById("input");
const toC = document.getElementById("toC");
const toF = document.getElementById("toF");
const result=document.getElementById("result");

let temp;

function convert(){
    
    let value = parseFloat(input.value); 

    if(isNaN(value)) {
        result.textContent = "Please enter a valid number.";
        return;
    }

    if(toF.checked){
        temp = (value * 9/5) + 32;
        result.textContent = `${temp.toFixed(2)} °F`;
    }
    else if(toC.checked){
        temp = (value - 32) * 5/9;
        result.textContent = `${temp.toFixed(2)} °C`;
    }
    else {
        result.textContent = "Please select a conversion type.";
    }
}
