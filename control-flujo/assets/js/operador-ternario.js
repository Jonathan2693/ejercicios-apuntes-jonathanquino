/* operador ternario

condicion ? codigo_true : codigo_false
*/
/*
let edad1 = 19;
let respuesta = (edad1>=18) ? 'Mayor de edad': 'menor de edad';
console.log(respuesta);
let preguntaEdad =`Tengo ${edad1} años y soy ${(edad1>=18 ? "Mayor de edad": "Menor de edad")}`;
console.log(preguntaEdad);


let dia = parseInt(prompt('Ingresa el dia'));
if(dia===0) console.log("domingo");
else if(dia===1) console.log('Lunes');
else if(dia===2) console.log('Martes');
else if(dia===3) console.log('Miercoles');
else if(dia===4) console.log('Jueves');
else if(dia===5) console.log('viernes');
else if(dia===6) console.log('sabado');
else console.log('No es valido el dia');

switch(dia){
    case 0: 
        console.log('domingo');
        break;
    case 1:
        console.log('lunes');
        break;
    case 2:
        console.log('martes');
        break;
    case 3:
        console.log('miercoles');
        break;
    case 4:
        console.log('jueves');
        break;
    case 5:
        console.log('viernes');
        break;
    case 6:
        console.log('sabado');
        break;
    default:
        console.log('no es dia valido');
        break;
}
*/
let descuento;
let cupondescuento = prompt('Ingresa el tipo de cupon (Bronce, Plata u Oro)');

switch(cupondescuento){
    case 'Bronce':
        descuento=5;
        break;        
    case 'Plata':
        descuento=10;
        break;
    case 'Oro':
        descuento=15;
        break;
    default:
        alert('Cupon no valido');
        break;
}
alert(`Tu descuento es de ${descuento}`);