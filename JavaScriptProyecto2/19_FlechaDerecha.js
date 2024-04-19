const flechaDerecha = () => {
    let filas = 6;
    let columnas = 10;
  
    for (let fila = 1; fila < filas + 1; fila++) {
      var filaActual = "";
      for (let columna = 0; columna < columnas + 1; columna++) {
        if (columna < fila) {
          filaActual += "A";
        } else {
          filaActual += " ";
        }
      }
      for (let i = 0; i < 30; i++) {
        filaActual += " ";
      }
      console.log(filaActual.split("").reverse().join(""));
    }
  
    filas = 4;
    columnas = 10;
    for (let fila = 4; fila >= 0; fila--) {
      var filaActual = "";
  
      for (let columna = 0; columna < columnas + 1; columna++) {
        if (columna <= fila) {
          filaActual += "A";
        } else {
          filaActual += " ";
        }
      }
      for (let i = 0; i < 30; i++) {
        filaActual += " ";
      }
      console.log(filaActual.split("").reverse().join(""));
    }
  };
  flechaDerecha();
  