
// Variables
let display = document.getElementById("output")
let buttons = document.querySelectorAll("button")
const specialChars = ["%", "*", "/", "-", "+", "="]; 
let output = ""; 

// Change output display when button is clicked
const calculate = (btnValue) => { 
    if(btnValue === "=" && output !== ""){
        output = eval(output.replace("%", "/100")); 
    } else if(btnValue === "C") {
        output = "";
    } else if(btnValue === "+/-"){
        output = output * -1; 
    } else {
        if (output === "" && specialChars.includes(btnValue)) return; 
        output += btnValue; 
    }
    display.value = output; 
}

// When button is clicked, change inner text 
buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.innerText)); 
}); 