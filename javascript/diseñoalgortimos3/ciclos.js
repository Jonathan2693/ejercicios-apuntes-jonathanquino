/*
Ciclos

while

let condicion = true -> condicion inicial
while(condicion){
    flujo de programa
    cambio de valor de condicion para interrumpir el ciclo
}

*/

//Imprimir del 1 al 10
/*
let c = 1;
while(c<=1000){
console.log(c);
c++;
}
*/


/*
do 
{

} while (condicion)
*/
/*
let numero = 0;
do
{
    console.log(numero);
    numero++;
} while(numero<= 100);
*/
/* 
ciclo for

for(inicializar variable ; condicion de variable ; incremento/decremento)
{

}

*/
// for(let i = 0; i<10; i++)
// {
//     console.log('Hola');
// }

const comidas  = ['Pozole', 'Tacos', 'Tortas', 'Quesadillas'];

for(let i = 0; i< comidas.length; i++)
{
    console.log(comidas[i]);
}
