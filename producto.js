//clase producto
class Producto {
    //Atributos
    nombre;
    precio;
    cantidad;
    marca;
  
    //Constructor
    constructor(nombre, precio, cantidad, marca) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
      this.marca = marca;
    }
  
    //Metodos
    subTotal = () => {
      return this.precio * this.cantidad;
    };
  }