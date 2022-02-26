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

//Turnos disponibles
const turno1 = new Turnos("10/01/2022", "12:00", "");
const turno2 = new Turnos("12/01/2022", "13:00", "");
const turno3 = new Turnos("13/01/2022", "14:00", "");
const turno4 = new Turnos("20/01/2022", "16:00", "");
const turno5 = new Turnos("09/02/2022", "17:00", "");
const turno6 = new Turnos("10/02/2022", "18:00", "");

//Turnos asignados
const turno7 = new Turnos("10/01/2022", "15:00", "Majo");
const turno8 = new Turnos("15/01/2022", "12:00", "Aye");
const turno9 = new Turnos("14/01/2022", "17:00", "Lucas");
const turno10 = new Turnos("10/01/2022", "18:00", "Majo");
const turno11 = new Turnos("18/01/2022", "19:00", "Aye");
const turno12 = new Turnos("10/01/2022", "11:00", "Lucas");

const listaTurnos = [];
listaTurnos.push(turno1, turno2, turno3, turno4, turno5, turno6);

const listaTurnosAsignados = [];
listaTurnosAsignados.push(turno7, turno8, turno9, turno10, turno11, turno12);

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

//PANEL USUARIO
const usuario = {
  username: "admin",
  password: "admin",
};
let userOk;
let passOk;
$(document).ready(function () {
  $("#usernameId").change(function (e) {
    e.preventDefault();
    if (e.target.value !== usuario.username) {
      $("#usernameError").show(); //muestra el mensaje
      userOk = false;
    } else {
      $("#usernameError").hide(); //oculta el mensaje
      sessionStorage.setItem("user", usuario.username);
      userOk = true;
    }
  });
  $("#passwordId").change(function (e) {
    e.preventDefault();
    if (e.target.value !== usuario.password) {
      $("#passwordError").show(); //muestra el mensaje
      passOk = false;
    } else {
      $("#passwordError").hide(); //oculta el mensaje
      sessionStorage.setItem("pwd", usuario.password);
      passOk = true;
    }
  });
});

//Valida los datos ingresdos para iniciar sesion
const ingresarUsuario = () => {
  let adm = document.getElementById("formAdmin");
  adm.onsubmit = (e) => {
    e.preventDefault();
    if (userOk && passOk == true) {
      $("#formAdmin").append(`<p id="pAdmin" style="display:none">Bienvenido ${usuario.username}!</p>`);
      $("#pAdmin").css("font-size", "22px");
      $("#pAdmin").css("text-align", "center");
      $("#pAdmin").fadeIn("slow");
      buscarTurnos();
    }
  };
};

const buscarTurnos = () => {
  //   let getLog = document.getElementById("logIn-div");
  //   let divLogi = document.createElement("div");
  //   divLogi.innerHTML = `<input type="submit" id="submitAsignados" value="Ver turnos asignados" onclick="mostrarTurnosAsignados()" />
  //   <p>Buscar turnos por profesional</p>
  // <input type="text" placeholder="Profesional" id="searchProf" required/><input type="submit" id="submitLog" value="Buscar" onclick="buscarProf()"  />`;
  //   getLog.appendChild(divLogi);
  //   divLogi.id = "divLogiId";
  $("#logIn-div")
    .append(`<div id="divLogiId"><input type="submit" id="submitAsignados" value="Ver turnos asignados" onclick="mostrarTurnosAsignados()" />
<p>Buscar turnos por profesional</p>
<select class="inputsClass">
<option value="1" selected >Majo</option>
<option value="2"> Aye</option>
<option value="3"> Lucas</option>
</select>
<input type="text" placeholder="Profesional" id="searchProf" required/><input type="submit" id="submitLog" value="Buscar" onclick="buscarProf()"  /></div>`);
};

$("inputsClass").change(function (e) {
  console.log(e.target.value);
  console.log(this.value);
});

//Muestra los turnos asignados y los ordena por fecha.
const mostrarTurnosAsignados = () => {
  const turnosOrdenadosFecha = listaTurnosAsignados.sort((a, b) => {
    if (a.fecha > b.fecha) {
      return 1;
    } else {
      return -1;
    }
  });
  console.log(turnosOrdenadosFecha);
  let divAsignados = document.getElementById("logIn-div");
  let p2 = document.createElement("p");
  p2.innerHTML = `<p>Los turnos asginados son: </p>`;
  divAsignados.appendChild(p2);
  for (const dato of turnosOrdenadosFecha) {
    let li = document.createElement("li");
    li.innerHTML = `Dia: ${dato.fecha}. Hora: ${dato.hora}. Profesional: ${dato.profesionalTurno}.`;
    divAsignados.appendChild(li);
  }
};

// const buscarProf = () => {
//   const traerBusqueda = document.getElementById("searchProf");
//   const logSubmit = document.getElementById("submitLog");
//   logSubmit.onclick = (e) => {
//     e.preventDefault();
//     console.log("buscarProf funciona ok");
//     if (traerBusqueda.value == listaTurnosAsignados.profesionalTurno) {
//       console.log("El buscador funciona okkkkk");
//     }
//   };
// };

//Funcion que agrega con jquery un elemento
const createElement = (selector, html) => {
  $(selector).append(html);
};

const buscarProf = () => {
  //Trae al input donde busca el profesional
  const traerBusqueda = document.getElementById("searchProf");
  //Trae el mismo div donde se encuentra el buscador de profesional
  let divAsignados2 = document.getElementById("divLogiId");

  $("#submitLog").click((e) => {
    e.preventDefault();
    console.log("buscarProf funciona ok");
    switch (traerBusqueda.value) {
      case "Majo":
        //let divAsignados = document.getElementById("divLogiId");
        let p3 = document.createElement("p");
        p3.innerHTML = `<p>Los turnos asginados para Majo son: </p>`;
        divAsignados2.appendChild(p3);
        const turnosFiltradosProf = listaTurnosAsignados.filter((e) => e.profesionalTurno == "Majo");
        //console.log(`switch majo funca ok`);
        for (const dato of turnosFiltradosProf) {
          let li = document.createElement("li");
          li.innerHTML = `Dia: ${dato.fecha}. Hora: ${dato.hora}.`;
          divAsignados2.appendChild(li);
        }
        break;
      case "Aye":
        console.log(`${suich} es salame`);
        break;
      case "Lucas":
        console.log(`${suich} es juan`);
        break;
      default:
        console.log("Prof. no encotrado");
        break;
    }
  });
};
