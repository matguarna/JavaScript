//Funcion constructora de objetos
function Persona(nombre, edad, calle) {
  this.nombre = nombre;
  this.edad = edad;
  this.calle = calle;
}

Persona.edad = 25;

console.log(Persona.edad);

//Instanciar el objeto
Persona2 = new Persona("Juan", 25, "Av bobo");

console.log(Persona2.nombre);

const Persona3 = new Persona({ nombre: "Matias", edad: 28, calle: Bolivar });

console.log(Persona3.nombre);

//Clases

class Pais {
  constructor(nombre) {
    this.nombre = nombre;
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
}

const alumno1 = new Alumno("JavaScript", "asd");
console.log(alumno1);
