const vInversa = () => {
    const filas = 10;
    const columnas = 19;
    for (let fila = 1; fila < filas + 1; fila++) {
      let filaActual = "";
      for (let columna = 1; columna < columnas + 1; columna++) {
        if (fila === 1 && columna === 10) {
          for (let i = 0; i < 0; i++) {
            filaActual += "Z";
          }
          filaActual += "Z";
          for (let i = 0; i < 0; i++) {
            filaActual += "Z";
          }
          break;
        }
        if (fila + columna === 11 || columna - fila === 9) {
          filaActual += "Z";
        } else {
          filaActual += " ";
        }
      }
      console.log(`${filaActual} `);
    }
  };
  vInversa();
  