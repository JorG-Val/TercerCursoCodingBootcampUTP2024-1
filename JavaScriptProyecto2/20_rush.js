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
Este programa imprime un patrón que representa un marco rectangular con bordes diagonales invertidos utilizando los caracteres "*", "/" y "".
*/
const rush20 = (ancho, alto) => { // Función para imprimir el patrón
    for (let fila = 1; fila <= alto; fila++) { // Se recorren las filas
      let filaActual = ""; // Se inicializa la fila actual
      for (let columna = 1; columna <= ancho; columna++)  // Se recorren las columnas
        if ((columna === 1 && fila === 1) || (columna === ancho && fila === alto)) { // Se decide qué carácter imprimir en función de la posición en la matriz
          filaActual += "/"; // Si estamos en una esquina superior izquierda o inferior derecha, se imprime "/"
        } else if ((columna === ancho && fila === 1) || (columna === 1 && fila === alto)) {
          filaActual += "\\"; // Si estamos en una esquina superior derecha o inferior izquierda, se imprime "\"
        } else if (fila === 1 || fila === alto || columna === 1 || columna === ancho) {
          filaActual += "*"; // Si estamos en un borde, se imprime "*"
        } else {
          filaActual += " "; // Si no, se imprime un espacio en blanco
        }
      console.log(filaActual); // Se imprime la fila actual
    }
  }; 
  rush20(10, 5); // Se llama a la función para imprimir el patrón con un ancho de 10 y un alto de 5
  