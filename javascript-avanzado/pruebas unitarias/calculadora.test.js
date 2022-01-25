const {sumar,restar,multiplicar,dividir} = require('./calculadora'); //Se pide la funcion sumar del modulo calculadora, sin extension

describe('Pruebas de calcauladora',()=>{

    test('Prueba en la funcion sumar', () => {
        expect(sumar(3,5)).toBe(8);
    });    

    test('Prueba en la funcion restar', () => {
        expect(restar(5,3)).toBe(2);
    });    

    test('Prueba de la funcion multiplicar', () =>{
        expect(multiplicar(5,2)).toBe(10);
    });

    test('Prueba de la funcion dividir', () =>{
        expect(dividir(10,2)).toBe(5);
    });

});  //Descripcion:Englobar todas las pruebas, hacia que archivo se hacen las pruebas

