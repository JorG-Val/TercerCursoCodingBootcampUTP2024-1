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
Este programa calcula y muestra la suma de los elementos de la serie de Fibonacci que no superen el 
límite de 100.

*/
function fibonacciRecursivo(n) { // Función para calcular el n-ésimo término de la serie de Fibonacci
    if (n === 0 || n === 1) {  // Casos base: cuando n es 0 o 1, el resultado es el mismo número
        return n;
    } else {
        return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);  // suma de los dos términos anteriores

    }
}

function mostrarFibonacciSuma() { // Función para mostrar la suma de los elementos de la serie de Fibonacci hasta el límite de 100
    let limite = 100;
    let i = 0;
    let numero = 0;
    let suma = 0;

    console.log("Este programa presenta la suma de los elementos de la serie Fibonacci entre 0 y 100.");  // Se muestra una descripción de la operación


    while (numero <= limite) {  // Se genera la serie de Fibonacci y se calcula la suma de los elementos que no superen el límite
        numero = fibonacciRecursivo(i);
        if (numero <= limite) {
            process.stdout.write(numero + ", "); // Se muestra el número en la consola
            suma += numero; // Se suma el número al total
        }
        i++;
    }
    console.log("la suma es " + suma + " , ");  // Se muestra la suma total en la consola
}
mostrarFibonacciSuma(); // Se llama a la función para mostrar la suma de la serie de Fibonacci



