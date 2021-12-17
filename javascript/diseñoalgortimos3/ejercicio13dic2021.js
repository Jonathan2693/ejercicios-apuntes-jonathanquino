const numeros = [1,4,7,9,19,15,46,27,40,123];
const multiplicados = [];
for (let indice = 0; indice < numeros.length; indice++)
{
    multiplicados[indice]= numeros[indice]*2;
}

for (let indice1 = 0; indice1 < multiplicados.length; indice1++)
{
    console.log(multiplicados[indice1]);
}