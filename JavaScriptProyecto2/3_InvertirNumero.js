/*
-Fecha de publicación: 19-04-2024
-Hora de publicación: 9:10 AM
-Versión de su código: 20
-Autores:Ing(c): Jorge Andres Valderrama Baron
-Nombre del lenguaje : ECMASCRIPT
-Versión del lenguaje utilizado: 6.0
-Universidad Tecnológica de Pereira
-Programa de Ingeniería de Sistemas y Computación
-Descripción de la funcionalidad del programa:
Este programa lee un número entero ingresado por el usuario y lo imprime al revés.
*/
const prompt = require("prompt-sync")(); // Se importa el módulo 'prompt-sync' para solicitar entrada al usuario

function invertirNumero(numero) { // Función para invertir un número
    let numeroString = numero.toString(); // Se convierte el número a cadena de caracteres
    let numeroInvertido = '';

    for (let i = numeroString.length - 1; i >= 0; i--) {// Se recorre la cadena de caracteres en orden inverso
        numeroInvertido += numeroString[i]; // Se agrega cada dígito al número invertido
    }

    return numeroInvertido; // Se devuelve el número invertido como cadena de caracteres
}

console.log("Este programa lee un número entero y lo imprime al revés."); // Se muestra un mensaje explicativo al usuario
let numero1 = parseFloat(prompt("Ingrese un número para leerlo al revés: ")); // Se solicita al usuario que ingrese un número
console.log("Entre el número:", invertirNumero(numero1)); // Se muestra el número ingresado y su versión invertida

