/* Arrow function
funcion flecha
*/
const sumar = (numero1,numero2) => {
    return numero1 + numero2;
}
let numero1 = parseInt(prompt('Ingresa el numero 1'));
let numero2 = parseInt(prompt('Ingresa el numero 2'));
let suma = sumar(numero1,numero2);

document.write(`La suma de ${numero1} y ${numero2} es = ${suma} <br>`);