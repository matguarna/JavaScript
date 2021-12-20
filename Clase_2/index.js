//IF

if (true) {
  console.log("es true pa. vas a ver este mensaje");
}

let unNumero = 5;
if (unNumero == 5) {
  console.log("el numero es 5, esta joya");
}

if (unNumero == 6) {
  console.log("no vas a ver este msj");
}

//if else

let unColor = "asd";

if (unColor == "Rojo") {
  console.log("El color es Rojo");
} else {
  console.log("El color NO es Rojo");
}

//Condiciones anidadas if... else if

let precio = 100.5;
if (precio < 20) {
  console.log("El precio es menor que 20");
} else if (precio < 50) {
  console.log("El precio es menor que 50");
} else if (precio < 100) {
  console.log("El precio es menor que 100");
} else {
  console.log("El precio es mayor que 100");
}

//Boleanos
let esValida = true;
let numeroDos = 10;
let esMayor5 = numeroDos > 5; //su valor sera true, porque 10 es mayor que 5

if (esValida) {
  console.log("Es boolean true");
}

if (esMayor5) {
  console.log("Es boolean true");
} else {
  console.log("Es boolean false");
}

//Operadores logicos

let a = 10;
let b = 20; 

if (a == b){
    console.log("A es igual a B");
}

if (a === b) {
    console.log("A y B son totalmente iguales");
}

if (a != b) {
    console.log("A es distinto a B");
}

if (a !== b) {
    console.log("A es totalmente distinto a B");
}

if (a < b ) {
    console.log("A es menor que B");
} else {
    console.log("A es menor que B");
}

let tempA = true;
let tempB = false;
let tempC = true;

if (tempA && tempB){
    console.log("Ambos son verdaderos");
}

if (tempA || tempB){
    console.log("Ambos o uno de los dos es verdadero");
}


//usamos ! para cambiar el valor de verdadero a falso o viceversa. 

if (!tempA || !!tempC){ 
    console.log("Ambos o uno de los dos es verdadero");
}

if (tempA && (!tempB || tempC)) { 
    console.log("Es true");
}

if (!!!!!!tempA){
    console.log("tempA es true");
}

//Condiciones compuestas con ||
let nombreIngresado = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if ((nombreIngresado == "ANA") || (nombreIngresado == "ana")) {
    console.log("El nombre ingresado es Ana");
} else {
    console.log("El nombre ingresado no es Ana");
}

//Condiciones compuestas con || y &&
let nombreIngresado2 = prompt("Ingrese nombre");

if ((nombreIngresado2 !="") && ((nombreIngresado2 == "EMA") || (nombreIngresado2 == "ema"))){
    alert("Hola Ema")
}else {
    alert("Error: Ingresa un nombre valido");
}

