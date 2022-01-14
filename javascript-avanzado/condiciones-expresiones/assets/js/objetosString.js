/*Objetos*/
let cadena1 = "HOLA";
console.log(cadena1);
let cadena2 = new String("HOLA");
console.log(cadena2.valueOf().toLowerCase().includes('a'));

console.log(cadena2.valueOf().toLowerCase());
cadena1.toLowerCase();
console.log(cadena1.valueOf().toLowerCase());
function invertirPalabra(cadena){
    return  cadena.split('').reverse();
}
console.log(invertirPalabra(cadena2).join());
console.log()