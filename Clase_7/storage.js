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
let bandera = (localStorage.getItem("esValido") == "true");
let email = localStorage.getItem("email");

console.log(typeof lista); //object ["1", "2", "3"]
console.log(typeof bandera); //boolean
console.log(typeof email); //string

//split
let nombres = "Matias Nicolas Guarna"
console.log(nombres.split(","));

let nombres2 = "Matias, Nicolas, Guarna"
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
for (let i = 0; i < localStorage.length; i++){
    let clave = localStorage.key(i);
    console.log("Clave : "+ clave);
    console.log("Valor: "+ localStorage.getItem(clave));
}






