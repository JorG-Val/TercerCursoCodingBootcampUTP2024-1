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
Este programa calcula la suma de los factoriales de todos los números desde 0 hasta N, donde N es un número entero no negativo ingresado por el usuario.
*/
const prompt = require("prompt-sync")(); // Se importa el módulo 'prompt-sync' para solicitar entrada al usuario

function calcularFactorial(numero) { // Función para calcular el factorial de un número
    if (numero < 0) {     // Se verifica si el número es negativo
        return "El factorial no está definido para números negativos.";
    } else if (numero === 0) {
        return 1; // El factorial de 0 es 1
    } else {
        let factorial = 1; 
        for (let i = 1; i <= numero; i++) { // Se calcula el factorial del número mediante un bucle
            factorial *= i; // Se multiplica el factorial por cada número desde 1 hasta el número dado
        }
        return factorial;  // Se devuelve el resultado del factorial
    }
}

function validarNumero(numero) { // Función para validar si un número es no negativo
    return numero >= 0;
}

function calcularSumaFactoriales(hastaN) { // Función para calcular la suma de los factoriales desde 0 hasta un número dado
    let suma = 0;
    for (let i = 0; i <= hastaN; i++) {  // Se recorren los números desde 0 hasta el número dado
        suma += calcularFactorial(i); // Se suma el factorial de cada número
    }
    return suma; // Se devuelve la suma total de los factoriales
}

function iniciarPrograma() { // Función principal que inicia el programa
    console.log("Este programa calcula la suma de los factoriales de todos los números desde 0 hasta N.");
    let numero = parseInt(prompt("Ingrese un número entero no negativo: "));  // Se solicita al usuario que ingrese un número entero no negativo

    if (!validarNumero(numero)) { // Se valida si el número ingresado es no negativo
        console.log("Debe ingresar un número entero no negativo.");
        return; // Si no es no negativo, se muestra un mensaje de error y se termina el programa
    }

    let sumaFactoriales = calcularSumaFactoriales(numero); // Se calcula la suma de los factoriales desde 0 hasta el número ingresado
    console.log("La suma de los factoriales desde 0 hasta", numero, "es:", sumaFactoriales);     // Se muestra el resultado de la suma de los factoriales

}

iniciarPrograma();// Se llama a la función principal para iniciar el programa
