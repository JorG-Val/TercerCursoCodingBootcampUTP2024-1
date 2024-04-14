// Función para encontrar el mayor y menor número en una lista
function encontrarMayoresMenores(lista) {
    let maximo = Math.max(...lista);
    let minimo = Math.min(...lista);
    console.log(`El número más grande es: ${maximo}`);
    console.log(`El número más pequeño es: ${minimo}`);
}

// Función para concatenar y ordenar dos listas
function concatenarOrdenarListas(lista1, lista2) {
    let listaCombinada = lista1.concat(lista2);
    listaCombinada.sort((a, b) => a - b);
    console.log(`Lista combinada y ordenada: [${listaCombinada.join(', ')}]`);
}

// Función para invertir los elementos de una lista
function invertirLista(lista) {
    let listaInvertida = lista.reverse();
    console.log(`Lista invertida: [${listaInvertida.join(', ')}]`);
}

// Ejecución de funciones con ejemplos dados
console.log("Ejecutando función de Mayores y Menores:");
encontrarMayoresMenores([2, 9, 29, 92, 90]);

console.log("\nEjecutando función de Concatenación de Listas:");
concatenarOrdenarListas([92, 9, 2], [33, 99, 3]);

console.log("\nEjecutando función de Inversión de Lista:");
invertirLista([2, 9, 29, 92, 90]);
