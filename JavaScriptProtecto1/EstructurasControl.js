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



function contarVocales() {
    let frase = prompt("Ingrese una frase para contar las vocales:"); // Almacena la frase ingresada por el usuario para contar las vocales.
    let vocales = { 'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0 }; // Almacena un objeto con las vocales como claves y su recuento inicializado en 0.
    for (let letra of frase.toLowerCase()) { // Itera sobre cada letra de la frase en minúsculas.
        if (letra in vocales) { // Comprueba si la letra es una vocal.
            vocales[letra]++; // Incrementa el contador de la vocal correspondiente.
        }
    }
    for (let vocal in vocales) { // Itera sobre cada vocal en el objeto 'vocales'.
        console.log("La vocal '" + vocal + "' aparece " + vocales[vocal] + " veces."); // Muestra el recuento de cada vocal.
    }
}
