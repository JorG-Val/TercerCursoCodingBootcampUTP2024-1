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
Este programa imprime dos flechas utilizando el carácter "A".
*/
const dosFlechas = () => { // Función para imprimir las dos flechas
    const filas = 7; // Número de filas de las flechas
    const medio = Math.floor(filas / 2); // Punto medio de las filas
    for (let fila = 0; fila < filas; fila++) {  // Se recorren las filas para construir las flechas
      let lineaActual = ""; // Se inicializa la línea actual
      for (let i = 0; i < 27; i++) {  // Se agrega espacio en blanco para ajustar la posición de las flechas
        lineaActual += " "; 
      }
      for (let columna = 0; columna < filas; columna++) { // Se recorren las columnas de la fila actual
        if ( // Se decide si imprimir el carácter "A" o un espacio en blanco
          (columna <= fila && columna < medio && fila < medio) ||
          (columna + fila >= filas - 1 && columna > medio && fila < medio) ||
          fila === medio ||
          (fila > medio && columna + fila <= filas - 1) ||
          (fila > medio && filas - 1 - columna + fila <= filas - 1)
        ) {
          lineaActual += "A"; // Si estamos dentro de las regiones de las flechas, se imprime "A"
        } else {
          lineaActual += " "; // Si no, se imprime un espacio en blanco
        }
      }
      lineaActual += " "; // Se agrega espacio en blanco al final de la línea
      console.log(lineaActual); // Se imprime la línea actual
    }
  };
  dosFlechas(); // Se llama a la función para imprimir las dos flechas