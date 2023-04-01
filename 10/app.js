/*

let boton = document.getElementById("btnPrincipal")
      boton.onclick = () =>{console.log("Respuesta 2")}

      */

class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre
    this.precio = precio
    this.cantidad = cantidad
  }
}

const listaProductos = []


//DOM

const contenedor_productos = document.getElementById("contenedor_productos")
const formulario = document.getElementById("formulario")

//mostrarEnDOM(contenedor_productos, listaProductos)

formulario.addEventListener("submit", (e) => {

  e.preventDefault()

  const nombre = document.getElementById("inp_nombre").value
  const precio = document.getElementById("inp_precio").value
  const cantidad = document.getElementById("inp_cantidad").value

  

  const nuevoProducto =new Producto(nombre, precio, cantidad)

  listaProductos.push(nuevoProducto)

  mostrarEnDOM()

  formulario.reset()
})



function mostrarEnDOM(contenedor_productos, listaProductos) {

  listaProductos.forEach(producto =>{contenedor_productos.innerhtml += `<h3>Nombre: ${producto.nombre} </h3> <p>Precio: ${producto.precio} </p> <p>Cantidad: ${producto.cantidad} </p>`})
  
}


// NO FUNCIONA PENDEJOOOOO