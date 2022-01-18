let variableSincrona;
variableSincrona = 10*3;
console.log(variableSincrona);

//Codigo Asincrono

let variableAsincrona;
 setTimeout(() =>{
    variableAsincrona = 10*3;
    console.log(variableAsincrona);
 },1000);