//Funcion para solicitar turnos, despliega un formulario para completar por el cliente.
const solicitarTurno = () => {
  let solicTurno = document.getElementById("turnosForm");
  let div = document.createElement("div");
  div.innerHTML = `<input type="text" placeholder="Nombre" required/>
    <input type="number" placeholder="Telefono" required/> <input type="number" placeholder="Edad" /> <input type="date" placeholder="Fecha" required/> <input type="text" placeholder="Horario" required/> <input type="submit" value="Reservar" />`;
  solicTurno.appendChild(div);
  document.getElementById("stopButton1").disabled = true;

  //Informa mediante el boton de reserva que se reservo correctamente el turno.
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
