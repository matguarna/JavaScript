const arrayA = [];
const arrayB = [1, 2, "asd", false, 25];
console.log(arrayB.length);
console.log(arrayB[0]);

//.lenght = la longitud de "lista", osea 6.
const lista = ["a", "b", "c", "d", "e", "f", "g"];
for (let i = 0; i < lista.length; i++) {
  console.log(lista[i]);
  console.log(`soy una bolubi ${i}`);
}

let index = 0;
while (index < lista.length) {
  console.log(lista[index]);
  index++;
}

//.toString()
const arrayC = [1, 2, "asd", { nombre: "false" }, 25];
console.log(arrayC.toString());

//.push()
const arrayD = [1, 2, "asd", { nombre: "false" }, 25];
arrayD.push("ultimo");
console.log(arrayD);

//.join
const arrayE = [1, 2, "asd", { nombre: "false" }, 25];
console.log(arrayE.join("@"));

//.concat
console.log(arrayB.concat(arrayC));

//slice
const arrayF = [0, 1, 2, 3, 4, 5];
const arrayG = arrayF.slice(1, 3);
console.log(arrayG);

//Ejemplo aplicado: cargar array con entradas
// const listaNombres = [];
// let cantidad = 5;

// do{
//     let entrada = prompt("Ingresar nombre");
//     listaNombres.push(entrada.toUpperCase());
//     console.log(listaNombres.length);
// } while (listaNombres.length != cantidad)

// const nuevaLista = listaNombres.concat(["ANA", "EMA"]);
// alert(nuevaLista.join("\n"));
//
//Acceder al ultimo valor de un array
console.log(arrayD[arrayD.length - 1]);

//Array de objetos
const persona = { nombre: "Matias", apellido: "Guarna" };
const persona1 = { nombre: "Majo", apellido: "Pacheco" };
const list = [persona];
list.push(persona1);
console.log(list);
