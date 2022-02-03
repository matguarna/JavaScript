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

//Funcion para solicitar turnos, despliega un formulario para completar por el cliente.
const solicitarTurno = () => {
  let solicTurno = document.getElementById("turnosForm");
  let div = document.createElement("div");
  div.innerHTML = `<input type="text" placeholder="Nombre" required/>
  <input type="number" placeholder="Telefono" required/> <input type="number" placeholder="Edad" /> <input type="date" placeholder="Fecha" required/> <input type="text" placeholder="Horario" required/> <input type="submit" value="Reservar" />`;
  solicTurno.appendChild(div);
  document.getElementById("stopButton1").disabled = true;

  //Informa mediante el boton de reserva, que se reservo correctamente el turno.
  let buttonSubmit = document.getElementById("turnosForm");
  buttonSubmit.onsubmit = (e) => {
    e.preventDefault();
    txtSubmit = document.getElementById("turnosForm");
    txtSubmitdiv = document.createElement("p");
    txtSubmitdiv.textContent = "Turno reservado correctamente";
    txtSubmit.appendChild(txtSubmitdiv);
    txtSubmit.id = "bSub";
    document.getElementById("bSub").disabled = true;
  };
};

//Muestra los turnos disponibles en la lista de turnos.
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

//Valida los datos ingresdos para iniciar sesion
const ingresarUsuario = () => {
  let adm = document.getElementById("formAdmin");
  let usr = document.getElementById("userId");
  let pwd = document.getElementById("passwdId");
  adm.onsubmit = (e) => {
    e.preventDefault();
    if (usr.value == "admin" && pwd.value == "admin") {
      let logOk = document.createElement("p");
      logOk.textContent = "Ingresaste ok";
      adm.appendChild(logOk);
      //Guarda en el sessionStorage los datos del usuario ingresado correctamente
      sessionStorage.setItem("user", usr.value);
      sessionStorage.setItem("passwd", pwd.value);
    } else if (usr.value == "" && pwd.value == "") {
      let failLogin = document.createElement("p");
      failLogin.textContent = "Ingrese usuario y contraseña";
      adm.appendChild(failLogin);
    } else if (usr.value != "admin") {
      let failUser = document.createElement("p");
      failUser.textContent = "Usuario incorrecto";
      adm.appendChild(failUser);
    } else {
      let failPwd = document.createElement("p");
      failPwd.textContent = "Contraseña incorrecta";
      adm.appendChild(failPwd);
    }
  };
};
