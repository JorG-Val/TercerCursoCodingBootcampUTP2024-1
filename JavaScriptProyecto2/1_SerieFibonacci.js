/* -Fecha de publicación: 19-04-2024
-Hora de publicación: 9:10 AM
-Versión de su código: 20
-Autores:Ing(c): Jorge Andres Valderrama Baron
-Nombre del lenguaje : ECMASCRIPT
-Versión del lenguaje utilizado: 6.0
-Universidad Tecnológica de Pereira
-Programa de Ingeniería de Sistemas y Computación
-Descripción de la funcionalidad del programa:
Este programa implementa dos funciones para calcular la serie de Fibonacci de manera recursiva e iterativa, 
respectivamente. Además, proporciona una función para mostrar los números de la serie de Fibonacci que no 
superen el límite de 10,000.
*/
function fibonacciRecursivo(n) { // Función recursiva para calcular el n-ésimo término de la serie de Fibonacci
    if (n === 0 || n === 1) { // Casos base: cuando n es 0 o 1, el resultado es el mismo número
        return n;
    } else { 
        return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2); // Caso recursivo: suma de los dos términos anteriores
    }
}

function fibonacciIterativo(n) { // Función iterativa para calcular el n-ésimo término de la serie de Fibonacci
    if (n === 0 || n === 1) {     // Casos base: cuando n es 0 o 1, el resultado es el mismo número
        return n;
    } else {
        let a = 0;
        let b = 1;
        let c;
        for (let i = 2; i <= n; i++) {  // Iteración para calcular los términos sucesivos
            c = a + b;
            a = b;
            b = c;
        }
        return c;
    }
}

function mostrarFibonacci() { // Función para mostrar los números de la serie de Fibonacci que no superen un límite de 10,000
    let limite = 10000;
    let i = 0;
    let numero = 0;

    console.log("Este programa presenta la serie de Fibonacci como la serie que comienza con los dígitos 1 y 0 y va sumando progresivamente los dos últimos elementos de la serie, así: 0 1 1 2 3 5 8 13 21 34.......");
    console.log("Para este programa, se presenta la serie fibonacci sin sobrepasar el numero 10,000");

    while (numero <= limite) { // Se generan los números de la serie de Fibonacci y se muestran en la consola

        numero = fibonacciRecursivo(i);
        if (numero <= limite) {
            process.stdout.write(numero.toString() + ",");
        }
        i++;
    }
} 
mostrarFibonacci(); // Se llama a la función para mostrar la serie de Fibonacci
