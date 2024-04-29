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
Este programa mueve caracteres en un arreglo para simular un efecto visual de desplazamiento.
*/
const moviendoCharacters10 = () => { // Función para mover caracteres y simular un efecto visual
    let caracteres = ["A", " ", " ", " ", " ", " ", " ", "A"]; // Arreglo inicial de caracteres
  
    console.log(caracteres.join("")); // Se muestra el estado inicial del arreglo
   
    for (let columna = 0; columna < 3; columna++) { // Se realiza un bucle para mover los caracteres en el arreglo
      setTimeout(() => {
        console.clear(); // Se limpia la consola para simular animación
        caracteres[columna] = " "; // Se actualizan los caracteres en posiciones específicas para simular el movimiento
        caracteres[caracteres.length - (columna + 1)] = " ";
        caracteres[columna + 1] = "A";
        caracteres[caracteres.length - (columna + 2)] = "A";
        console.log(caracteres.join("")); // Se muestra el estado actualizado del arreglo
      }, 350 * columna); // Se establece un retraso para cada iteración
    } 
  };
  
  moviendoCharacters10();  // Se llama a la función para iniciar el efecto de movimiento