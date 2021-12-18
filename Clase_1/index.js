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
let birra = prompt("Ingrese su birra favorita");
let salida = "La" + " " + birra + " es la mejor birra";
let salida2 = `La ${birra} es la mejorrrrr birra ok???`;
alert(salida);
alert(salida2);

let salida3 = `La ${birra} se la tomó toda ${nombreIngresado}`;
alert(salida3);

//Ejemplo de Parseo
let numero = "1000"; //está declarado como texto
console.log(parseInt(numero) + 1); //parseInt convierte el texto a un número entero

let flotante = "1000.5"; //está declarado como texto
console.log(parseFloat(flotante) + 1); //parseFloat convierte el texto a un número con decimales.

let numero2 = 30;
console.log(numero2.toString());
console.log(typeof numero2);
numero2 = numero2.toString(); //convertimos el numero a string
console.log(typeof numero2);

let objeto = {};
console.log(typeof objeto);
