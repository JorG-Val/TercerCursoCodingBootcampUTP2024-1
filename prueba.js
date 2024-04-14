const promot = require("prompt-sync");

function MayorMenorLista(){
    let ListaNumero = [2, 9, 17, 22, 29, 90, 92, 82];

    let maximo = 0
    for (let i = 0; i <ListaNumero.length; i++){

        if (maximo<=ListaNumero[i]){
                maximo = ListaNumero[i]
        }
    }
    console.log(maximo)
}
MayorMenorLista()