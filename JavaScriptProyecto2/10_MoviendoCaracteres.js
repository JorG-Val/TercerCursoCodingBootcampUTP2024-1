const moviendoCharacters10 = () => {
    let caracteres = ["A", " ", " ", " ", " ", " ", " ", "A"];
  
    console.log(caracteres.join(""));
  
    for (let columna = 0; columna < 3; columna++) {
      setTimeout(() => {
        console.clear();
        caracteres[columna] = " ";
        caracteres[caracteres.length - (columna + 1)] = " ";
        caracteres[columna + 1] = "A";
        caracteres[caracteres.length - (columna + 2)] = "A";
        console.log(caracteres.join(""));
      }, 350 * columna);
    }
  };
  
  moviendoCharacters10();
