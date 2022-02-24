window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM READY by JavaScript");
});

$(document).ready(() => {
  console.log("DOM READY By jQuery");
});

$(document).ready(function () {
  console.log("Jquery ready");
});

$(function () {
  console.log("DOM READY3");
});

$(() => {
  console.log("DOM READY CORTITO");
});

let app = document.getElementById("app");
console.log(app);

let puto = $("#app");
console.log(puto);

$("li");

let valueH = $(":text")[0].value;
console.log(valueH);

//para recorrer la lista
//$.map(valueH, function (elementOrValue, indexOrKey) {});

//Equivalencia en JS vainilla
var parrafo = document.createElement("p");
parrafo.innerHTML = "<h2>Hola giles</h2>";
document.body.appendChild(parrafo);

const lista = [{ name: "Matias" }, { name: "Julian" }, { name: "Pedro" }, { name: "Juan" }];

const createElement = (selector, html) => {
  $(selector).append(html);
};

const toggleLoader = () => {
  $("#loader").toggle();
};

$("#loader").hide();
$("#loader").show();

const initWebsite = () => {
  setTimeout(() => {
    $(document).ready(function (event) {
      console.log("Ready");
      createElement("#app", `<ul id="lista"></ul>`);
      lista.map((v, idx) => {
        createElement("#lista", `<li class="li-${idx}" >${v.name}</li>`);
      });
      toggleLoader();
    });
  }, 2000); //Temporizador, luego de 2 segundos ejecuta el codigo y aparece la lista.
};

initWebsite();
//////////////////////////////////////////////
const listaTemportal = [];

//Evalua si un valor existe en una lista, si existe avisa, y si no existe lo agrega
const addValueToList = (value) => {
  console.log(value);
  let findValue = listaTemportal.find((v) => {
    return v.name == value.name;
  });
  if (findValue) {
    //si findValue tiene el valor de v
    alert("Valor ya existe en la lista");
  } else {
    listaTemportal.push(value);
  }
  console.log(listaTemportal);
};

const initWebsite2 = () => {
  setTimeout(() => {
    $(document).ready(function (event) {
      console.log("Ready");
      createElement("#app", `<ul id="lista"></ul>`);
      lista.map((v, idx) => {
        createElement("#lista", `<li class="li-${idx}" ><button id="button-${idx}">${v.name}</button></li>`);
        $(`#button-${idx}`).click(function (e) {
          e.preventDefault();
          console.log(v.name);
          addValueToList(v);
        });
      });
      toggleLoader();
    });
  }, 2000); //Temporizador, luego de 2 segundos ejecuta el codigo y aparece la lista.
};

initWebsite2();

//Hace que desaparezca despues de 3 segundos el botton 2
setTimeout(() => {
  $("#button-2").fadeOut();
}, 3000);

//Hace que aparezca luego de 5 segundos el botton 2
setTimeout(() => {
  $("#button-2").fadeIn();
}, 5000);

window.addEventListener("load", function () {
  console.log("LOAD: Todos los elementos de la ventana estan cargados.");
});

//Crea un boton en el body
$("body").append(`<button id="btn1">Boton de prueba</button>`);
//Le asigna el evento click al boton creado y ejecuta el codigo dentro
$("#btn1").on("click", function (e) {
  e.preventDefault();
  console.log("boton de prueba funcionando");
});

//Crea otro boton en el body
$("body").append(`<button id="btn2">Boton de prueba 2</button>`);
//Le asigna el evento click al boton creado y ejecuta el codigo dentro
$("#btn2").click((e) => {
  e.preventDefault();
  console.log("boton de prueba 2 funca ok");
});

//Change()
$("body").append(`<input type="text" class="inputsClass">
<input type="text" class="inputsClass">
<select class="inputsClass">
<option value="1" selected >ID 1</option>
<option value="2"> ID 2</option>
<option value="3"> ID 3</option>
</select>
<button type="submit" value="submit" id="subm2">Submittt</button>`);

$("inputsClass").change(function (e) {
  console.log(e.target.value);
  console.log(this.value);
});

//submit
$("#subm2").submit((e) => {
  e.preventDefault();
  console.log("funciona el submi");
});

//Trigger()
//agregamos un boton y un input
$("body").append(`<button id="btnbtn1">Button1</button>`);
$("body").append(`<input id="ipt1" type="text">`);

//asociamos el evento change al ipt1
$("#ipt1").change((e) => {
  console.log("El valor es " + e.target.value);
});

//Asociamos el evento click para btn1 y usamos trigger
$("btnbtn1").click(() => {
  //usamos trigger para disparar el eventoi change de ipt1
  $("#ipt1").trigger("change");
});

//show()
$("body").append(`<h3 style="display:none">Probando el showww</h3>`);
//$("h3").show();

//hide()
$("body").append(`<h2 style="display:flex">Probando el hide</h2>`);
$("h2").hide();

//fadeIn()
$("body").append(`<h4 style="display:none">Probando FADE INNNN</h4>`);
//$("h4").fadeIn();

//fadeOut()
$("body").append(`<h5 >Probando FADEouttt </h5>`);
$("h5").fadeOut();

//Btn fade
$("body").append(`<h1 style="display:none" id="h1Fade">BOTONCITO FADE</h1>`);
//Con el boton FADE gris aparece el titulo h1
$(document).ready(function () {
  $("#btnFade").click(() => {
    $("#h1Fade").fadeIn("slow");
    // setTimeout(() => {
    //   $("#h1Fade").fadeIn();
    // }, 3000);
  });
});

//Con el boton FADE gris desaparece el titulo h1
$(document).ready(function () {
  $("#btnFade").click(() => {
    //$("#h1Fade").fadeOut("slow");
    setTimeout(() => {
      $("#h1Fade").fadeOut();
    }, 1500);
  });
});

//slideDown() y slideUp()
//Agregamos un boton y un div con jquery. iGUAL que fadeIn, debe ser display:none
$("body").append(`<button id="btnSlide">Mostrar Slide Down</button>`);
$("body").append(`<div id="div1" style="height: 120px; display:none"
<h3>Hola put0s</h3>
<h4>Sorpresa 2</h4>
</div>`);
//Usamos slideDown() sobre div1 en respuesta al click del boton btnSlide
// $("#btnSlide").click(() => {
//   $("#div1").slideDown("slow");
// });

//slideToggle()
$("#btnSlide").click(() => {
  $("#div1").slideToggle("slow");
});

//
const usuario = {
  username: "matias",
  password: "admin",
};

$(document).ready(function () {
  $("#usernameId").change(function (e) {
    e.preventDefault();
    if (e.target.value !== usuario.username) {
      $("#usernameError").show(); //muestra el mensaje
    } else {
      $("#usernameError").hide(); //oculta el mensaje
    }
  });

  $("#passwordId").change(function (e) {
    e.preventDefault();
    if (e.target.value !== usuario.password) {
      $("#passwordError").show(); //muestra el mensaje
    } else {
      $("#passwordError").hide(); //oculta el mensaje
    }
  });
});

//CSS con jquery
$("#holaMundo").css("color", "red");

$("#divCss").css({
  "background-color": "green",
  border: "5px solid #ccc",
});

//animate()
$("body").append(`<p class="tituloAnimate" >Probando ANIMATE</p>`);
//Animamos sus propiedades css con animate
$(".tituloAnimate").animate(
  {
    left: "250px",
    opacity: "0.5",
    height: "150px",
    width: "150px",
  }, //1er parametro propiedades
  "slow", //2do parametro duracion
  function () {
    //3er parametro callback
    console.log("final de animacion");
  }
);

//Otro ejemplo
$("body").append(`<button id="botonAnimate">Boton Animate</button>`);
$("body").append(`<div id="divAnimate"></div>`);
//La estructura del animate es la siguiente: animate(Objeto de Estilo, velocidad, funcion)
$("#botonAnimate").click(() => {
  $("#divAnimate").animate(
    {
      left: "250px",
      opacity: "0.5",
      height: "250px",
      width: "250px",
    },
    "slow",
    function () {
      console.log("animate funciona ok");
    }
  );
});

//Encadenar animaciones
$("body").prepend(`<p id="encadenarAnim">Probando encadenar animACIONEEES</p>`);
$("#encadenarAnim").css("color", "red");
$("#encadenarAnim").slideUp(1500);
$("#encadenarAnim").delay(1500);
$("#encadenarAnim").slideDown(1500);

//otro ejemplo
$("body").append(`<button id="botonEncadenados">Boton Encadenados</button>`);
$("body").append(`<div id="divEncadenados"></div>`);
//La estructura del animate es la siguiente: animate(Objeto de Estilo, velocidad, funcion)
$("#botonEncadenados").click(() => {
  let containerA = $("#divEncadenados");
  containerA.animate(
    {
      opacity: "0.3",
      height: "300px",
      width: "300px",
    },
    1000
  );
  containerA.animate(
    {
      opacity: "1",
      height: "100px",
      width: "100px",
    },
    1000
  );
  containerA.animate(
    {
      opacity: "0.3",
      height: "300px",
      width: "300px",
    },
    1000
  );
  containerA.animate(
    {
      opacity: "1",
      height: "100px",
      width: "100px",
    },
    1000
  );
});
