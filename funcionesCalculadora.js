
let inputField = document.getElementById("inputField"),
xd = document.getElementById("buttonsContainer");

let defaultInput = () => inputField.value = 0;

defaultInput();

function erase(){
    defaultInput(); 
    /*(Si, ya se que podría haberme ahorrado unas líneas de código añadiendo
        la función directamente al botón, pero así lo siento más organizado lel) 
    */
}

function number(value){ 
    inputField.value == 0 || inputField.value == "SyntaxError" ? inputField.value = value : inputField.value += value;
}

function calcule(){
    if(!inputField.value || inputField.value == Infinity){
        defaultInput();
    }
    else{
        try {
            inputField.value = eval(inputField.value);
        } catch (error) {
            inputField.value = "SyntaxError"
        }
    }    
}
