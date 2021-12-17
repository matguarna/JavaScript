let nombre = "Matias Guarna";
const miEdad = 27;
var signo = "Capricornio";

console.log(nombre);
console.log(miEdad);
console.log(signo);

const lista = ["Asd3 asd", 5, [6], "listita"];
const lista2 = ("Asd assd", "pruebita2"); //por que no imprime el asd assd?

console.log(lista);
console.log(lista2);

let suma = 1 + 2;
let resta = 5 - 3;
let mult = 2 * 2;
let division = 10 / 2;
console.log(suma);
console.log(resta);
console.log(mult);
console.log(division);

let a = 10;
let b = 20;
console.log(a + b);

let textoA = "CODER";
let textoB = "HOUSE";
const espacio = " ";

let resulA = textoA + textoB;
console.log(resulA);

let resulB = textoA + espacio + textoB;
console.log(resulB);

let resulC = textoA + 1;
console.log(resulC);

a = 100; //cambia el valor de a
console.log("a ->", a);

let nombreIngresado = prompt("Ingrese su nombre");
console.log(nombreIngresado);

console.log("mensaje de prueba");

alert("Hola gente");

alert(nombre);

//Ejemplo de script
let nombre = prompt("Ingrese su nombre");
let salida = nombre + " " + " Apellido";
let salida2 = `Su -> ${nombre} apellido`;
alert(salida);
alert(salida2);
