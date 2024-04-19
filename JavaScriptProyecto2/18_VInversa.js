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
Este programa imprime un patrón en forma de "Z" invertida en una matriz de tamaño 10x19.
*/
const vInversa = () => { // Función para imprimir el patrón en forma de "Z" invertida
    const filas = 10; // Número de filas de la matriz
    const columnas = 19; // Número de columnas de la matriz
    for (let fila = 1; fila < filas + 1; fila++) {  // Se recorren las filas para construir el patrón en forma de "Z" invertida
      let filaActual = ""; // Se inicializa la fila actual
      for (let columna = 1; columna < columnas + 1; columna++) { // Se recorren las columnas de la fila actual
        if (fila === 1 && columna === 10) { // Se decide qué carácter imprimir en función de la posición en la matriz
          for (let i = 0; i < 0; i++) {
            filaActual += "Z"; // Se añaden caracteres "Z"
          }
          filaActual += "Z";// Se añade un carácter "Z"
          for (let i = 0; i < 0; i++) {
            filaActual += "Z"; // Se añaden caracteres "Z"
          }
          break; // Se sale del bucle para evitar que se agreguen más caracteres
        }
        if (fila + columna === 11 || columna - fila === 9) { // Si estamos en una posición específica, se imprime "Z"
          filaActual += "Z"; // Se añade un carácter "Z"
        } else {
          filaActual += " "; // Si no, se imprime un espacio en blanco
        }
      }
      console.log(`${filaActual} `); // Se imprime la fila actual de la matriz
    }
  };
  vInversa(); // Se llama a la función para imprimir el patrón en forma de "Z" invertida
  