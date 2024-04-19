const rombo = () => {
    //revisar
    var filas = 4;
    for (var i = 0; i < filas; i++) {
      var linea = "";
      for (var j = 0; j < filas - i; j++) {
        linea += " ";
      }
      for (var k = 0; k < 2 * i + 1; k++) {
        linea += "z";
      }
      console.log(linea);
    }
    for (var i = filas - 2; i >= 0; i--) {
      var linea = "";
      for (var j = 0; j < filas - i; j++) {
        linea += " ";
      }
      for (var k = 0; k < 2 * i + 1; k++) {
        linea += "z";
      }
      console.log(linea);
    }
  };
  rombo();
  