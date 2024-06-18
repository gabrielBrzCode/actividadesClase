// Ejercicios de condicionales
/*
2.) Calculadora de descuento:
Crea un programa que solicite al usuario el precio original de un producto y el porcentaje de descuento que se aplicará. Luego, calcula y muestra el precio final después del descuento. 
*/


/* let CAMBIAN EN EL TIEMPO si usted no sabe si cambia o no mejor pongale LET.
const no cambia*/

const precioOriginal = parseFloat(prompt(`ingrese el valor base del producto`));

const descuento = prompt(`defina el descuento que quiere aplicar : \n 1 - Descuento del 20% \n2 - descuento del 50% \n 3 - descuento del 75% `);

let precioFinal= 0;

// Switch -> es cuando tengo varios casos posibles. ES UN CONDICIONAL

switch(descuento){

    case `1`:
precioFinal= precioOriginal - (precioOriginal*0.2);
alert(`Elprecio final despues del descuento es:`+ precioFinal);
break;
case `2`:
precioFinal= precioOriginal - precioOriginal*0.
5;
alert(`Elprecio final despues del descuento es:`+ precioFinal);
break;
case `3`:
precioFinal= precioOriginal - precioOriginal*0.
7;
alert(`Elprecio final despues del descuento es:`+ precioFinal);
break;
default:
    alert(`digite una opcion valida`)
}
