//DOM Variables
const inputV = document.getElementById("vIn");
const ledC = document.querySelectorAll(".led")
const calc_btn = document.getElementById("btn_calc");
const slots = document.querySelectorAll("td");

const nav = document.querySelector("#nav");
const open_nav = document.querySelector("#open_nav");
const close_nav = document.querySelector("#close_nav");

//Main
open_nav.addEventListener("click", () => {
    if (nav.classList.contains("visible")) {
        nav.classList.remove("visible");
    } else {
        nav.classList.add("visible");
    }
});

calc_btn.addEventListener("click", Validation => {
    if (inputV.value <= 0) {
        alert("Introduce un voltaje valido");
    } else {
        Calculate();
    }
});

//LED resistor calculator
var vLed = [1.8, 2.1, 2.1, 3.2, 3.5];
var iLed = 0.015;
var rLed = [];
var cLed;
var vIn;

function Calculate() {
    for (i = 0; i < slots.length; i++) {
        slots[i].innerText = "";
    }

    for (i = 0; i < slots.length; i++) {
        vIn = inputV.value;
        let realV = [];
        realV[i] = vIn - vLed[i];
        rLed[i] = realV[i] / iLed;
        rLed[i] = Math.round(rLed[i]);
        console.log(rLed[i]);
    }

    for (i = 0; i < slots.length; i++) {
        slots[i].append(rLed[i] + " Ohms")
        console.log(slots[i]);
    }
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