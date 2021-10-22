// Variables Globales
const btnUser = document.getElementById("btnUser");

// Funciones
const userData = () => {
    // Variables locales
  let userName = prompt("Ingresa tu nombre");
  let age = prompt("Ingresa tu edad");
  alert(`Bienvenido/a  ${userName}  tu edad es: ${age}`);
};

// Eventos (onclick)
btnUser.onclick = function () {
  userData();
};
