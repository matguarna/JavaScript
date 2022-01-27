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

const solicitarTurno = () => {
  let solicTurno = document.getElementById("turnosForm");
  let div = document.createElement("div");
  div.innerHTML = `<input type="text" placeholder="Nombre" />
  <input type="number" placeholder="Telefono" /> <input type="number" placeholder="Edad" /> <input type="date" placeholder="Fecha" /> <input type="text" placeholder="Horario" /> <input type="submit" value="Reservar" />`;
  solicTurno.appendChild(div);
  document.getElementById("stopButton1").disabled = true;
};

const mostrarTurnosDisponibles = () => {
  let turnosFunction = document.getElementById("turnosForm");
  let p = document.createElement("p");
  p.innerHTML = `Los días y horarios disponibles son: `;
  turnosFunction.appendChild(p);
  for (const turno of listaTurnos) {
    let li = document.createElement("li");
    li.innerHTML = `Día ${turno.fecha} a las ${turno.hora} hs. - ${turno.profesionalTurno}`;
    turnosFunction.appendChild(li);
  }
  document.getElementById("stopButton2").disabled = true;
};
