/*
-Fecha de publicación: 19-04-2024
-Hora de publicación: 12:14 PM
-Versión de su código: 21
-Autores:Ing(c): Jorge Andres Valderrama - Mariand Evans - Juan Manuel Vargas Rios - Kevin leiton - Manuela Cardona - Santigo Melo
-Nombre del lenguaje : ECMASCRIPT
-Versión del lenguaje utilizado: 6.0
-Universidad Tecnológica de Pereira
-Programa de Ingeniería de Sistemas y Computación
-Descripción de la funcionalidad del programa:
Este programa calcula el factorial de un número entero positivo ingresado por el usuario.
*/
const prompt = require("prompt-sync")(); // Se importa el módulo 'prompt-sync' para solicitar entrada al usuario

function calcularFactorial(numero) { // Función para calcular el factorial de un número
    if (numero < 0) {  // Se verifica si el número es negativo
        return "El factorial no está definido para números negativos.";
    } else if (numero === 0) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = 1; i <= numero; i++) {  // Se calcula el factorial del número mediante un bucle
            factorial *= i; // Se multiplica el factorial por cada número desde 1 hasta el número dado
        }
        return factorial; // Se devuelve el resultado del factorial
    }
}

function iniciarPrograma() { // Función principal que inicia el programa
    console.log("Este programa calcula el factorial de un número entero positivo.");
    let numero = parseInt(prompt("Ingrese un número entero positivo: "));  // Se solicita al usuario que ingrese un número entero positivo

    let factorial = calcularFactorial(numero); // Se calcula el factorial del número ingresado

    if (typeof factorial === 'string') {  // Se muestra el resultado del cálculo
        console.log(factorial); // Si el resultado es un mensaje de error, se muestra tal cual
    } else {
        console.log("El factorial de", numero, "es:", factorial); // Si es un número, se muestra el factorial
    }
}

iniciarPrograma(); // Se llama a la función principal para iniciar el programa
