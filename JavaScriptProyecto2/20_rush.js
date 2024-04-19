const rush20 = (ancho, alto) => {
    for (let fila = 1; fila <= alto; fila++) {
      let filaActual = "";
      for (let columna = 1; columna <= ancho; columna++)
        if ((columna === 1 && fila === 1) || (columna === ancho && fila === alto)) {
          filaActual += "/";
        } else if ((columna === ancho && fila === 1) || (columna === 1 && fila === alto)) {
          filaActual += "\\";
        } else if (fila === 1 || fila === alto || columna === 1 || columna === ancho) {
          filaActual += "*";
        } else {
          filaActual += " ";
        }
      console.log(filaActual);
    }
  };
  rush20(10, 5);
  