const v17 = () => {
    const filas = 10;
    const columnas = 19;
    for (let fila = 0; fila < filas; fila++) {
      let filaActual = "";
      for (let columna = 0; columna < columnas; columna++) {
        if (columna === fila) {
          filaActual += "Z";
        } else if (columnas - columna === fila + 1) {
          filaActual += "Z";
        } else if (columna < fila) {
          filaActual += " ";
        } else {
          filaActual += " ";
        }
      }
      console.log(filaActual);
    }
  };
  v17();
  