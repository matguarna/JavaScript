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
