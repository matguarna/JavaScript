for (let index = 0; index < 10; index++) {
  console.log(`Index --> ${index}`);
}

for (let pepe = 0; pepe <= 10; pepe++) {
  console.log(pepe);
}

//palabra clave ;
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
