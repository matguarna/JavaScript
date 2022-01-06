//Objeto = coleccion de datos, atributos
const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742" };
console.log(persona1.nombre);
console.log(persona1["nombre"]);

persona1.edad = 50;
console.log(persona1.edad);
persona1.nombre = "Pedrito";
console.log(persona1.nombre);
persona1["calle"] = "Bolivar 1110";
console.log(persona1.calle);

//Funcion constructora de objetos
// function Persona(nombre, edad, calle) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.calle = calle;
// }

/** Clase */
class Persona {
  constructor(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
  }
}

const pau = new Persona("Pau", 30, "Tu mama");


/** Object Literal */
const mat = {
  nombre: 'Mat',
  edad: 27,
  calle: "tu vieja"
}

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
// const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");


// console.log(persona1.nombre);
// console.log(persona2.nombre);

// //Instanciar el objeto
// Persona2 = new Persona("Juan", 25, "Av bobo");
// console.log(Persona2.nombre);

// const Persona3 = new Persona({ nombre: "Matias", edad: 28, calle: "Bolivar" });
// console.log(Persona3);

// function Persona5(literal) {
//   this.nombre = literal.nombre;
//   this.edad = literal.edad;
//   this.calle = literal.calle;
// }

// //Clases
// class Pais {
//   constructor(nombre) {
//     this.nombre = nombre;
//   }
// }

// class Alumno {
//   constructor(curso, informacion, pais, infoBancaria) {
//     this.curso = curso;
//     this.informacion = informacion;
//     this.pais = pais;
//     this.infoBancaria = infoBancaria;
//   }
// }

// class CoderHouse {
//   constructor(alumnos, cursos) {
//     this.alumnos = alumnos;
//     this.cursos = cursos;
//   }
// }

// const alumno1 = new Alumno("JavaScript", "asd");
// console.log(alumno1);
