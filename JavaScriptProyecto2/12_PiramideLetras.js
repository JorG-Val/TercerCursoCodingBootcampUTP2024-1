const piramideLetras = () => {
    let filas = 7;
    let columnas = 13;
    let letras = ["P", "N", "L", "J", "H", "F", "D"];
  
    for (let fila = 1; fila <= filas; fila++) {
      let filaActual = "";
  
      for (let columna = 1; columna <= columnas; columna++) {
        if (columna >= fila && columna <= columnas - fila + 1) {
          filaActual += letras[fila - 1];
        } else {
          filaActual += " ";
        }
      }
  
      // Imprimimos la fila actual
      console.log(filaActual);
    }
  };
  
  piramideLetras();
  
