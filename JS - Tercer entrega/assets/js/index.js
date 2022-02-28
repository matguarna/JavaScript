// class Turnos {
//   constructor(fecha, hora, profesionalTurno, listaTurnos) {
//     this.fecha = fecha;
//     this.hora = hora;
//     this.profesional = profesional;
//     this.listaTurnos = listaTurnos;
//   }
// }

let listaTurnosD = [];
let listaTurnosA = [];
var turnosDJSON;
$.ajax({
  type: "GET",
  url: "turnos.json",
  success: function (response) {
    turnosDJSON = response;
    //console.log(turnosDJSON.Turnos.Asignados[0].profesional);
    //console.log(turnosDJSON.Turnos.Asignados.length);
    listaTurnosD = turnosDJSON.Turnos.Disponibles;
    listaTurnosA = turnosDJSON.Turnos.Asignados;
  },
});

//USUARIO
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

// $("inputsClass").change(function (e) {
//   console.log(e.target.value);
//   console.log(this.value);
// });
