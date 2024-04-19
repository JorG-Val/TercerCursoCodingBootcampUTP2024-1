/*
-Fecha de publicación: 19-04-2024
-Hora de publicación: 12:07 PM
-Versión de su código: 21
-Autores:Ing(c): Jorge Andres Valderrama - Mariand Evans - Juan Manuel Vargas Rios - Kevin leiton - Manuela Cardona - Santigo Melo
-Nombre del lenguaje : ECMASCRIPT
-Versión del lenguaje utilizado: 6.0
-Universidad Tecnológica de Pereira
-Programa de Ingeniería de Sistemas y Computación
-Descripción de la funcionalidad del programa:
Este programa imprime una flecha apuntando hacia la derecha utilizando el carácter "A".
*/
const flechaDerecha = () => { // Función para imprimir la flecha hacia la derecha
    let filas = 6; // Número de filas de la primera parte de la flecha
    let columnas = 10; // Número de columnas de la flecha
  
    for (let fila = 1; fila < filas + 1; fila++) { // Se recorren las filas para imprimir la primera parte de la flecha
      var filaActual = ""; // Se inicializa la fila actual
      for (let columna = 0; columna < columnas + 1; columna++) { // Se recorren las columnas de la fila actual
        if (columna < fila) { // Se decide qué carácter imprimir en función de la posición en la fila
          filaActual += "A"; // Si estamos en una posición específica, se imprime "A"
        } else {
          filaActual += " "; // Si no, se imprime un espacio en blanco
        }
      }
      for (let i = 0; i < 30; i++) { // Se agregan espacios en blanco al final de la fila para ajustar la posición de la flecha
        filaActual += " ";
      }
      console.log(filaActual.split("").reverse().join("")); // Se imprime la fila actual de la flecha en orden inverso
    }
  
    filas = 4; // Número de filas de la segunda parte de la flecha
    columnas = 10; // Número de columnas de la segunda parte de la flecha
    for (let fila = 4; fila >= 0; fila--) { // Se recorren las filas para imprimir la segunda parte de la flecha
      var filaActual = ""; // Se inicializa la fila actual
  
      for (let columna = 0; columna < columnas + 1; columna++) { // Se recorren las columnas de la fila actual
        if (columna <= fila) {  // Se decide qué carácter imprimir en función de la posición en la fila
          filaActual += "A"; // Si estamos en una posición específica, se imprime "A"
        } else {
          filaActual += " "; // Si no, se imprime un espacio en blanco
        }
      }
      for (let i = 0; i < 30; i++) { // Se agregan espacios en blanco al final de la fila para ajustar la posición de la flecha
        filaActual += " ";
      }
      console.log(filaActual.split("").reverse().join(""));   // Se imprime la fila actual de la flecha en orden inverso
    }
  };
  flechaDerecha(); // Se llama a la función para imprimir la flecha hacia la derecha
  
