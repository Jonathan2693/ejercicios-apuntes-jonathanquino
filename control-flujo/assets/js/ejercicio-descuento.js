/*Bronce se le hará un descuento del 5 %
Plata se le hará un descuento del 10%
Oro se le hará un descuento del 20%
Platino se le hará el descuento del 25%

-El usuario introduce el precio primero y después el cupón
-El programa debe mostrar el precio original y el precio con el descuento aplicado
-También debe mostrar el mensaje "El cupón no es válido" en caso de que sea un 
 cupón equivocado
*/
let precio = parseFloat(prompt('Ingrese el precio de su producto'));
let cupon = prompt('Ingrese el cupon (Bronce, Plata, Oro, Platino)');
let descuento;
let preciofinal;
switch(cupon){
    case "Bronce":
        descuento= 0.05;
        preciofinal = precio-(descuento*precio);
        document.write(`El precio original es ${precio} <br> El precio con descuento es ${preciofinal}`);
        break;
    case "Plata":
        descuento= 0.10;
        preciofinal = precio - (descuento*precio);
        document.write(`El precio original es ${precio} <br> El precio con descuento es ${preciofinal}`);
        break;
    case "Oro":
        descuento= 0.20;
        preciofinal = precio - (descuento*precio);
        document.write(`El precio original es ${precio} <br> El precio con descuento es ${preciofinal}`);
        break;
    case "Platino":
        descuento= 0.25;
        preciofinal = precio - (descuento*precio);
        document.write(`El precio original es ${precio} <br> El precio con descuento es ${preciofinal}`);
        break;
    default:
        alert('El cupon no es valido');
        break;
}