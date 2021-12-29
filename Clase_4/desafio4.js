resultado = 10;

function mostrar(valor) {
  console.log(valor);
}
mostrar(resultado);

///////

const asignarTurno = function (fecha, hora, nombre, edad, tratamiento) {
  console.log(`La fecha ingresada es: ${fecha}`);
  console.log(`La hora ingresada es: ${hora}`);
  console.log(`El nombre ingresado es: ${nombre}`);
  console.log(`La edad ingresada es: ${edad}`);
  console.log(`El tratamiento ingresado es: ${tratamiento}`);
};

let turno = prompt("Si quiere reservar un turno ingrese SI \nDe lo contrario, ingrese SALIR");

while (turno != "SALIR") {
  let fechaT = prompt("Ingrese la fecha deseada");
  let horaT = prompt("Ingrese la hora deseada");
  let nombreT = prompt("Ingrese su nombre y apellido");
  let edadT = prompt("Ingrese su edad");
  let tratamientoT = prompt("Si lo sabe, ingrese el tipo de tratamiento que desea solicitar");

  asignarTurno(fechaT, horaT, nombreT, edadT, tratamientoT);

  turno = prompt(
    `La fecha ingresada es: ${fechaT} \nLa hora ingresada es: ${horaT} \nEl nombre ingresado es: ${nombreT} \nLa edad ingresada es: ${edadT} \nEl tratamiento ingresado es: ${tratamientoT} \n\nSi los datos son correctos, escriba SALIR`
  );
}
