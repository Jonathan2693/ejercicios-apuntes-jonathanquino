let persona = {
    nombre: 'Jonathan Quino',
    edad : 28,
    direccion : 'Ecatepec',
    Celular : [5525148814,5581455133]
};
console.log(persona.Celular[1])

let consola = {
    nombreProducto: 'Xbox Series X',
    marca: 'xbox',
    color: 'negro',
    lectordiscos: true,
    forma: 'rectangular',
    expansionMemoria: true,
    edicionesDisponible: ['Normal','Halo','Gears'],
    resolucion4k: true,
    tasaHz:[30,60,120],
    controlesporCaja: 1
};
/*
console.log(consola.nombreProducto,consola.marca,consola.color,consola.lectordiscos,consola.forma,consola.expansionMemoria,consola.edicionesDisponible,consola.resolucion4k,consola.tasaHz,consola.controlesporCaja);
console.log(consola.edicionesDisponible[0]);

for(cadena in consola.edicionesDisponible){
    console.log(consola.edicionesDisponible[cadena]);
}*/
for(cadena in consola){
    console.log( cadena +' : ' + consola[cadena]);
}