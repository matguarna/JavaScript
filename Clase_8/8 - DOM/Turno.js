class Turno {
    constructor(fecha, hora, nombre) {
      this.fecha = fecha;
      this.hora = hora;
      this.nombre = nombre;
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

module.exports = Turno;
