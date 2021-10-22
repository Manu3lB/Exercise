let userName = prompt("Ingresa tu nombre");
let age = prompt("Ingresa tu edad");

// Switch

switch (age) {
  case age >= "18":
    alert(` ${userName} tienes permiso al catalogo de peliculas violentas`);
    break;
  default:
    alert(` ${userName} no tienes permiso para ver este catalogo`);
    break;
}
