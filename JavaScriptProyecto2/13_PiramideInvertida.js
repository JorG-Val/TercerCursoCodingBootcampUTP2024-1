const piramideInvertida = () => {
    let filas = 7;
    let columnas = 13;
  
    for (let fila = 1; fila <= filas; fila++) {
      let filaActual = "";
      for (let i = 0; i < 33; i++) {
        filaActual += " ";
      }
      for (let columna = 1; columna <= columnas; columna++) {
        if (columna >= fila && columna <= columnas - fila + 1) {
          filaActual += "P";
        } else {
          filaActual += " ";
        }
      }
      console.log(filaActual);
    }
  };
  
  piramideInvertida();
  