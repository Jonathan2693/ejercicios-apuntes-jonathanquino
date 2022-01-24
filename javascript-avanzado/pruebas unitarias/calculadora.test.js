const {sumar} = require('./calculadora'); //Se pide la funcion sumar del modulo calculadora, sin extension
const {restar} = require('./calculadora'); 
describe('Pruebasde sumar 3 y 5',()=>{

    test('Prueba en la funcion sumar', () => {
        expect(sumar(3,5)).toBe(8);
    });    

});  //Descripcion:Englobar todas las pruebas, hacia que archivo se hacen las pruebas

describe('Pruebasde restar 5 y 3',()=>{

    test('Prueba en la funcion restar', () => {
        expect(restar(5,3)).toBe(2);
    });    

});  //Descripcion:Englobar todas las pruebas, hacia que archivo se hacen las pruebas