// array

// Lista vacia
let people = [];

//Lista con datos
let animal = ["Perro", "Gato", "Serpiente", "Lobo", "Escorpion", "Conejo"];

// console.log(people);
// console.log(animal);

// for (let i = 0; i < animal.length; i++) {
//     console.log(animal[i]);
// }

// // ForEach
// animal.forEach(an => {
//     console.log(an);
// });

// // ForIn
// for (const an in animal) {
//     console.log(animal[an]);
// }

animal[6] = "Dragon"; //Agraga un Item nuevo al Array si conocemos el valor
animal[6] = "Cocodrilo";  // Agraga un Item nuevo al array pero puede sobreescribir el valor
animal.push("Ardilla"); //Agrega un Item en la última posición
animal.push("Tigre");
animal.unshift("Marrano"); //Se agrega un Item en la primera posición
//delete animal[5];// No usar delete  ya que deja un espacio en memoria como undefine
animal.splice(5, 1); // Splice elimina desde la posicion en adelante y el numero de items que se le indique

for (let i = 0; i < animal.length; i++) {
    console.log(animal[i]);
}

// animal.forEach(an => {
//     console.log(an);
// });