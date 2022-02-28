const buscarTurnos = () => {
  $("#logIn-div")
    .append(`<div id="divLogiId" style="display:none"><input type="submit" id="submitAsignados" value="Ver turnos asignados" onclick="mostrarTurnosAsignados()" />
  <p>Buscar turnos por profesional</p>
  <select id="selectProf">
  <option value="Majo" selected >Majo</option>
  <option value="Aye"> Aye</option>
  <option value="Lucas"> Lucas</option>
  </select>
  <input type="submit" id="submitLog" value="Buscar" onclick="buscarProf()"  /></div>`);
  $("#divLogiId").show();
};
