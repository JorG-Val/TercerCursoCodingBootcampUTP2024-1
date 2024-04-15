/*
Fecha de publicación: 15-04-2024
Hora de publicación: 9:07 AM
Versión de su código: 18
Autores:Ing(c): Santiago Melo Angarita - Jorge Andres Valderrama Baron
Versión del lenguaje utilizado: 6.0
Descripción de la funcionalidad del programa:
    Este programa contiene 3 funciones:
        1. Función para generar un numero entre 0 y 100 el cual debera ser adivinado por el usuario
        2. Función para calcular el factorial de un número ingresado por el usuario.
        3. Función para contar las vocales en una frase ingresada por el usuario.
        Además, incluye una función de menú que permite al usuario seleccionar y ejecutar estas funciones.
Salvedades: 
    1. En la funcion de adivinar un numero solo se aceptaran numeros enteros positivos entre 0 y 100
    2. En la Funcion de la calculadora factorial solo se podra recibir numeros enteros positivo, si se llega a ejecutar con decimales, 
        fraccionarios o cualquier otro tipo de numero no se garantiza un resultado exitoso
    3. En la funcion de contar vocales solo se recibira texto, en caso de subir numeros o caracteres especiales no se garantiza
        un resultado exitoso
    4. En el menu la unica forma de salir de este a la hora de ejecutarlo, es seleccionando la opcion 4. Salir del menú, de ninguna
        otra forma podra salir de este menu
*/
const prompt= require("prompt-sync")(); // Importa el módulo 'prompt-sync' para solicitar entrada del usuario de forma síncrona
function adivinarNumero() {  // Función para adivinar un número generado aleatoriamente
    let numeroAleatorio = Math.floor(Math.random() * 101);    // Genera un número aleatorio entre 0 y 100 utilizando Math.random() y Math.floor
    let intentos = 1;   // Inicializa el contador de intentos en 1

    let intentoUsuario = prompt("Adivina el número (entre 0 y 100): ");    // Solicita al usuario que adivine el número

    while (parseInt(intentoUsuario) !== numeroAleatorio) {    // Comprueba si el número ingresado por el usuario es igual al número aleatorio generado
        if (parseInt(intentoUsuario) < numeroAleatorio) { // Comprueba si el número ingresado por el usuario es menor que el número aleatorio
            console.log("El número es demasiado bajo");   // Imprime un mensaje indicando que el número es demasiado bajo
        } else {    // Si el número ingresado por el usuario es mayor que el número aleatorio
            console.log("El número es demasiado alto");    // Imprime un mensaje indicando que el número es demasiado alto
        }
        intentoUsuario = prompt("Adivina el número (entre 0 y 100): ");    // Solicita al usuario que vuelva a intentar adivinar el número
        intentos++; // Incrementa el contador de intentos
    }

    console.log(`¡Felicidades! Adivinaste el número ${numeroAleatorio} en ${intentos} intentos.`);  // Imprime un mensaje indicando que el usuario ha adivinado correctamente el número y muestra la cantidad de intentos realizados
}

function calculadoraFactorial(){ // Función para calcular el factorial de un número ingresado por el usuario

    let n = prompt("ingrese un numero para calcular su factorial: ");    // Solicita al usuario que ingrese un número para calcular su factorial
    let factorial = 1    // Inicializa la variable factorial en 1
    let resultado = 1    // Inicializa la variables resultado en 1

    while(factorial <= n){    // Realiza un bucle while para calcular el factorial
        resultado = factorial + resultado; // Multiplica el resultado actual por el valor de factorial
        factorial ++; // Incrementa el valor de factorial para avanzar al siguiente número en el cálculo del factorial
        console.log(resultado); // Imprime el resultado actual en cada iteración
    }
}

function contarVocales() { // Función para contar las vocales en una frase ingresada por el usuario

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

function menu() { // Función para mostrar un menú de opciones y ejecutar las funciones correspondientes
    console.log('\nMenú');
    console.log('1). Adivina el numero.');
    console.log('2). Calculadora Factorial.');
    console.log('3). Contar Vocales.');
    console.log('4). Salir del menú');

    let option = prompt('Seleccione una opción del menu: ');     // Solicita al usuario que seleccione una opción del menú

    switch(option) {     // Utiliza un switch para ejecutar la función correspondiente según la opción seleccionada

        case '1':
            console.log('Has seleccionado la opcion 1.');// Imprime un mensaje indicando que se ha seleccionado la opción 1
            adivinarNumero();   // Llama a la función adivinarNumero para iniciar el juego de adivinar el número
            menu();// Llama recursivamente a la función menu para mostrar nuevamente el menú después de ejecutar la opción
        
        case '2':
            console.log('Has seleccionado la opcion 2.');// Imprime un mensaje indicando que se ha seleccionado la opción 2
            calculadoraFactorial(); // Llama a la función calculadoraFactorial para calcular el factorial de un número
            menu();
        
        case '3':
            console.log('Has seleccionado la opcion 3.');// Imprime un mensaje indicando que se ha seleccionado la opción 3
            contarVocales();// Llama a la función contarVocales para contar las vocales en una frase
            menu();// Llama recursivamente a la función menu para mostrar nuevamente el menú después de ejecutar la opción


        case '4':
            console.log('Has seleccionado la opcion 4. Saliendo del programa');// Imprime un mensaje indicando que se ha seleccionado la opción 4 y que se está saliendo del programa
            runing = false;// Establece la variable 'runing' a false para salir del bucle de menú
            break;// Termina el case

        default:
            console.log('No has seleccionado ninguna opción del menú.')// Imprime un mensaje indicando que la opción seleccionada no es válida
            menu();// Llama recursivamente a la función menu para mostrar nuevamente el menú si la opción seleccionada no es válida

    };
};
menu();
