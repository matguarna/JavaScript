//Declaramos la funcion
function saludar() {
  console.log("Holaaaaaaaaaaaaa");
}

//Llamamos a la funcion
saludar();

console.log(saludar);

function isNumber() {}

function solicitarNombre() {
  let nombreIngresado = prompt("Ingrese nombre");
  alert(`Tu nombre es ${nombreIngresado}`);
}

solicitarNombre();

//Funciones con parametros
function conParametros(parametro1, parametro2) {
  console.log(`${parametro1} ${parametro2}`);
}
conParametros(10, "alex");

function sumar(a, b) {
  console.log(a + b);
  return a + b;
}
sumar(10, 10);

let resultado = 0;

function mostrar(valor) {
  console.log(valor);
}
mostrar(resultado);

//
function sumar(a, b) {
  if (a > 10) {
    return "a es Mayor";
  } else {
    return "a es Menor";
  }
}
//

function calculadora(a, b, operador) {
  let response = 0;
  switch (operador) {
    case "+":
      response = a + b;
      break;
    case "-":
      response = a - b;
      break;
    case "*":
      response = a * b;
      break;
    case "/":
      response = a / b;
      break;
    default:
      return "Operador incorrecto";
      break;
  }
  return response;
}

let result = calculadora(10, 10, "-");
console.log(result);

result = calculadora(5, 10, "*");
console.log(result);

let entrada = 0;
function test(a) {
  console.log("entrada tiene su valor inicial: ", a);
  a = 10;
  console.log("Ahora entrada vale ", a);
}

console.log(entrada);
test(entrada);

let global = "Hola";
function testt() {
  let localtest = "Test variable local";
  global = "Chauu";
  console.log(global);
  console.log(localtest);
}
console.log(global);
testt();

//Funcion anonima
const sumar2 = function (a, b) {
  return a + b;
};
const restar2 = function (a, b) {
  return a - b;
};

let response2 = sumar2(20, 30);
console.log(response2);

console.log(sumar2(10, 11));

//Funcion flecha, reemplaza la palabra function por la flecha =>
const sumar3 = (a, b) => {
  return a + b;
};

//Tambien funciona sin las {} ni return
const restar3 = (a, b) => a - b;

console.log(sumar3(5, 10));
console.log(restar3(10, 11));

const saludar = () => {
  console.log("Holaaaaaaaaaaaaa");
};
saludar();
