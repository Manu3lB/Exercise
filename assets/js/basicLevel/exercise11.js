// Condicionales
const btnUser = document.getElementById("btnUser");

const netflix = () => {
  // variables
  let userName = prompt("Ingresa tu nombre");
  welcome.innerHTML = `Bienvenido/a : ${userName}`;
  let age = prompt("Ingresa tu edad");
  let epilepcia = prompt(
    "Sufres de ataques de epilepcia \n Responde : \n Si \n No"
  );
  // epilepcia = epilepcia.toLowerCase(); //toUpperCase() -> para mayúsculas Por estandares siempre se programa en minusculas
  // userName = userName.toLowerCase();

  // Validaciones (No identifica entre mayusculas y minusculas) (si el dato no coincide)
  // Tipos de datos

  // Validar Nulos
  console.log(userName, age, epilepcia);
  if (
    userName == null ||
    userName == "" ||
    age == null ||
    age == "" ||
    epilepcia == null ||
    epilepcia == ""
  ) {
    return alert("Error en el momento de ingresar alguno de los datos");
  }

  epilepcia = epilepcia.toLowerCase();
  userName = userName.toLowerCase();
  //   Validar edad y epilepcia
  if (age >= 18 && epilepcia == "no") {
    alert(` ${userName} tienes permiso al catalogo de peliculas violentas`);
  } else {
    if (epilepcia == "si" || epilepcia == "no") {
      alert(` ${userName} no tienes permiso para ver este catalogo`);
    } else {
      alert(` ${userName} favor ingresar en epilepcia si o no`);
    }
  }

  //   Si es menor de 10 años
  if (age <= 10) {
    alert("Desbloqueaste la sección junior");
  }

  //   Que se llame Juan o que tenga 100 años
  if (age == 100 || userName == "juan") {
    alert("Recuerda que no tienes que pagar suscripción");
  }
};

// Evento
btnUser.onclick = () => {
  netflix();
};

/**
 * >  Mayor
 * >= Mayor o igual
 * <  Menor
 * <= Menor o igual
 * == Igual
 * === Estricto (Tipo de dato y valor)
 * !=  Diferente
 * Logicos
 * && - y
 * || - o
 */
