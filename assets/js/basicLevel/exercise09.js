// DOM
// Traemos el boton al que queremos darle click
const btnUser = document.getElementById("btnUser");

const userData = () => {
    alert("Bienvenidos");
}

btnUser.onclick = function () {
    userData();
};
