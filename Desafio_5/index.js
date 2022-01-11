class Turno {
  constructor(fecha, hora) {
    this.fecha = fecha;
    this.hora = hora;
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
}

class Paciente {
  constructor(nombre, edad, telefono, tratamiento, turno, profesionalTurno) {
    this.nombre = nombre;
    this.edad = edad;
    this.telefono = telefono;
    this.tratamiento = tratamiento;
    this.turno = turno;
    this.profesionalTurno = profesionalTurno;
  }
  elegirProfesional = (profSelect) => {
    profSelect = prompt("Si desea elegir un profesional ingrese: OK");
    {
      if (profSelect == "OK") {
        //console.log("Elija un profesional: Majo, Aye o Lucas.");
        switch ((this.profesionalTurno = prompt("Elija un profesional: Majo, Aye o Lucas."))) {
          case "Majo":
            this.profesionalTurno = "Majo";
            break;
          case "Aye":
            this.profesionalTurno = "Aye";
            break;
          case "Lucas":
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
paciente1.turno = turnito;

paciente1.elegirProfesional();

console.log(`Estimado ${paciente1.nombre}. Su turno quedó reservado para el dia ${turnito.fecha} a las ${turnito.hora}.
Tratamiento: ${paciente1.tratamiento}.
Profesional: ${paciente1.profesionalTurno}.`);
