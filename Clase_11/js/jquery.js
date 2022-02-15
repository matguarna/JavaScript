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

const initWebsite = () => {
  setTimeout(() => {
    $(document).ready(function (event) {
      console.log("Ready");
      createElement("#app", `<ul id="lista"></ul>`);
      lista.map((v, idx) => {
        createElement("#lista", `<li class="li-${idx}" >${v.name}</li>`);
      });
      //toggleLoader();
    });
  }, 2000); //Temporizador, luego de 2 segundos ejecuta el codigo y aparece la lista.
};

initWebsite();
