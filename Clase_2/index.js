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
