function descuento(valorCompra)
{
    let valorFinal;
    if (valorCompra < 100) 
    {
        valorFinal = valorCompra * 0.9;
    }
    else if (valorCompra>=100 && valorCompra<200)
    {
        valorFinal = valorCompra * 0.8;
    }
    else 
    {
        valorFinal = valorCompra * 0.7;
    }
    return valorFinal;
}


let precioUsuario = parseInt(prompt('Ingresa el precio'));
let descuento1 = descuento(precioUsuario);
document.write("<h1>" + "El precio final es " + descuento1 + "</h1>");