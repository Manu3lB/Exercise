// Variables globales
const btnUser = document.getElementById("btnUser");
const welcome = document.getElementById("welcome");

// Funciones
const userData = () => {
    let userName = prompt("Ingresa tu nombre");
    welcome.innerHTML = `Bienvenido/a : ${userName}`;
}


// Evento
btnUser.onclick = () => {
    userData();
}