class Pokemon{
    constructor(nombre,tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }
    atacar(){
        return console.log(`${this.nombre} esta atacando`);
    }
}

class Pikachu extends Pokemon{
    constructor(nombre,tipo,edad){
        super(nombre,tipo);
        this.edad = edad;
    }
    evolucionar(){
        console.log(`${this.nombre} esta evolucionando de ${this.edad} a ${this.edad+1}`)
    }
}

class Electrico extends Pikachu{
    constructor(nombre,tipo,edad,color){
        super(nombre,tipo,edad);
        this.color = color;
    }
}

const pokemonElectrico = new Electrico('NombreElectrico','Electrico',20,'Amarillo');
console.log(pokemonElectrico);




const pikachu1 = new Pikachu('PikachuNombre','Electrico',15);
pikachu1.atacar();
pikachu1.evolucionar()

const Pokemon2 = new Pokemon('Charmander','Fuego');
Pokemon2.atacar();