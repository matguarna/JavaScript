let app = document.getElementById("app");
console.log(app);

let puto = $("#app");
console.log(puto);

$(document).ready(function () {
  console.log("Jquery ready");
});

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
