//LOCALSTORAGE
localStorage.setItem("Bienvenida", "Hola gente");
localStorage.setItem("esValido", true);
localStorage.setItem("unNumero", 20);

let mensaje = localStorage.getItem("Bienvenida");
let bandera = localStorage.getItem("esValido");
let numero = localStorage.getItem("unNumero");

console.log(mensaje);

//SESSIONSTORAGE
sessionStorage.setItem("seleccionados", [1, 2, 3]);
sessionStorage.setItem("esValido", false);
sessionStorage.setItem("email", "info@email.com");

let lista = localStorage.getItem("seleccionados").split(",");
let bandera = localStorage.getItem("esValido") == "true";
let email = localStorage.getItem("email");

console.log(typeof lista); //object ["1", "2", "3"]
console.log(typeof bandera); //boolean
console.log(typeof email); //string

//split
let nombres = "Matias Nicolas Guarna";
console.log(nombres.split(","));

let nombres2 = "Matias, Nicolas, Guarna";
console.log(nombres2.split(","));

//Acceso tipo objeto // no recomendable
//Guardar una clave
localStorage.numeroPrueba = 5;
//Leer la clave
alert(localStorage.numeroPrueba); //5
let clave = "toString"; //toString método reservado
localStorage[clave] = "6"; //No se guarda este dato.
///// no recomendable ////////

//Recorrer el storage
//Ciclo para recorrewr las claves almacenadas en el objeto localStorage
for (let i = 0; i < localStorage.length; i++) {
  let clave = localStorage.key(i);
  console.log("Clave : " + clave);
  console.log("Valor: " + localStorage.getItem(clave));
}

//eliminar datos del storage
localStorage.setItem("Bienvenida", "Hola gente");
sessionStorage.setItem("esValido", true);

localStorage.removeItem("Bienvenida");
sessionStorage.removeItem("esValido");
localStorage.clear();
sessionStorage.clear();

//JSON
const producto1 = { id: 2, producto: "Arroz" };
localStorage.setItem("producto1", producto1); //Se guarda [object Object]

//Conversiones de / hacia JSON
let nombres = { id: 1, name: "Matiaaa" };
let newValue = JSON.stringify(nombres);

let a = `{"id": 1, "name": "Matiaaa"}`;
let b = JSON.parse(a);

console.log(newValue); //convertido a string
console.log(b); //convertido de string a objeto

// Esta funcion almacena datos, guarda la info como texto, la pasa a string.
function saveStorageData(clave, valor) {
  localStorage.setItem(clave, JSON.stringify(valor));
}

//Esta funcion recibe la informacion guardada
function getStorageData(clave) {
  return localStorage.getItem(clave);
}

//Esta funcion convierte a objeto la informacion que recibe.
function getStorageData(clave) {
  return JSON.parse(localStorage.getItem(clave));
}

////stringify
const producto1 = { id: 2, producto: "Arroz" };
const enJSON = JSON.stringify(producto1);

console.log(enJSON); // {"id":2,"producto":"Arroz"}
console.log(typeof producto1); //object
console.log(typeof enJSON); //string

localStorage.setItem("producto1", enJSON); //Se guarda {"id":2,"producto":"Arroz"}
//
let nombres = { id: 1, name: "Matias" };
let nuevoValor = JSON.stringify(nombres);

localStorage.setItem("objeto", nombres);
localStorage.setItem("string", nuevoValor);
///Almacenar array de objetos.
const productos = [
  { id: 1, producto: "Arroz", precio: 125 },
  { id: 2, producto: "Leche", precio: 50 },
  { id: 3, producto: "Galletitas", precio: 35 },
  { id: 4, producto: "Salchicha", precio: 100 },
];

const guardarLocal = (clave, valor) => {
  localStorage.setItem(clave, valor);
};

//Almacenar producto por producto
for (const producto of productos) {
  guardarLocal(producto.id, JSON.stringify(producto));
}

//Almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos));

////PARSE
const enJSON = { id: 2, producto: "Arroz" };
const producto1 = JSON.parse(enJSON);

console.log(typeof enJSON); //string
console.log(typeof producto1); //object
console.log(producto1.producto); // Arroz

const producto2 = JSON.parse(localStorage.getItem("producto1"));
console.log(producto2.id); // 2
