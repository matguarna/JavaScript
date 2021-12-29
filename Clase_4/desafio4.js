resultado = 10;

function mostrar(valor) {
  console.log(valor);
}
mostrar(resultado);



const asignarTurno = function (fecha, hora, nombre, edad, tratamiento) {
  let fechaT = prompt("Ingrese la fecha deseada");
  let horaT = prompt("Ingrese la hora deseada");
  let nombreT = prompt("Ingrese su nombre y apellido");
  let edadT = prompt("Ingrese su edad");
  let tratamientoT = prompt("Si lo sabe, ingrese el tipo de tratamiento que desea solicitar");

  console.log(`La fecha ingresada es: ${fechaT}`);
  console.log(`La hora ingresada es: ${horaT}`);
  console.log(`El nombre ingresado es: ${nombreT}`);
  console.log(`La edad ingresada es: ${edadT}`);
  console.log(`El tratamiento ingresado es: ${tratamientoT}`);
};

let turno = prompt("Si quiere reservar un turno ingrese SI \nDe lo contrario, ingrese SALIR");
while (turno != "SALIR") {
  asignarTurno();

  turno = prompt(
    `La fecha ingresada es: ${fechaT} \nLa hora ingresada es: ${horaT} \nEl nombre ingresado es: ${nombreT} \nLa edad ingresada es: ${edadT} \nEl tratamiento ingresado es: ${tratamientoT} \nSi los datos son correctos, escriba SALIR`
  );
}

///////

const asignarTurno = function (fecha, hora, nombre, edad, tratamiento) {
  console.log(`La fecha ingresada es: ${fechaT}`);
  console.log(`La hora ingresada es: ${horaT}`);
  console.log(`El nombre ingresado es: ${nombreT}`);
  console.log(`La edad ingresada es: ${edadT}`);
  console.log(`El tratamiento ingresado es: ${tratamientoT}`);
};

let turno = prompt("Si quiere reservar un turno ingrese SI \nDe lo contrario, ingrese SALIR");

let fechaT = 0;
let horaT = 0;
let nombreT = 0;
let edadT = 0;
let tratamientoT = 0;

while (turno != "SALIR") {
  fechaT = prompt("Ingrese la fecha deseada");
  horaT = prompt("Ingrese la hora deseada");
  nombreT = prompt("Ingrese su nombre y apellido");
  edadT = prompt("Ingrese su edad");
  tratamientoT = prompt("Si lo sabe, ingrese el tipo de tratamiento que desea solicitar");

  asignarTurno(fechaT, horaT, nombreT, edadT, tratamientoT);

  turno = prompt(
    `La fecha ingresada es: ${fechaT} \nLa hora ingresada es: ${horaT} \nEl nombre ingresado es: ${nombreT} \nLa edad ingresada es: ${edadT} \nEl tratamiento ingresado es: ${tratamientoT} \n\nSi los datos son correctos, escriba SALIR`
  );
}
