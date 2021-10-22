// Ciclo For
const btnUser = document.getElementById("btnUser");

// Función
const spam = () => {

    for (let i = 0; i < 5; i++) {
        console.log(i);
        //window.open("https://assets.spartangeek.com/cc/virus-troyano.png");
    }
}


// Evento
btnUser.onclick = () => {
    spam ();
}