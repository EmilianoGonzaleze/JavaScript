
/*
let total = 0
for (let i = 1; i <= 10; i++) {
    total += i
}

console.log(total)  //  55
*/





/*
function sumarRango(desde, hasta){
    let total = 0
    for (let i = desde; i <= hasta; i++) {
    total += i
}
return total

}
console.log(sumarRango(1,10))

*/




/*

function asignarOperacion(op) {
    if (op == "sumar") {
        return (a, b) => a + b
    } else if (op == "restar") {
        return (a, b) => a - b
    }
}

let suma = asignarOperacion("sumar")
let resta = asignarOperacion("restar")

console.log( suma(4, 6) )  //  10
console.log( resta(5, 3) )  //  2
*/



// For each
/*
const numeros = [1, 2, 3, 4, 5, 6]

numeros.forEach( (num)=> {
    console.log(num)
} )
*/




//Find
/*
const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
]

const resultado = cursos.find((el) => el.nombre === "ReactJS")
const resultado2 = cursos.find((el) => el.nombre === "DW")

console.log(resultado) // {nombre: 'ReactJS', precio: 22000}
console.log(resultado2) // undefined
*/





//Filter, includes, <
/*
const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
]

const resultado = cursos.filter((el) => el.nombre.includes('JS'))
const resultado2 = cursos.filter((el) => el.precio < 14000)

console.log(resultado)

console.log(resultado2) // []
*/





//Some retorna true or false

console.log( cursos.some((el) => el.nombre == "Desarrollo Web")) 
// true
console.log( cursos.some((el) => el.nombre == "VueJS")) 
// false






//Map

const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
]

const nombres = cursos.map((el) => el.nombre)
console.log(nombres)
// [ 'Javascript', 'ReactJS', 'AngularJS', 'Desarrollo Web' ]




//Reduce
/*
const numeros = [1, 2, 3, 4, 5, 6]
const total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)

console.log(total) // 21
*/



//Sort, modifica el array forever

const numeros = [ 40, 1, 5, 200 ];
numeros.sort((a, b) => a - b);  // [ 1, 5, 40, 200 ] ordena ascendente
numeros.sort((a, b) => b - a);  // [ 200, 40, 5, 1 ] ordena descendente

// Sort otro ejemplo

const items = [
    { name: 'Pikachu', price: 21 },
    { name: 'Charmander', price: 37 },
    { name: 'Pidgey', price: 45 },
    { name: 'Squirtle', price: 60 }
  ]
items.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    // a es igual a b
    return 0;
})












// Ejemplo practico

const listaProductos = [{ id: 1,  producto: "Arroz", precio: 125 },
                  {  id: 2,  producto: "Fideo", precio: 70 },
                  {  id: 3,  producto: "Pan"  , precio: 50},
                  {  id: 4,  producto: "Flan" , precio: 100}]

const buscado = listaProductos.find(producto => producto.id === 3)
console.log(buscado) //{id: 3, producto: "Pan", precio: 50}

const existe = listaProductos.some(producto => producto.nombre === 'Harina')
console.log(existe ) // false

const baratos = listaProductos.filter(producto => producto.precio < 100)
console.log(baratos)
// [{id: 2,producto:"Fideo",precio:70},{id:3,producto:"Pan",precio: 50}]

const listaNombres = listaProductos.map(producto => producto.nombre)
console.log(listaNombres);
//[“Arroz”, “Fideo”, “Pan”, “Flan”]



