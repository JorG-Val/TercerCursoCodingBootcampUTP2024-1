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
Este programa imprime una pirámide de letras utilizando las letras "P", "N", "L", "J", "H", "F", "D".
*/
const piramideLetras = () => { // Función para imprimir la pirámide de letras
    let filas = 7;  // Número de filas de la pirámide
    let columnas = 13; // Número de columnas de la pirámide
    let letras = ["P", "N", "L", "J", "H", "F", "D"]; // Letras a utilizar en la pirámide
  
    for (let fila = 1; fila <= filas; fila++) {  // Se recorren las filas de la pirámide
      let filaActual = ""; // Se inicializa la fila actual
  
      for (let columna = 1; columna <= columnas; columna++) { // Se recorren las columnas de la fila actual
        if (columna >= fila && columna <= columnas - fila + 1) { // Se decide si imprimir una letra o un espacio en blanco
          filaActual += letras[fila - 1]; // Si estamos dentro del rango de la pirámide, se imprime la letra correspondiente
        } else {
          filaActual += " "; // Si no, se imprime un espacio en blanco
        }
      }
  
      console.log(filaActual); // Imprimimos la fila actual 
    }
  };
  
  piramideLetras(); // Se llama a la función para imprimir la pirámide de letras