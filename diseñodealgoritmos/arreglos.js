/*
Los arreglos son datos agrupados con funciones y metodos
*/
const arreglo1 = [];
console.log(arreglo1);
const arreglo2 = Array.of(1,'Hola',true,[1,2,3,['arreglo','dentro','de','arreglo']]);
console.log(arreglo2);
const arreglo3 = new Array(2,'Adios',false);
console.log(arreglo3);

const frutas = ['manzana','naranjas','uvas','sandias',[1,2,3,4,5,['A','B','C']]];
frutas[4][5].push('D');
console.log(frutas);
console.log(frutas[1]);                     //Acceder a elementos por indice
console.log(frutas[4][5][0]);

// Metodo lenght para conocer la longitud del arreglo

const letras = ['A', 'B', 'C', 'D'];
console.log(letras.length);

//Metodo push añade un elemento al final del arreglo

letras.push('E');
console.log(letras);

//Metodo pop elimina el ultimo elemento del arreglo
letras.pop();
console.log(letras);

//unshift, agrega un elemento al inicio del arreglo
letras.unshift('Z');
console.log(letras);

//shift, remueve el primer elemento del arreglo
letras.shift();
console.log(letras);