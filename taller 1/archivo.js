//calculadora para sumar 2 numeros por medio de un PROMPT que solicita los numeros al usuario




let numeroUno = parseInt(prompt("Ingrese un número: "))
let numeroDos = parseInt(prompt("Ingrese un segundo número: "))

let resultadoSuma = numeroUno + numeroDos
alert("Suma: " + resultadoSuma)


function esPar(num) {
    if (num % 2 === 0)//si el numero ingresado es divisible entre 2 o termina en 0 sera TRUE es decir numero PAR.
    {
        return true; // el numero que es par
    }
    else {
        return false; // el numero que es impar
    }
}

