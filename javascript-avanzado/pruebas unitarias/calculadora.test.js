const sumar = require('./calculadora'); //Se pide la funcion sumar del modulo calculadora, sin extension
describe('Pruebas en el componente calculadora',()=>{

    Test('Prueba en la funcion sumar', () => {

        expect(sumar(3,5)).toBe(8);
    });    

});  //Descripcion:Englobar todas las pruebas, hacia que archivo se hacen las pruebas