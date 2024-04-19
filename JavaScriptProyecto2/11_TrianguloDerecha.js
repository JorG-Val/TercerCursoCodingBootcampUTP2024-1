const trianguloDerecha = () => {
    let filas = 5;
    let columnas = 5;
    for (let fila = 25; fila > filas; fila--) {
      let lineaActual = "";
      for (let columna = 25; columna > columnas; columna--) {
        if (fila <= columna) {
          lineaActual += "A";
        } else {
          lineaActual += " ";
        }
      }
      for (let i = 0; i < 55; i++) {
        lineaActual += " ";
      }
      console.log(lineaActual.split("").reverse().join(""));
    }
  };
  
  trianguloDerecha();
  