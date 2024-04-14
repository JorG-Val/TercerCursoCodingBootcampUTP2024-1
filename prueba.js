var prompt = require("prompt-sync")();
function Menu(){
var option = 0;
console.log(option);
console.log("\nMenu")
console.log("1. Convertir Celcius a Fahrenheit");
console.log("2. Calcurar Indeice de Masa Corpotal (IMC) ");
console.log("3. Generar nombre de usuario");
console.log("4. Generar Nuemro Fibonacci");
console.log("5. Salir")
option = prompt ("Seleccione una opcion: ");
option = Number(option);

switch (option){
    case "1":
        console.log("1");
        Menu();
    case "2":
        console.log("2");
    case "3":
        console.log("3");
            Menu();
    case "4":
        console.log("4");
    case "5":
        break;
        default:
            console.log("\nPor favir ingrese una opcion valida");
            Menu();
    }
}

Menu()
    