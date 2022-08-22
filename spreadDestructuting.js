//destructuring 
const persona = {
nombre: "Roger",
lastName: "Caballero",
edad: 19

}
// console.log (persona.lastName);

const {nombre, edad} = persona;

console.log (nombre,edad);

//Destructuting de arrays
const personajes = ["David", "Pepo","Lemo","Claro"]
console.log(personajes[2])

const [personaje1, personaje2, personaje3, personaje4] = personajes;
//const [personaje1, personaje2, ...restoPersonajes] = personajes;

console.log (personaje1);
//spread desparramar las propiedades o metodos de un objeto

const personaExtended = {
    ...persona,
    puesto:"programador"

}
console.log(personaExtended);