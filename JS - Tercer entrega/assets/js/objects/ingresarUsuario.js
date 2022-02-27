const ingresarUsuario = () => {
  let adm = document.getElementById("formAdmin");
  adm.onsubmit = (e) => {
    e.preventDefault();
    if (userOk && passOk == true) {
      $("#formAdmin").append(`<p id="pAdmin" style="display:none">Bienvenido ${usuario.username}!</p>`);
      $("#pAdmin").css("font-size", "22px");
      $("#pAdmin").css("text-align", "center");
      $("#pAdmin").fadeIn("slow");
      buscarTurnos();
    }
  };
};
