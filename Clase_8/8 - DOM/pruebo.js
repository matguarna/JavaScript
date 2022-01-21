class Turnos {
  constructor(fecha, hora, profesionalTurno) {
    this.fecha = fecha;
    this.hora = hora;
    this.profesionalTurno = profesionalTurno;
  }
}

const turno1 = new Turnos((fecha = "10/01/2022"), (hora = "12:00"), (profesionalTurno = ""));
const turno2 = { fecha: "10/01/2022", hora: "13:00", profesionalTurno: "" };
const turno3 = { fecha: "11/01/2022", hora: "15:00", profesionalTurno: "" };
const turno4 = { fecha: "14/01/2022", hora: "12:00", profesionalTurno: "" };
const turno5 = { fecha: "17/01/2022", hora: "11:00", profesionalTurno: "" };
const turno6 = { fecha: "20/01/2022", hora: "18:00", profesionalTurno: "" };
const listaTurnos = [];
listaTurnos.push(turno1, turno2, turno3, turno4, turno5, turno6);

console.log(turno1);

const mostrarTurnosDisponibles = () => {
  let turnis = document.getElementById("turnosForm");
  for (const turno of listaTurnos) {
    let li = document.createElement("li");
    li.innerHTML = turno;
    turnis.appendChild(li);
  }
};
