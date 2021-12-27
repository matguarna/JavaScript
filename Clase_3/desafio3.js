let ingresarNacimiento = parseInt(prompt("Ingrese su año de nacimiento"));
for (let i = 0; i <= 100; i++) {
  if (isNaN(ingresarNacimiento)) {
    ingresarNacimiento = parseInt(prompt("Error. Ingrese su año de nacimiento"));
    i = 0;
  }
  console.log(`En el año ${ingresarNacimiento} tendrias ${i} años`);
  switch (i) {
    case 10:
      console.log(`Solo te preocupa saber que te va a traer papa noel`);
      break;
    case 18:
      console.log(`No tenes ni idea que carrera seguir`);
      break;
    case 45:
      console.log(`Te salieron un par de canas`);
      break;
    case 65:
      console.log(`Y te estarias jubilando`);
      break;
    default:
      break;
  }
  ingresarNacimiento = ingresarNacimiento + 1;
}
