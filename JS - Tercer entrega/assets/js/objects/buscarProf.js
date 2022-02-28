const buscarProf = () => {
  let profsec = document.getElementById("selectProf");
  //console.log(profsec.value); //Imprime el select
  $("#divTurnosP").remove();

  $.ajax({
    type: "GET",
    url: "turnos.json",
    success: function (response) {
      turnosDJSON = response;
      //console.log(turnosDJSON.Turnos[0].profesional);
      //console.log(turnosDJSON.Turnos.length);
      const filtroP = turnosDJSON.Turnos.Asignados.filter((e) => e.profesional == profsec.value);
      $("#divLogiId").append(`<div id="divTurnosP" style="display:none">
          <p>Los turnos asignados para ${profsec.value} son: </p></div>`);
      for (const dato of filtroP) {
        let li = document.createElement("li");
        li.innerHTML = `Dia: ${dato.fecha}. Hora: ${dato.hora}.`;
        $("#divTurnosP").append(li);
      }
      $("#divTurnosP").show();
    },
  });
};
