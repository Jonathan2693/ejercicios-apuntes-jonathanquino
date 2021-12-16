/*
Bloque de condicional if
if(condicion 1)
{codigo}
else if(condicion 2)
{codigo}
else {codigo}

function(Parametros)
{codigo de ejecucion, return}

*/

function procesadorDeFrutas(manzanas,naranjas){
    let jugo = "El jugo es de " + manzanas + " manzanas con " + naranjas + " naranjas";
    return jugo;
}

let jugonuevo1 = procesadorDeFrutas(2, 3);
let jugonuevo2 = procesadorDeFrutas(0, 5);
console.log(jugonuevo1);
console.log(jugonuevo2);
