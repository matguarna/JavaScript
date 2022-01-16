//const Turno = require("./Turno");
//const Profesional = require("./Profesional");

//import { Profesional } from "./Profesional.js";

class Turno {
  constructor(fecha, hora, nombre, profesionalTurno) {
    this.fecha = fecha;
    this.hora = hora;
    this.nombre = nombre;
    this.profesionalTurno = profesionalTurno;
  }
  mostrarTurnosDisponibles = () => {
    console.log(`Dias y horarios disponibles:`);
    console.log(`10/01/2022: 12:00`);
    console.log(`10/01/2022: 13:00`);
    console.log(`10/01/2022: 14:00`);
    console.log(`10/01/2022: 15:00`);
    console.log(`11/01/2022: 17:00`);
    console.log(`12/01/2022: 12:00`);
    console.log(`12/01/2022: 16:00`);
    console.log(`12/01/2022: 18:00`);
  };
  asignarTurno = () => {
    this.fecha = prompt("Ingrese la fecha deseada para su turno");
    this.hora = prompt("Ingrese la hora deseada para su turno");
  };
  elegirProfesional = (profSelect) => {
    profSelect = prompt("Si desea elegir un profesional ingrese: OK");
    {
      if (profSelect.toUpperCase() == "OK") {
        this.profesionalTurno = prompt("Elija un profesional: Majo, Aye o Lucas.");
        switch (this.profesionalTurno.toLowerCase()) {
          case "majo":
            this.profesionalTurno = "Majo";
            break;
          case "aye":
            this.profesionalTurno = "Aye";
            break;
          case "lucas":
            this.profesionalTurno = "Lucas";
            break;
          default:
            this.profesionalTurno = "Sin preferencia";
            break;
        }
      } else {
        this.profesionalTurno = "Sin preferencia";
      }
    }
  };
}

class Profesional {
  constructor(nombre, especialidad, matricula) {
    this.nombre = nombre;
    this.especialidad = especialidad;
    this.matricula = matricula;
  }
}

class Paciente {
  constructor(nombre, edad, telefono, tratamiento, turno) {
    this.nombre = nombre;
    this.edad = edad;
    this.telefono = telefono;
    this.tratamiento = tratamiento;
    this.turno = turno;
  }
}

const Majo = new Profesional("Maria Jose", "Estética", "M.N.123456");
const Aye = new Profesional("Ayelen", "Ortodoncia", "M.N.654321");
const Lucas = new Profesional("Lucas", "Endodoncia", "M.N.987654");

console.log("Bienvenido, ingrese el turno deseado");

const turnito = new Turno();
turnito.mostrarTurnosDisponibles();

const paciente1 = new Paciente();
paciente1.nombre = prompt("Ingrese su nombre");
paciente1.edad = prompt("Ingrese su edad");
paciente1.telefono = prompt("Ingrese su telefono");
paciente1.tratamiento = prompt("Ingrese el tipo de tratamiento que desea realizarse");

turnito.asignarTurno();
turnito.nombre = paciente1.nombre;
paciente1.turno = turnito;

turnito.elegirProfesional();

console.log(`Estimado ${paciente1.nombre}. Su turno quedó reservado para el dia ${turnito.fecha} a las ${turnito.hora}.
Tratamiento: ${paciente1.tratamiento}.
Profesional: ${turnito.profesionalTurno}.`);

const turnito2 = { fecha: "27/01", hora: "15:30", nombre: "Julian", profesionalTurno: "Aye" };
const turnito3 = { fecha: "01/01", hora: "10:30", nombre: "Fabian", profesionalTurno: "Lucas" };
const turnito4 = { fecha: "30/02", hora: "20:30", nombre: "Ricardo", profesionalTurno: "Majo" };

const turnos = [];
turnos.push(turnito2, turnito3, turnito4);
turnos.push(turnito);
//turnos.push(turnito3, turnito4);

const mostrarTurnosAsignados = () => {
  const turnosOrdenadosFecha = turnos.sort((a, b) => {
    if (a.fecha > b.fecha) {
      return 1;
    } else {
      return -1;
    }
  });
  const turnosOrdenadosHora = turnosOrdenadosFecha.sort((a, b) => {
    if (a.hora > b.hora) {
      return 1;
    } else {
      return -1;
    }
  });
  console.log("Los turnos asignados son los siguientes:");
  for (const dato of turnosOrdenadosHora) {
    console.log(`Paciente: ${dato.nombre}. Fecha: ${dato.fecha}. Hora: ${dato.hora}. Profesional: ${dato.profesionalTurno}`);
  }
};

const filtrarTurnosProfesional = (profesionalTurno) => {
  profesionalTurno = prompt("Ingrese el nombre del profesional para conocer sus turnos asignados");
  if (profesionalTurno != "") {
    switch (profesionalTurno.toLowerCase()) {
      case "majo":
        profesionalTurno = "Majo";
        break;
      case "aye":
        profesionalTurno = "Aye";
        break;
      case "lucas":
        profesionalTurno = "Lucas";
        break;
      default:
        profesionalTurno = "Profesional no encontrado";
        break;
    }
  } else {
    profesionalTurno = "Profesional no encontrado";
  }

  const turnosFiltradosProf = turnos.filter((element) => element.profesionalTurno == profesionalTurno);
  console.log(`Los turnos asignados para ${profesionalTurno} son: `);
  for (const dato of turnosFiltradosProf) {
    console.log(`Paciente: ${dato.nombre}. Fecha: ${dato.fecha}. Hora: ${dato.hora}.`);
  }
};

mostrarTurnosAsignados();
filtrarTurnosProfesional();
