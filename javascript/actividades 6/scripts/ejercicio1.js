console.log(`hola`)
//verificar vinculacion




let edad = parseInt(prompt("Por favor ingrese su edad"));
let esCiudadano = confirm("¿Eres ciudadano colombiano?");

console.log(edad, esCiudadano);

// condicional -> if else
// Operador logico && -> se tienen que cumplir si o si todas las condiciones
if (edad >= 18 && esCiudadano == true) {
    alert(`Eres elegible para votar en las proximas elecciones`)
}
else {
    alert(`No eres elegible para votar en las proximas elecciones`)
}