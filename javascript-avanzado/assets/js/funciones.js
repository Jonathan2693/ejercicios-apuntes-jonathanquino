/* Funciones
Es un bloque de codigo reutilizable
Puede tener parametros de entrada o no
Puede devolver o no un valor
*/

function suma(numero1,numero2){
    return numero1+numero2;
}
function restar(numero1,numero2){
    document.write(`La resta de ${numero2} y ${numero1} es = ${numero2-numero1}`);
}
let numero1 = parseInt(prompt('Ingresa el numero 1'));
let numero2 = parseInt(prompt('Ingresa el numero 2'));
let numero3 = parseInt(prompt('Ingresa el numero 2'));
document.write(`La suma de ${numero1} y ${numero2} es = ${suma(numero1,numero2)} <br>`);
restar(numero1,numero2);