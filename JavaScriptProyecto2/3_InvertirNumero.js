const prompt = require("prompt-sync")();

function invertirNumero(numero) {
    let numeroString = numero.toString();
    let numeroInvertido = '';

    for (let i = numeroString.length - 1; i >= 0; i--) {
        numeroInvertido += numeroString[i];
    }

    return numeroInvertido;
}

console.log("Este programa lee un número entero y lo imprime al revés.");

let numero1 = parseFloat(prompt("Ingrese un número para leerlo al revés: "));
console.log("Entre el número:", invertirNumero(numero1));
