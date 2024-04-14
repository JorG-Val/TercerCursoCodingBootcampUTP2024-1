//generar un numero aleatorio
const prompt= require("prompt-sync")();


function getRandomInt() {
    console.log(Math.floor(Math.random()* 101 ));
}

getRandomInt()

//calculadora factorial
function calculadoraFactorial(){
    let n = prompt("ingrese un numero para calcular su factorial: ");
    let factorial = 1
    let resultado = 1

    while(factorial <= n){
        resultado = factorial + resultado
        factorial ++
        console.log(resultado)
    }
}
calculadoraFactorial()