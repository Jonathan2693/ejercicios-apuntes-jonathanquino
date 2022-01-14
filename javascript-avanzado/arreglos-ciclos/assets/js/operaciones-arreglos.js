let numeros = [1,3,13,121,12124,44,65,12,6];
let frutas = ["papaya","manzana", "mango", "platano"];
/*
numeros.forEach(function (numero,indice){
    document.write(numero + ',');
    document.write(indice + '/');
})*/
/*map*/
/*

let numeros2 = numeros.map(function(elemento){
    return elemento*2;
}); /*Map crea un arreglo, mientras que numeros1 = numeros2 es hacer referencia a la memoria, no crear nuevo arreglo
console.log(numeros2);*/
/*
let numeros3 = numeros;
numeros.push(5);
console.log(numeros3);
*/
/*
document.write('<br>' + numeros.includes(3) + '<br>');
let numerospares = numeros.filter((numero)=> numero%2==0);
document.write('<br>' + numerospares + '<br>');*/
let frutasfiltro = frutas.filter((fruta)=>{
    return fruta.toUpperCase().includes('A');
})
document.write('<br>' + frutasfiltro + '<br>');
document.write('<br>' + frutas.sort() + '<br>');
document.write('<br>' + frutas.reverse() + '<br>');
document.write('<br>' + frutas.reverse() + '<br>');
let frutaencontrada = frutas.find((fruta)=>{
    return fruta.includes('ma');
})
document.write('<br>' + frutaencontrada + '<br>');