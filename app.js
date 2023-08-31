Contador Ascendente: Imprime los números del 1 al 10 en orden ascendente.

for (let i = 10; i >= 1; i--) {
    console.log(i);
}
_______________________________________________________________________

Contador Descendente: Imprime los números del 10 al 1 en orden descendente.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
_______________________________________________________________________

Suma de Números: Calcula la suma de los números del 1 al 10.

let suma = 0;

for (let i = 1; i <= 10; i++) {
    suma += i;
}

console.log("La suma de los números del 1 al 10 es: " + suma);
_______________________________________________________________________

Tabla de Multiplicar: Pedir al usuario un numero y mostrar su tabla de multiplicar.

const numero = parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicar:"));

if (!isNaN(numero)) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
} else {
    console.log("No ingresó un número válido.");
}
_______________________________________________________________________

Contador Pares: Imprime los números pares del 2 al 20.

console.log("Números pares del 2 al 20:");

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
_______________________________________________________________________

Contador Impares: Imprime los números impares del 1 al 19.

console.log("Números impares del 1 al 19:");

for (let i = 1; i <= 19; i += 2) {
    console.log(i);
}
_______________________________________________________________________

Contador de Dígitos: Cuenta la cantidad de dígitos en un número dado.

const numero = parseInt(prompt("Ingrese un número:"));

if (!isNaN(numero)) {
    const cantidadDigitos = numero.toString().length;
    console.log(`El número ${numero} tiene ${cantidadDigitos} dígitos.`);
} else {
    console.log("No ingresó un número válido.");
}







  