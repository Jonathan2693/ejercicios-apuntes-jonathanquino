let cadenaEjercicio = "Generation";
function invertirPalabra(cadena){ 
    return  cadena.split('').reverse().join('');
}
document.write(`<h2> ${cadenaEjercicio} </h2>`);
document.write(`<h2> ${invertirPalabra(cadenaEjercicio)} </h2>`);