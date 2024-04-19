const dosFlechas = () => {
    const filas = 7;
    const medio = Math.floor(filas / 2);
    for (let fila = 0; fila < filas; fila++) {
      let lineaActual = "";
      for (let i = 0; i < 27; i++) {
        lineaActual += " ";
      }
      for (let columna = 0; columna < filas; columna++) {
        if (
          (columna <= fila && columna < medio && fila < medio) ||
          (columna + fila >= filas - 1 && columna > medio && fila < medio) ||
          fila === medio ||
          (fila > medio && columna + fila <= filas - 1) ||
          (fila > medio && filas - 1 - columna + fila <= filas - 1)
        ) {
          lineaActual += "A";
        } else {
          lineaActual += " ";
        }
      }
      lineaActual += " ";
      console.log(lineaActual);
    }
  };
  dosFlechas();
  