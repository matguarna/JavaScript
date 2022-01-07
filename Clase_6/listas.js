
const numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros[1]); //accede a la posicion deseada
console.log(numeros[numeros.length - 1]); //accede al ultimo valor de la lista

const list = ["a", "b", "c", "d", "e"];
for (let i = 0; i < list.length; i++){
    console.log(list[i]);
}

//Array
//toString()
const miArray = ["a", 3, "asd", false, 5, {nombre: "Matias"}, 20, "asdsd"];
console.log(miArray.toString()) //Convierte todo el contenido en una linea de texto.

//Push
const miArrayPush = ["a", 3, "asd", false, 5, {nombre: "Matias"}];
console.log(miArrayPush.push("Coder")); //para el culo esta esto

//Join
const listJoin = ["a", 3, "asd", false, 5, {nombre: "Matias"}, 20, "asdsd"];
console.log(listJoin.join("@"));

//Googlear ordenamiento burbuja o metodo burbuja para ordenar listas
//Googlear metodo  para ordenar listas: sort (ordenar)

