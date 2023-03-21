/*

const persona1 = {
    nombre : 'Emiliano',
    edad : 33,
    calle : 'Falsa 123'

}

console.log(persona1)
*/




//2

/*
function Persona(nombre,edad,calle){
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
}
*/




//Clases

/*
class Persona {
    constructor(nombre, edad, calle){
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }
}
const persona1 = new Persona('Emiliano', 33, 'Calle falsa 123');
const persona2 = new Persona('Marcelo', 32, 'Isla de gorriti 5541');

console.log(persona1)
console.log(persona2)
*/



// otro ejemplo


/*
class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
        this.vendido = false;
    }
    vender(){
        this.vendido = true;
    }
    iva(){
        return this.precio * 1.21
    }
}

const producto = new Producto('ps5', 150000)
console.log(producto.vendido)
producto.vender()
console.log(producto.vendido)
*/





// Otro ejemplo

class Cliente{
    constructor(nombre, direccion){
        this.nombre = nombre;
        this.direccion = direccion;
    }

    descripcion(){
        return this.nombre+' con direccion en '+ this.direccion
    }
}

class Pizza{
    constructor(tipoQueso, agregado, aceituna, cliente){
        this.tipoQueso = tipoQueso;
        this.agregado = agregado;
        this.aceituna = aceituna;
        this.cliente = cliente;
    }
    cocinar(){
        return 'Ya esta cocinada la pizza'
    }
    entregar(){
        return 'La pizza va a ser entregada a: '+ this.cliente.descripcion()
    }

}

const objCliente = new Cliente('Emiliano', "calle falsa 123")
const objPizza = new Pizza('muzza','jamon y anana',false,objCliente)

objPizza.cocinar()
objPizza.entregar()

console.log(objPizza.cocinar())
console.log(objPizza.entregar())