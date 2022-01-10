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
  constructor(nombre, edad, telefono) {
    this.nombre = nombre;
    this.edad = edad;
    this.telefono = telefono;
  }
  elegirProfesional = (profSelect, profesionalTurno) => {
    let profesionalTurno;
    profSelect = prompt("Si desea elegir un profesional ingrese: OK");
    {
      if (profSelect == "OK") {
        profesionalTurno = prompt("Elija el profesional: Majo, Aye o Lucas");
      } else {
        profesionalTurno = "Sin preferencia";
      }
    }
  };
}

class Tratamiento {
  constructor(tipoTratamiento) {
    this.tipoTratamiento = tipoTratamiento;
  }
}

class Profesional {
  constructor(nombre, especialidad) {
    this.nombre = nombre;
    this.especialidad = especialidad;
  }
}

console.log("Bienvenido, ingrese el turno deseado");

const turnito = new Turno();
turnito.mostrarTurnosDisponibles();

const paciente1 = new Paciente();
paciente1.nombre = prompt("Ingrese su nombre");
paciente1.edad = prompt("Ingrese su edad");
paciente1.telefono = prompt("Ingrese su telefono");

paciente1.elegirProfesional();
turnito.asignarTurno();

console.log(`Estimado ${paciente1.nombre}. Su turno quedó reservado para el dia ${turnito.fecha} a las ${turnito.hora}.
Profesional: ${paciente1.profesionalTurno}`);
