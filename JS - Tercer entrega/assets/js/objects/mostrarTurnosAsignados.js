//Muestra los turnos asignados y los ordena por fecha.
const mostrarTurnosAsignados = () => {
  const turnosOrdenadosFecha = listaTurnosA.sort((a, b) => {
    if (a.fecha > b.fecha) {
      return 1;
    } else {
      return -1;
    }
  });
  //console.log(turnosOrdenadosFecha);
  for (const dato of turnosOrdenadosFecha) {
    $("#logIn-div").append(`<div id="divTurnosA" style="display:none"><p>Los turnos asignados son: </p></div>`);
    let li = document.createElement("li");
    li.innerHTML = `Dia: ${dato.fecha}. Hora: ${dato.hora}. Profesional: ${dato.profesional}.`;
    $("#divTurnosA").append(li);
  }
  $("#divTurnosA").show();
  document.getElementById("submitAsignados").disabled = true;
};
