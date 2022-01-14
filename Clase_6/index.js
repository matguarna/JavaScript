const arrayA = [];
const arrayB = [1, 2, "asd", false, 25];
console.log(arrayB.length);
console.log(arrayB[0]);

//.lenght = la longitud de "lista", osea 6.
const lista = ["a", "b", "c", "d", "e", "f", "g"];
for (let i = 0; i < lista.length; i++) {
  console.log(lista[i]);
  console.log(`soy una bolubi ${i}`);
}

let index = 0;
while (index < lista.length) {
  console.log(lista[index]);
  index++;
}

//.toString()
const arrayC = [1, 2, "asd", { nombre: "false" }, 25];
console.log(arrayC.toString());

//.push()
const arrayD = [1, 2, "asd", { nombre: "false" }, 25];
arrayD.push("ultimo");
console.log(arrayD);

//.join
const arrayE = [1, 2, "asd", { nombre: "false" }, 25];
console.log(arrayE.join("@"));

//.concat
console.log(arrayB.concat(arrayC));

//slice
const arrayF = [0, 1, 2, 3, 4, 5];
const arrayG = arrayF.slice(1, 3);
console.log(arrayG);

//Ejemplo aplicado: cargar array con entradas
// const listaNombres = [];
// let cantidad = 5;

// do{
//     let entrada = prompt("Ingresar nombre");
//     listaNombres.push(entrada.toUpperCase());
//     console.log(listaNombres.length);
// } while (listaNombres.length != cantidad)

// const nuevaLista = listaNombres.concat(["ANA", "EMA"]);
// alert(nuevaLista.join("\n"));
//
//Acceder al ultimo valor de un array
console.log(arrayD[arrayD.length - 1]);

//Array de objetos
const persona = { nombre: "Matias", apellido: "Guarna" };
const persona1 = { nombre: "Majo", apellido: "Pacheco" };
const list = [persona];
list.push(persona1);
console.log(list);
list.push({ nombre: "Juan", apellido: "Perez" });
console.log(list);

//Ej carrito
const shoppingCart = {
  id: "coder",
  date: "06-01-2022",
  items: [],
  calcTotal: () => {},
};

shoppingCart.items.push({});
// FOR OF
const productos = [
  { id: 1, producto: "Arroz" },
  { id: 2, producto: "Fideo" },
  { id: 3, producto: "Pan" },
];

for (const producto of productos) {
  console.log(producto.id);
  console.log(producto.producto);
}
//otro ejem
for (const dato of list) {
  console.log(dato.nombre);
}
//OTRO EJEMPLO CARRITO
class CarritoDeCompras {
  constructor(date, nombreUsuario) {
    this.date = date;
    this.nombreUsuario = nombreUsuario;
    this.items = [];
  }
  agregarProductos(produc) {
    this.items.push(produc);
  }
  obtenerProductos() {
    return this.items;
  }
}

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

const carritoDeCompras = new CarritoDeCompras(new Date(), "Matias");

const leche = new Producto("Leche", 50);

carritoDeCompras.agregarProductos(leche);
console.log(carritoDeCompras.obtenerProductos());
///
//Find()
const listaNumeritos = [1, 2, 3, 4, 5];
const encontrar = listaNumeritos.find((element) => element == 5);
console.log(encontrar);

const nombres = ["Ema", "Juan", "Pedro"];
const encontrar2 = nombres.find((element) => element == "Ema");
console.log(encontrar2);

const encontrar3 = productos.find((element) => element.id == 2);
console.log(encontrar3);

function findId(id) {
  return productos.find((element) => element.id == 2);
}
console.log(findId(2));

//Filter
function filterById(id) {
  return productos.filter((element) => element.id != id);
}
console.log(filterById(2));

//Otro ejemplo
const nombres2 = ["Ana", "Ema", "Juan", "Elisa"];
const filtro2 = nombres2.filter((element) => element.includes("n"));
console.log(filtro2);

///MAP
const numerubis = [1, 2, 3, 4, 5];
const porDos = numerubis.map((x) => x * 2);
const masCien = numerubis.map((x) => x + 100);
console.log(porDos);
console.log(masCien);

const nombres3 = ["Ana", "Ema", "Juan", "Elisa"];
const lengths = nombres3.map((nombre) => nombre.length + " carácteres");
console.log(lengths);

//ordenar lista
const listaDesordenada = [{ id: 5 }, { id: 8 }, { id: 1 }, { id: 3 }, { id: 9 }];
console.log(listaDesordenada);

const ordenarLista = listaDesordenada.sort((a, b) => {
  if (a.id > b.id) {
    return 1;
  } else {
    return -1;
  }
});
console.log(ordenarLista);

//VEr burble sort
