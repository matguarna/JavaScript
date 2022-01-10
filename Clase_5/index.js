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
    this.getName = () => {
      console.log(`${nombre}`);
    };
  }
}

const pau = new Persona("Pau", 30, "Tu mama");

/** Object Literal */
const mat = {
  nombre: "Mat",
  edad: 27,
  calle: "tu vieja",
};

const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");

//console.log(persona1.nombre);
//console.log(persona2.nombre);

// //Instanciar el objeto
Persona2 = new Persona("Juan", 25, "Av bobo");
//console.log(Persona2.nombre);

const Persona3 = new Persona({ nombre: "Matias", edad: 28, calle: "Bolivar" });
//console.log(Persona3);

function Persona5(literal) {
  this.nombre = literal.nombre;
  this.edad = literal.edad;
  this.calle = literal.calle;
}

////Metodos
function Persona6(nombre, apellido, edad, calle) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.calle = calle;
  this.getFullName = () => {
    console.log(`${nombre} ${apellido}`);
  };
}

const persona7 = new Persona6("Matias", "Guarna", 28, "Av. asd");
persona7.getFullName();

///IN
console.log("nombre" in persona7);

///FOR...IN
for (const propiedad in persona7) {
  console.log(persona7[propiedad]);
}

//Clases
const Pais = require("./Pais.js"); //Clase importada desde Pais.js

class InfoBancaria {
  constructor(banco, cci) {
    this.banco = banco;
    this.cci = cci;
  }
}

class Alumno {
  constructor(curso, informacion, pais, infoBancaria) {
    this.curso = curso;
    this.informacion = informacion;
    this.pais = pais;
    this.infoBancaria = infoBancaria;
  }
}

class CoderHouse {
  constructor(alumnos, cursos) {
    this.alumnos = alumnos;
    this.cursos = cursos;
  }
  getCountAlumnos() {
    console.log(`Numero de alumnos totales = ${this.alumnos.length}`);
  }
}

const alumno1 = new Alumno("JavaScript", "asd", "Argentina", "CBU");
const persona8 = new Persona("Julian", 28, "Av Jujuy 30");
const pais1 = new Pais("Argentina");
const alumno2 = new Alumno("Desarrollo Web", persona8, pais1, {}); //infoBancaria se deja como objeto vacio con las llaves vacias {}
console.log(alumno2);

//Acceder a un atributo o metodo en especifico, desde informacion puede acceder a los metodos de persona, porque el parametro "informacion" es "persona8"
alumno2.informacion.getName();

const coderHouse = new CoderHouse([alumno2], ["React"]);
coderHouse.getCountAlumnos();
