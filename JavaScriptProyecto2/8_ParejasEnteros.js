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
Este programa genera parejas de enteros del 0 al 4, donde cada par contiene un número repetido dos veces.
*/
function generarParejas() { // Función para generar parejas de enteros
    let contador = 0; 
    for (let i = 1; i <= 5; i++) { // Se recorre desde 1 hasta 5 para generar las parejas
        for (let j = 1; j <= 2; j++) { // Se recorre desde 1 hasta 2 para generar cada pareja dos veces
            console.log(contador, i); // Se muestra la pareja de enteros
            contador++;
        }
    }
}

console.log("Parejas de enteros generadas:"); // Se muestra un mensaje indicando que se van a generar las parejas de enteros
generarParejas(); // Se llama a la función para generar las parejas

