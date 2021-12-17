/*
12/09/2021
Diferencias entre let y var
var es una variable global = existe en todo el proyecto
let esuna variable de contexto = delimitada a su espacio donde es declarada

*/

var numero = 40;
console.log(numero);

if(true)
{
    var numero = 50;
    console.log(numero);
}

console.log(numero);

var texto = "Bootcamp java";        //Declaracion de texto con var    
console.log(texto);             

if (true)
{
    let texto = "Cohorte 8";        //Variable con referencia solo dentro del espacio if
    console.log(texto);
}
console.log(texto);                 //Referencia a text de la variable global con var