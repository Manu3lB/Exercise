// Guardar los siguientes datos del usuario
/**
 * Nombre
 * Apellido
 * Edad
 * Telefono
 * Celular
 * Dirección
 */

// LocalStorage



// Variables globales
const btnUser = document.getElementById("btnUser");
const welcome = document.getElementById("welcome");

// Funciones
const userData = () => {
    let userName = prompt("Ingresa tu nombre");
    welcome.innerHTML = `Bienvenido/a : ${userName}`;
    localStorage.setItem("userName", userName);
}

if (localStorage.getItem("userName")) {
    welcome.innerHTML = `Bienvenido/a :  ${localStorage.getItem("userName")}`;
} 

// Evento
btnUser.onclick = () => {
    userData();
}