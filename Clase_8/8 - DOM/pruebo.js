class Turnos {
  constructor(fecha, hora, profesionalTurno, listaTurnos) {
    this.fecha = fecha;
    this.hora = hora;
    this.profesionalTurno = profesionalTurno;
    this.listaTurnos = listaTurnos;

  }
  // addTurno(turno) {
  //   this.listaTurnos.push(turno);
  // }
}

const turno1 = new Turnos("10/01/2022", "12:00", "");
const turno2 = new Turnos("12/01/2022", "13:00", "");
const turno3 = new Turnos("13/01/2022", "14:00", "");
const turno4 = new Turnos("20/01/2022", "16:00", "");
const turno5 = new Turnos("09/02/2022", "17:00", "");
const turno6 = new Turnos("10/02/2022", "18:00", "");

const listaTurnos = [];
listaTurnos.push(turno1, turno2, turno3, turno4, turno5, turno6);

const mostrarTurnosDisponibles = () => {
  let turnis = document.getElementById("turnosForm");
  for (const turno of listaTurnos) {
    let li = document.createElement("li");
    li.innerHTML = turno;
    turnis.appendChild(li);
  }
};
