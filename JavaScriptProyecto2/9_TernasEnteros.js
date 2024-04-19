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
Este programa genera ternas de enteros del 1 al 3, donde cada terna contiene dos índices repetidos.
*/
function generarTernas() { // Función para generar ternas de enteros
    let contador = 1;
    for (let i = 1; i <= 3; i++) {   // Se recorre desde 1 hasta 3 para generar las ternas
        for (let j = 1; j <= 3; j++) { // Se recorre desde 1 hasta 3 para generar cada terna dos veces
            console.log(contador, i, j); // Se muestra la terna de enteros
            contador++;
        }
    }
}

console.log("Ternas de enteros generadas:"); // Se muestra un mensaje indicando que se van a generar las ternas de enteros
generarTernas(); // Se llama a la función para generar las ternas

