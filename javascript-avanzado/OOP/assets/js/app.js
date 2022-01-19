class Animal{
    nombre = null;
    especie = null;
    constructor(nombre,especie){
        console.log('Este es un constructor');
        this.nombre = nombre;
        this.especie = especie;
    }
    /*Getters y Setters
    Get -> Obtencion de atributos de objeto
    Set -> Asignacion de atributos de objeto*/
    get getNombre(){    //Getter de nombre      LOS GETTER Y SETTER NO UTILZAN PARENTESIS, COMO SI FUERAN ATRIBUTOS DE LA CLASES Objeto.Atributo en lugar de Objeto.metodo()
        return this.nombre;
    }
    set setNombre(nombre){ //Setter de nombre
        this.nombre = nombre;
    }

    get getEspecie(){    //Getter de nombre
        return this.especie;
    }
    set setEspecie(especie){ //Setter de nombre
        this.nombre = especie;
    }
    
    
    //Metodos => Funcion
    presentarse(){
        document.write(`Hola soy un ${this.especie} y mi nombre es ${this.nombre} <br>`);
    }

    cambiarnombre(nuevoNombre){
        this.nombre = nuevoNombre;
        let mensaje = `Mi nuevo nombre es ${this.nombre} y sigo siendo ${this.especie}`;
        return mensaje;
    }

    //Metodos estaticos
    static saludar(){           //se coloca la palabra static, es un metodo que existe sin necesidad de existir el objeto
        return console.log('Hola, soy un metodo estatico');
    }
}

console.log(Animal);
Animal.saludar();

//Instanciar Objeto => Crear nuevo objeto
const perro = new Animal('Hieren','Callejero'); //creacion de un objeto
console.log(perro);
const gato = new Animal('GatoNombre','Blanco');
const Animal3 = new Animal('NombreAnimal3','EspecieAnimal3');
perro.presentarse();
gato.presentarse();
console.log(Animal3.nombre);
console.log(Animal3.cambiarnombre('NuevoNombreAnimal3'));
console.log(Animal3.nombre);
console.log(Animal3.getEspecie);
Animal3.saludar();