for (let index = 0; index < 10; index++) {
  console.log(`Index --> ${index}`);
}

let pepe = 0;
for (; pepe <= 10; pepe++) {
  console.log(pepe);
}

// definir variable mediante la cual se pueda iterar, editar su contenido; condicion que se tiene que dar para que la ejecucion sea satisfactoria (menor a 10); se define la accion de actualizacion, en este caso le suma 1 con el ++, es hacer la suma de la misma variable + 1.

for (let index = 0; index < 10; index++) {
  if (index == 5) {
    break; //para al llegar al 5, no lo imprime
  }
  console.log(`Index --> ${index}`);
}

for (let asd = 0; asd < 10; asd++) {
  if (asd == 5) {
    continue; //no imprime el 5, y continua imprimiendo el resto
  }
  console.log(`Asd --> ${asd}`);
}

for (let mundial = 2002; mundial < 2100; mundial = mundial + 4) {
  console.log(`Hay mundial ${mundial}`);
}

let nombre = "matias";
for (let i = 0; i < nombre.length; i++) {
  console.log(`Letra ${nombre[i]} posicion ${i}`);
}

let numero = 5;
switch (numero) {
  case 5:
    console.log(5);
    break;
  case 10:
    console.log(10);
    break;
  default:
    console.log(`numero es igual a = ${numero}`);
    break;
}

//WHILE
let repetir = true;

while (repetir) {
  console.log("Repiteeee");
  break;
}

//Otro ejemplo while

let wEntrada = prompt("Ingrese un dato");

while (wEntrada != "ESC") {
  alert("El usuario ingresó " + wEntrada);
  //Volvemos a solicitar otro dato, hasta que ingrese ESC para finalizar
  wEntrada = prompt("Ingrese otro dato");
}

//DO WHILE
let numerin = 0;

do {
  numerin = prompt("Ingrese un numero");
  alert(numerin);
} while (parseInt(numerin));

//SWITCH
let suich = prompt("Ingrese algo");

while (suich != "ESC") {
  switch (suich) {
    case "asd":
      console.log(`${suich} es asd`);
      break;
    case "salame":
      console.log(`${suich} es salame`);
      break;
    case "juan":
      console.log(`${suich} es juan`);
      break;
    case "pedro":
      console.log(`${suich} es pedro`);
      break;
    default:
      console.log("Perdiste chauu");
      break;
  }
  suich = prompt("Ingresa algo mas piola");
}
