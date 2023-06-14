function Factorizacion(numero) {  // Funcion para factorizar los numeros
    var factorial = 1;


if (numero < 0) {  // Evita ingresar valores negativos.
    return "NO INGRESAR VALORES NEGATIVOS"};

for (var i = 1; i <= numero; i++) {  // Mediante el bucle for realiza la factorizacion.
    factorial *= i};
return factorial};

var numero = prompt("Ingresar un valor para factorizar: " );
var resultado = Factorizacion(numero);
console.log("El factorial de " + numero + " es: " + resultado);