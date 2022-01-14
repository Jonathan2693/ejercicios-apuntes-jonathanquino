let arreglonum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let suma = 0;
arreglonum.forEach(numero => {
    suma += numero;
});
let promedio = suma/(arreglonum.length);
document.write('<h2> La suma es '+suma+'</h2>');
document.write('<h2> El promedio es '+promedio+'</h2>');
