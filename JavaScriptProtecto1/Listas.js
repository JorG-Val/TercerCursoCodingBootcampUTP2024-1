/*
Fecha de publicación: 15-04-2024
Hora de publicación: 9:07 AM
Versión de su código: 18
Autores: Ing(c): Santiago Melo Angarita - Jorge Andres Valderrama Baron
Versión del lenguaje utilizado: 6.0
Descripción de la funcionalidad del programa:
    Este programa contiene 3 funciones:
        1. Función para encontrar el mayor y menor número en una lista.
        2. Función para concatenar y ordenar dos listas.
        3. Función para invertir los elementos de una lista.
*/

function encontrarMayoresMenores(lista) { // Función para encontrar el mayor y menor número en una lista
    let maximo = Math.max(...lista);  // Utiliza Math.max para encontrar el valor máximo en la lista pasada
    let minimo = Math.min(...lista); // Utiliza Math.min para encontrar el valor mínimo en la lista pasada
    console.log(`El número más grande es: ${maximo}`); // Imprime el valor máximo encontrado en la consola
    console.log(`El número más pequeño es: ${minimo}`);// Imprime el valor mínimo encontrado en la consola
}

function concatenarOrdenarListas(lista1, lista2) { // Función para concatenar y ordenar dos listas
    let listaCombinada = lista1.concat(lista2); // Concatena lista1 con lista2 usando el método concat
    listaCombinada.sort((a, b) => a - b); // Ordena la lista combinada numéricamente
    console.log(`Lista combinada y ordenada: [${listaCombinada.join(', ')}]`); // Imprime la lista combinada y ordenada, uniendo los elementos con comas
}

function invertirLista(lista) { // Función para invertir los elementos de una lista
    let listaInvertida = lista.reverse(); // Invierte el orden de los elementos de la lista usando el método reverse
    console.log(`Lista invertida: [${listaInvertida.join(', ')}]`); // Imprime la lista invertida, uniendo los elementos con comas
}

console.log("Ejecutando función de Mayores y Menores:");// Ejecución de funciones con ejemplos dados
encontrarMayoresMenores([5, 12, 3, 8, 1]);// Llama a la función encontrarMayoresMenores con una lista de ejemplo

console.log("\nEjecutando función de Concatenación de Listas:"); // Imprime un mensaje para indicar la ejecución de la función concatenarOrdenarListas
concatenarOrdenarListas([4, 9, 2], [7, 5, 1]); // Llama a la función concatenarOrdenarListas con dos listas de ejemplo


console.log("\nEjecutando función de Inversión de Lista:");// Imprime un mensaje para indicar la ejecución de la función invertirLista
invertirLista([3, 6, 9, 12, 15]); // Llama a la función invertirLista con una lista de ejemplo

