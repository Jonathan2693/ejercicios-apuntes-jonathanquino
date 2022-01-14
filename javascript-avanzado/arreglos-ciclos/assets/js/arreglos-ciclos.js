/* const numeros = [1,2,3,4];*/

let numeros1 = new Array(1,2,3,4);
numeros1.push(5,6,7,8,9);
for(let i=0;i<numeros1.length;i++)
{
    document.write('<h3>' + numeros1[i]+ '</h3>');
}