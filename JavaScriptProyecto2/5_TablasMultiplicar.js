/*
-Fecha de publicación: 19-04-2024
-Hora de publicación: 12:12 PM
-Versión de su código: 21
-Autores:Ing(c): Jorge Andres Valderrama - Mariand Evans - Juan Manuel Vargas Rios - Kevin leiton - Manuela Cardona - Santigo Melo
-Nombre del lenguaje : ECMASCRIPT
-Versión del lenguaje utilizado: 6.0
-Universidad Tecnológica de Pereira
-Programa de Ingeniería de Sistemas y Computación
-Descripción de la funcionalidad del programa:
Este programa imprime las tablas de multiplicar del 1 al 10.
*/
function imprimirTabla(numero) {// Función para imprimir la tabla de multiplicar de un número dado
    for (let i = 1; i <= 10; i++) {  // Se recorre del 1 al 10 para imprimir los resultados de la multiplicación
        console.log(numero + ' x ' + i + ' = ' + (numero * i));
    }
}

function presentarTabla() { // Función para presentar todas las tablas de multiplicar del 1 al 10
    for (let j = 1; j <= 10; j++) {   // Se recorre del 1 al 10 para presentar cada tabla de multiplicar
        imprimirTabla(j); // Se llama a la función imprimirTabla con el número actual
    }
}

presentarTabla(); // Se llama a la función para presentar todas las tablas de multiplicar
