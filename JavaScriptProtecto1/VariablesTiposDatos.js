const prompt = require('prompt-sync')();
//let PrimerDato = prompt('dato');
//console.log(PrimerDato)

//calculo de celsius a fahrenheit
function ConversionDeTemperatura(){
    //variable temperatura
    let temperatura = prompt ("Por favor ingrese el valor de su temperatura en celsius: ");
    let resultado = (9/5 * temperatura) + 32;
    console.log(temperatura + "°C son "+ resultado + " grados en fahrenheit "); 
};


//input funcion calculadora IMC
function calcularIMC(){
    let peso= prompt("Por favor, ingresa tu peso en kilograms:");
    let altura= prompt("Por favor ingresa tu altura en metros:");
    let resultado = peso/(altura)**2
    console.log("su indice de masa corporal es : "+ resultado);
}


// Función para generar nombre de usuario
function generarNombreUsuario(){
    // Solicitar al usuario su nombre
    let nombre = prompt("Nombre: ");
    // Solicitar al usuario su apellido
    let apellido = prompt("Apellido: ");
    // Solicitar al usuario su año de nacimiento
    let añoNacimiento = prompt("Año de nacimiento: ");
    // Generar el nombre de usuario combinado
    let nombreUsuario = nombre + apellido + añoNacimiento;
    // Mostrar el nombre de usuario combinado
    console.log("Nombre de usuario combinado: " + nombreUsuario);
}


//funcion para generar
function Fibonacci() {
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




// menu 
function menu() {
    console.log('\nMenú');
    console.log('1). Conversor de °C a °F.');
    console.log('2). Indice de masa corporal.');
    console.log('3). Creador de nombre de usuario.');
    console.log('4). Función Fibonacci.');
    console.log('5). Salir del menú');

    let option = prompt('Seleccione una opción del menu: ');

    switch(option) {
        case '1':
            console.log('\nHas seleccionado la opcion 1.');
            ConversionDeTemperatura();
            menu();
        
        case '2':
            console.log('Has seleccionado la opcion 2.');
            calcularIMC();
            menu();
        
        case '3':
            console.log('Has seleccionado la opcion 3.');
            generarNombreUsuario();
            menu();

        case '4':
            console.log('Has seleccionado la opcion 4.');
            Fibonacci();
            menu();

        case '5':
            console.log('Has seleccionado la opcion 5. Saliendo del programa');
            return;

        default:
            console.log('\nNo has seleccionado ninguna opción del menú.')
            menu();
    };
};
menu();