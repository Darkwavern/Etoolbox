//Variables del DOM
const inputV = document.getElementById("vIn");
const ledC = document.querySelectorAll(".led")
const calc_btn = document.getElementById("btn_calc");
const p_resistor = document.getElementById("resistor");

calc_btn.addEventListener("click", Calcular);

//Calculadora de resistencia de led
var vLed = [1.8, 2, 2.2, 3];
var iLed = [0.018, 0.020];
var rLed;
var cLed;
var vIn;

function Calcular() {
    vIn = inputV.value;
    let realV = vIn - vLed[0];
    rLed = realV / iLed[0];
    p_resistor.append(rLed + " Ohms");
    console.log(rLed);
}



//Que color es tu LED
/*vIn = prompt("Digite el voltaje de entrada")
cLed = prompt("Ponga el clor de su LED");
console.log("Para el color " + cLed);

if (cLed == "Rojo") {
    CalcularResistencia(vLed[0], iLed[0]);
    console.log("La resistencia necesaria es: " + rLed + " Ohms");
} else if (cLed == "Amarillo") {
    CalcularResistencia(vLed[1], iLed[1]);
    console.log("La resistencia necesaria es: " + rLed + " Ohms");
} else if (cLed == "Verde") {
    CalcularResistencia(vLed[2], iLed[1]);
    console.log("La resistencia necesaria es: " + rLed + " Ohms");
} else if (cLed == "Azul") {
    CalcularResistencia(vLed[3], iLed[1]);
    console.log("La resistencia necesaria es: " + rLed + " Ohms");
}

function CalcularResistencia(vL ,iL) {
    rLed = vL / iL;
}*/