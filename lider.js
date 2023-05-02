//Array donde se almacenaran los productos
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let carritoStorage = JSON.parse(localStorage.getItem("carrito"));
//Imprime los elementos del carrito en el DOM
function mostrarEnDom() {
  if (carrito) {
    let divLista = document.getElementById("lista");
    divLista.innerHTML = "";
    carrito.forEach((producto) => {
      divLista.innerHTML += `<ul>
      <li>Nombre: ${producto.nombre}</li>
      <li>Precio: ${producto.precio}</li>
      <li>Cantidad: ${producto.cantidad}</li>
      <li>Marca: ${producto.marca}</li>
      <span>-----------------</span>
    </ul>`;
    });
  }
}

//Agrega productos al carrito
function cargarProductosConInput() {
  let form = document.getElementById("formAgregar");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const cantidad = document.getElementById("cantidad").value;
    const marca = document.getElementById("marca").value;

    const nuevoProducto = new Producto(nombre, precio, cantidad, marca);

    carrito.push(nuevoProducto);
    localStorage.setItem("carrito", JSON.stringify(carrito));

    mostrarEnDom();
    hayProductos();
    console.log("Producto agregado!");
  });
}

//Quita todos los elementos del carrito
function vaciarCarrito() {
  carrito = [];
  hayProductos();
  mostrarEnDom();

  console.log("Carrito vacio!");
}

//Busca un producto por su atributo "nombre" y si lo encuentra lo elimina
function borrarProducto() {
  formEliminar.addEventListener("submit", (e) => {
    e.preventDefault();
  });
  elementoBuscado = document.getElementById("nombreABorrar").value;

  let index = carrito.findIndex((item) => {
    return item.nombre === elementoBuscado;
  });

  if (index !== -1) {
    console.log("Producto quitado");
    carrito.splice(index, 1);
    localStorage.clear();
    localStorage.setItem("carrito", JSON.stringify(carrito));
    hayProductos();
    mostrarEnDom();
  } else {
    console.log("PRODUCTO NO ENCONTRADO");
  }
}

//Comprueba si hay productos y decide si mostrar o no los botones de "Vaciar Carrito" y "Quitar Producto"
function hayProductos() {
  if (carrito && carrito.length > 0) {
    sectionVaciar.style.display = "block";
    formEliminar.style.display = "block";
    sectProductos.style.display = "block";
  } else {
    sectionVaciar.style.display = "none";
    sectProductos.style.display = "none";
    formEliminar.style.display = "none";
  }
}

//Variables y eventos

document.addEventListener("DOMContentLoaded", hayProductos);
document.addEventListener("DOMContentLoaded", mostrarEnDom);
document.addEventListener("DOMContentLoaded", cargarProductosConInput);

let sectProductos = document.getElementById("productos");

let sectionVaciar = document.getElementById("sectionVaciar");

let btnBorrar = document.getElementById("eliminar");
btnBorrar.addEventListener("click", borrarProducto);

let btnVaciar = document.getElementById("vaciar");
btnVaciar.addEventListener("click", vaciarCarrito);

let formEliminar = document.getElementById("formEliminar");