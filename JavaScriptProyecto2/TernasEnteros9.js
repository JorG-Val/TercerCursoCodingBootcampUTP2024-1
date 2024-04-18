function generarTernas() {
    let contador = 1;
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            console.log(contador, i, j);
            contador++;
        }
    }
}

console.log("Ternas de enteros generadas:");
generarTernas();
