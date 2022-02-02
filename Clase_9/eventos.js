const showAlert = () => {
  alert("Funcion por variable");
};

let button = document.getElementById("miBtn").addEventListener("click", showAlert);

//document.getElementById("miBtn").onclick = showAlert;

// let button = document.getElementById("miBtn").addEventListener("click", function () {
//   alert("Funcion anonima");
// });

// let button = document.getElementById("miBtn").addEventListener("click", () => {
//   alert("Funcion tipo flecha");
// });

const showInputValue = (value) => {
  alert(value);
};

//Eventos del mouse
const moviendoMouse = () => {
  alert("Mueva mueva");
};

let buttonMouse = document.getElementById("miBtnMouse");
buttonMouse.onmouseover = () => {
  buttonMouse.style.background = "green";
  buttonMouse.style.fontSize = "25px";
  buttonMouse.textContent = "Tas arriba";
};

buttonMouse.onmouseout = () => {
  buttonMouse.style.background = "white";
  buttonMouse.style.fontSize = "16px";
  buttonMouse.textContent = "ya moviste";
  buttonMouse.style.borderRadius = "20%";
  buttonMouse.style.fontFamily = "Verdana";
};

//Eventos del teclado
//Evento change
let input = document.getElementById("miInput");

input.onchange = (e) => {
  if (e.target.value.length < 10) {
    let form = document.getElementById("miForm");
    let texto = document.createElement("p");
    texto.textContent = "Llenar todos los campos";
    texto.id = "error";
    form.appendChild(texto);
  } else {
    let form = document.getElementById("miForm");
    let texto = document.getElementById("error");
    form.appendChild(texto);
  }
  console.log("onchange--- ", e.target.value);
};

//Evento Submit
let form2 = document.getElementById("miForm2");
form2.onsubmit = (e) => {
  e.preventDefault();
  alert("Enviando informacion");
};

//
let divv = document.getElementById("div1");
let textodiv = document.createElement("p");
textodiv.textContent = "Textito del div";
divv.appendChild(textodiv);

//
window.addEventListener("resize", () => {
  console.log("resize");
});

window.addEventListener("scroll", () => {
  console.log("scroll");
});

//Cuando se termina de cargar la ventana, cuando carga todo.
window.addEventListener("load", () => {
  console.log("load");
});
