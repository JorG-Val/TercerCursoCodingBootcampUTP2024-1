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
Este programa imprime un triángulo rectángulo hacia la derecha utilizando el carácter "A".
*/
const trianguloDerecha = () => { // Función para imprimir un triángulo rectángulo hacia la derecha
    let filas = 5; // Número de filas del triángulo
    let columnas = 5; // Número de columnas del triángulo
    for (let fila = 25; fila > filas; fila--) { // Se recorren las filas del triángulo
      let lineaActual = ""; // Se inicializa la línea actual
      for (let columna = 25; columna > columnas; columna--) { // Se recorren las columnas de la fila actual
        if (fila <= columna) { // Se decide si imprimir el carácter "A" o un espacio en blanco
          lineaActual += "A"; // Si la fila es menor o igual a la columna, se imprime "A"
        } else {
          lineaActual += " "; // Si no, se imprime un espacio en blanco
        }
      }
      for (let i = 0; i < 55; i++) { // Se agrega espacio en blanco para ajustar la forma del triángulo
        lineaActual += " ";
      }
      console.log(lineaActual.split("").reverse().join("")); // Se invierte la línea actual y se imprime
    }
  };
  
  trianguloDerecha(); // Se llama a la función para imprimir el triángulo
  