function fibonacciRecursivo(n) {
    if (n === 0 || n === 1) {
        return n;
    } else {
        return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);
    }
}

function mostrarFibonacciSuma() {
    let limite = 100;
    let i = 0;
    let numero = 0;
    let suma = 0;

    console.log("Este programa presenta la suma de los elementos de la serie Fibonacci entre 0 y 100.");

    while (numero <= limite) {
        numero = fibonacciRecursivo(i);
        if (numero <= limite) {
            process.stdout.write(numero + " , ");
            suma += numero;
        }
        i++;
    }
    console.log("la suma es " + suma + " , ");
}
mostrarFibonacciSuma();


