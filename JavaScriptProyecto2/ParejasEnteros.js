function generarParejas() {
    let contador = 0;
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 2; j++) {
            console.log(contador, i);
            contador++;
        }
    }
}

console.log("Parejas de enteros generadas:");
generarParejas();
