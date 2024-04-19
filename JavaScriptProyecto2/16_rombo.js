/*
-Fecha de publicación: 19-04-2024
-Hora de publicación: 9:10 AM
-Versión de su código: 21
-Autores:Ing(c): Jorge Andres Valderrama Baron
-Nombre del lenguaje : ECMASCRIPT
-Versión del lenguaje utilizado: 6.0
-Universidad Tecnológica de Pereira
-Programa de Ingeniería de Sistemas y Computación
-Descripción de la funcionalidad del programa:
Este programa imprime un rombo utilizando el carácter "z".
*/
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
Este programa imprime un rombo utilizando el carácter "z".
*/
const rombo = () => { // Función para imprimir el rombo
  var filas = 4; // Número de filas del rombo
  for (var i = 0; i < filas; i++) {  // Se recorren las filas para construir la parte superior del rombo
    var linea = ""; // Se inicializa la línea actual
    for (var j = 0; j < filas - i; j++) { // Se agregan espacios en blanco antes de los caracteres "z" para ajustar la posición del rombo
      linea += " ";
    }
    for (var k = 0; k < 2 * i + 1; k++) {  // Se agregan los caracteres "z" en la línea actual
      linea += "z";
    }
    console.log(linea); // Se imprime la línea actual del rombo
  }
  for (var i = filas - 2; i >= 0; i--) { // Se recorren las filas para construir la parte inferior del rombo
    var linea = "";
    for (var j = 0; j < filas - i; j++) {  // Se agregan espacios en blanco antes de los caracteres "z" para ajustar la posición del rombo
      linea += " ";
    }
    for (var k = 0; k < 2 * i + 1; k++) { // Se agregan los caracteres "z" en la línea actual
      linea += "z";
    }
    console.log(linea); // Se imprime la línea actual del rombo
  }
};
rombo(); // Se llama a la función para imprimir el rombo
