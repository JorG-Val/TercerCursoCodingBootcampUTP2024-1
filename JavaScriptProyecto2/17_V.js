/*
-Fecha de publicación: 19-04-2024
-Hora de publicación: 12:05 PM
-Versión de su código: 21
-Autores:Ing(c): Jorge Andres Valderrama - Mariand Evans - Juan Manuel Vargas Rios - Kevin leiton - Manuela Cardona - Santigo Melo
-Nombre del lenguaje : ECMASCRIPT
-Versión del lenguaje utilizado: 6.0
-Universidad Tecnológica de Pereira
-Programa de Ingeniería de Sistemas y Computación
-Descripción de la funcionalidad del programa:
Este programa imprime un patrón en forma de "Z" en una matriz de 10x19.
*/
const v17 = () => { // Función para imprimir el patrón "Z"
    const filas = 10; // Número de filas de la matriz
    const columnas = 19; // Número de columnas de la matriz
    for (let fila = 0; fila < filas; fila++) {  // Se recorren las filas de la matriz
      let filaActual = ""; // Se inicializa la fila actual
      for (let columna = 0; columna < columnas; columna++) { // Se recorren las columnas de la fila actual
        if (columna === fila) {  // Se decide qué caracter imprimir en función de la posición en la matriz
          filaActual += "Z"; // Si la columna es igual a la fila o si la diferencia entre el número total de columnas y la columna es igual a la fila más uno, se imprime "Z"
        } else if (columnas - columna === fila + 1) {
          filaActual += "Z";  // Si estamos en otra posición específica, se imprime "Z"
        } else if (columna < fila) {
          filaActual += " "; // Si la columna es menor que la fila, se imprime un espacio en blanco
        } else {
          filaActual += " "; // Si no se cumple ninguna condición anterior, se imprime un espacio en blanco
        }
      }
      console.log(filaActual); // Se imprime la fila actual
    }
  };
  v17(); // Se llama a la función para imprimir el patrón "Z"
  
