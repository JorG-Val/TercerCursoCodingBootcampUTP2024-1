/*
-Fecha de publicación: 19-04-2024
-Hora de publicación: 9:10 AM
-Versión de su código: 21
-Autores:Ing(c): Jorge Andres Valderrama Baron
-Nombre del lenguaje : ECMASCRIPT
-Versión del lenguaje utilizado: 6.0
-Universidad Tecnológica de Pereira
-Programa de Ingeniería de Sistemas y Computación
-Descripción de la funcionalidad del programa:
Este programa lee desde el teclado 15 números diferentes de cero, realiza varios cálculos con ellos y muestra los resultados.
*/
const prompt = require("prompt-sync")(); // Se importa el módulo 'prompt-sync' para solicitar entrada al usuario
function validaNumero(num) {// Función para validar si un número es NaN o cero
    return isNaN(num) || num === 0;
}

function procesarNumeros(numeros) { // Función para procesar los números ingresados
    let mayor = Number.MIN_SAFE_INTEGER; // Se inicializa la variable mayor con el valor mínimo seguro
    let menor = Number.MAX_SAFE_INTEGER; // Se inicializa la variable menor con el valor máximo seguro
    let cantidadNegativos = 0; // Contador para la cantidad de números negativos
    let sumaPositivos = 0; // Suma de los números positivos
    let cantidadPositivos = 0; // Contador para la cantidad de números positivos
    let cantidadMayores150 = 0; // Contador para la cantidad de números mayores a 150

    for (let num of numeros) { // Se recorre el arreglo de números
        if (validaNumero(num)) { // Se verifica si el número es válido
            console.log("Error: Todos los numeros deben ser diferentes de cero.");
            return;
        }

        if (num > 150) { // Se realizan diferentes cálculos con los números
            cantidadMayores150++;
        }

        if (num > mayor) {
            mayor = num;
        }
        if (num < menor) {
            menor = num;
        }
        if (num < 0) {
            cantidadNegativos++;
        }
        if (num > 0) {
            sumaPositivos += num;
            cantidadPositivos++;
        }
    }

    console.log("Cantidad de numeros Mayores a 150:", cantidadMayores150); // Se muestran los resultados de los cálculos
    console.log("Numero mayor y menor encontrados en el grupo:", mayor, menor); // Se muestran los resultados de los cálculos
    console.log("Cantidad de numeros negativos encontrados:", cantidadNegativos); // Se muestran los resultados de los cálculos
    console.log("Promedio de los positivos encontrados:", cantidadPositivos > 0 ? sumaPositivos / cantidadPositivos : 'N/A'); // Se muestran los resultados de los cálculos
}

function verificarCantidadNumeros(numeros) { // Función para verificar si se ingresaron exactamente 15 números
    return numeros.length === 15;
}

function iniciarPrograma() { // Función principal que inicia el programa
    console.log("Este programa lee desde el teclado 15 numeros diferentes de cero y realiza calculos.");

    let input = prompt("Ingrese 15 numeros separados por espacios: "); // Se solicita al usuario que ingrese los 15 números separados por espacios
    let numerosEntrada = input.trim().split(' ').map(Number); // Convertir la entrada en números

    if (!verificarCantidadNumeros(numerosEntrada)) { // Se verifica si se ingresaron exactamente 15 números
        console.log("Debe ingresar exactamente 15 numeros.");
        return;
    }

    procesarNumeros(numerosEntrada); // Se procesan los números ingresados
}

iniciarPrograma(); // Se llama a la función principal para iniciar el programa
