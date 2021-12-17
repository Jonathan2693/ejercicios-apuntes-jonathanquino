const comidas = ['Pozole','Quesadillas', 'Tacos'];
console.log(comidas.length);
comidas.push('Torta');
console.log(comidas[3]);
comidas.unshift('Menudo');
console.log(comidas);
comidas.shift();
console.log(comidas);

comidas.forEach(function(comida){       //For each, recorrido de cada elemento comida en el arreglo comida, la funcion
    console.log(comida);                // no esta nombrada pero se infiere que el parametro comida entra y se realiza el proceso
})                                      // console.log con el elemento comida por cada recorrido

const numeros = [1,3,7,8];

numeros.forEach(function(numero){
    console.log(1+numero);
})

/*
Ejercicio
*/

const arreglo1 =[];

function suma(numero){
    let sumnum = numero + 1;
    return arreglo1.push(sumnum);
}

suma(1);
suma(2);
suma(3);
console.log(arreglo1);