/*Bronce se le hará un descuento del 5 %
Plata se le hará un descuento del 10%
Oro se le hará un descuento del 20%
Platino se le hará el descuento del 25%

-El usuario introduce el precio primero y después el cupón
-El programa debe mostrar el precio original y el precio con el descuento aplicado
-También debe mostrar el mensaje "El cupón no es válido" en caso de que sea un 
 cupón equivocado
*/
let precio = parseInt(prompt('Ingrese el precio de su producto'));
let cuponDescuento = prompt('Ingrese el cupon (Bronce, Plata, Oro, Platino)');
let descuento;
let preciofinal;
switch(cuponDescuento){
    case "Bronce":
        descuento= 0.95;
        break;
    case "Plata":
        descuento= 0.90;
        break;
    case "Oro":
        descuento= 0.80;
        break;
    case "Platino":
        descuento= 0.75;
        break;
    default:
        alert('El cupon no es valido');
        break;
}
preciofinal = precio*descuento;
console.log(`EL precio original es ${precio} y el precio con descuento ${preciofinal}`);