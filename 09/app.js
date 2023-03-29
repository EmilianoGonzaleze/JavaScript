const listaProductos = [
  { id: 1, nombre: "producto1", precio: 250 },
  { id: 2, nombre: "producto2", precio: 450 },
  { id: 3, nombre: "producto3", precio: 325 },
  { id: 4, nombre: "producto4", precio: 64 },
  { id: 5, nombre: "producto5", precio: 100 },
  { id: 6, nombre: "producto6", precio: 880 },
  { id: 7, nombre: "producto7", precio: 1240 },
];

const contenedor_productos = document.getElementById("contenedor_productos");

listaProductos.forEach((producto) => {
  contenedor_productos.innerHTML += `<div class="card">
    <h3>${producto.nombre}</h3>
    <p>$${producto.precio}</p>
    </div>
    `;
});
