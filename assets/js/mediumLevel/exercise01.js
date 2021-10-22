//  Fechas
let registerDate = new Date();

// Sacamos el año
let year = registerDate.getFullYear();
//en código inicia desde cero
let month = registerDate.getMonth()+1;
let day = registerDate.getDate();
let hour = registerDate.getHours();
let minute = registerDate.getMinutes();
let second = registerDate.getSeconds();

console.log(`${day}/${month}/${year}`);
console.log(`${hour}:${minute}:${second}`);