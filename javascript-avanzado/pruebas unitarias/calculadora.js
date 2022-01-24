const sumar = (num1,num2) => {
    return num1+num2;
}
const restar = (num1,num2) => {
    return num1-num2;
}
const multiplicar = (num1,num2) => {
    return num1*num2;
}
const dividir = (num1,num2) => {
    return num1/num2;
}
const mostrarResultado = (operacion,num1,num2,resultado) =>{
    let contenido = document.createElement('h3');
    contenido.textContent = `El resultado de ${operacion.name} entre ${num1} y ${num2} es igual a ${resultado}`;
    document.body.appendChild(contenido);
}
module.exports = {
    sumar, restar, multiplicar, dividir, mostrarResultado
}

// export{
//     sumar,
//     restar,
//     multiplicar,
//     dividir,
//     mostrarResultado
// }