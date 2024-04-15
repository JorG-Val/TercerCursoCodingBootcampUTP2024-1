/*
-Fecha de publicacion: 14-04-2024
-Hora de publicacion:9:20 PM
-version de su codigo: 14
-Autores: Ing(c): Santiago Melo Angarita - Jorge Andres Valderrama Baron
-Version del lenguaje utilizado: 6.0
-Universidad Tecnologica de Pereira
Programa de Ingenieria de Sistemas y Computacion
-Descripcion de la fincionalidad del programa:
    Para realizar este proyecto instalamos prompt-sync de Node para asi poder recibir y almacenar datos que ingresa
    eñ usuario por medio de teclado
    Este programa contiene 5 funciones:
        1. Funcion que convierte grados celsius a Fahrenheit teniendo en cuenta la formula:
            (9/5* C°) + 32. Donde el datode C° se le pide ingresando al usuario.
            input:32
            Output 32C° son 89.6 grados Fahrenheit
        2. Funcion que calcula el Indice de Masa Corpotal (IMS) teniendo en cuenta la formula
            peso/(altura)^2. Donde peso es pedido en kilogramos y altura en metros y se le pide ingresando al usurario.
            input: 70
                   1.75
            Output: Tu indice de masa corporal (IMC) es 22.85
        3. Funcion que genera un nombre de usuario concatenando los datos de nombre, apellido y año de nacimiento
           Estos datos se le pide ingresarlo al usuario
            Input: Jorge
                    Valderrama
                    2004
            Output: JorgeValderrama2004 
        4. Funcion que denota el n-esimo  numero de Fibonacci ingresado por el usuario
            Input: 7
            Output: 8
        5.  Funcion que crea un menu en la consola con 5 opciones que se pueden seleccionar escribiendo el numero
            de la opcion. Cada opcion le corresponde a cada una de las funciones descritas anteriormente.
            Este menu solo lo deja de mostrar cuando se selecciona la opcion 5.
-Salvedades:
        1. En la funcion del conversor de °C a °F solo se adniten numeros enteros positivos, la digitacion de
            cualquier otro tipo de numero o texto no garantizara el funcionamiento correcto del programa
        2. En la funcion de Indice de Masa Corporal solo se aceptaran las medidas de peso en kilogramos y la
            altura en metros, en caso de digitar otro tipo de numero como freaccionarios o texto no garantiza
            el funcionamiento correcto del programa
        3. En la funcion de Crear nomobre de usuario se recomienda el texto en las casillas de nombre y apellido,
            y numeros enteros positivos en el año de nacimiento, para cumplir con el objetivo principal de este
        4.  En la funcion fibonacci se recomienda usar solo enteros positivos para el funcionamiento correcto
            del programa
        5.   La unica forma correcta de salir del menu es seleccionando la opcion 5. Salir del menú
*/
const prompt = require('prompt-sync')(); // Importa el módulo 'prompt-sync' para solicitar entrada del usuario de forma síncrona

function ConversionDeTemperatura(){ // Función para convertir grados Celsius a Fahrenheit
    let temperatura = prompt ("Por favor ingrese el valor de su temperatura en celsius: "); // Solicita al usuario que ingrese la temperatura en Celsius
    let resultado = (9/5 * temperatura) + 32;  // Realiza el cálculo de conversión de Celsius a Fahrenheit
    console.log(temperatura + "°C son "+ resultado + " grados en fahrenheit "); // Imprime el resultado de la conversión
};

function calcularIMC(){// Función para calcular el Índice de Masa Corporal (IMC)
    let peso= prompt("Por favor, ingresa tu peso en kilograms:"); // Solicita al usuario que ingrese su peso en kilogramos
    let altura= prompt("Por favor ingresa tu altura en metros:"); // Solicita al usuario que ingrese su altura en metros
    let resultado = peso/(altura)**2 // Calcula el IMC utilizando la fórmula peso / (altura)^2
    console.log("su indice de masa corporal es : "+ resultado);  // Imprime el resultado del IMC
}

function generarNombreUsuario(){// Función para generar un nombre de usuario combinando nombre, apellido y año de nacimiento
    let nombre = prompt("Nombre: ");// Solicitar al usuario su nombre
    let apellido = prompt("Apellido: ");// Solicitar al usuario su apellido
    let añoNacimiento = prompt("Año de nacimiento: ");// Solicitar al usuario su año de nacimiento
    let nombreUsuario = nombre + apellido + añoNacimiento; // Generar el nombre de usuario combinado

    console.log("Nombre de usuario combinado: " + nombreUsuario);// Mostrar el nombre de usuario combinado
}

function Fibonacci() {// Función para calcular el n-ésimo número de la serie de Fibonacci

    let n1 = 0;
    let n2 = 1;

    var numeroIngresado = prompt(
        "Ingrese la posición de la serie Fibonacci que desea averiguar: "
    );
    numeroIngresado = Number(numeroIngresado);

    if (typeof numeroIngresado !== "number" || numeroIngresado <= 0) {
        console.log("Ingresa un numero valido");
        return;
    } else {
        if (numeroIngresado === 1) {
            console.log(0);
            return;
        } else if (numeroIngresado === 2) {
            console.log(1);
            return;
        } else {
            for (let i = 2; i < numeroIngresado; i++) {
                var resultado = n1 + n2;
                resultado = 1, 2, 3
                n1 = n2;
                n1 = 1, 1, 2
                n2 = resultado;
                n2= 1, 2, 3

                  console.log("El valor de i es: " + i);
                serie = (0,1,1,2,3,5,8,13)
            }
            console.log(resultado);
        }
    }
}



function menu() {// Función para mostrar el menú de opciones y ejecutar las funciones correspondientes
    console.log('\nMenú');
    console.log('1). Conversor de °C a °F.');
    console.log('2). Indice de masa corporal.');
    console.log('3). Creador de nombre de usuario.');
    console.log('4). Función Fibonacci.');
    console.log('5). Salir del menú');

    let option = prompt('Seleccione una opción del menu: ');// Solicita al usuario que seleccione una opción del menú

    switch(option) {// Utiliza un switch para ejecutar la función correspondiente según la opción seleccionada
        case '1':
            console.log('\nHas seleccionado la opcion 1.');
            ConversionDeTemperatura();
            menu(); // Llama recursivamente a la función menu para mostrar nuevamente el menú después de ejecutar la opción
            break;
        
        case '2':
            console.log('Has seleccionado la opcion 2.');
            calcularIMC(); 
            menu();// Llama recursivamente a la función menu para mostrar nuevamente el menú después de ejecutar la opción
            break;

        case '3':
            console.log('Has seleccionado la opcion 3.');
            generarNombreUsuario();
            menu(); // Llama recursivamente a la función menu para mostrar nuevamente el menú después de ejecutar la opción
            break;

        case '4':
            console.log('Has seleccionado la opcion 4.');
            Fibonacci();
            menu();   // Llama recursivamente a la función menu para mostrar nuevamente el menú después de ejecutar la opción
            break;

        case '5':
            console.log('Has seleccionado la opcion 5. Saliendo del programa');
            return;
            break;

        default:
            console.log('\nNo has seleccionado ninguna opción del menú.')
            menu();
    };
};
menu();
