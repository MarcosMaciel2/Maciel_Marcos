var valores = [true, false, 2, "hola", "mundo", 3, "char"];  // Declarar valores
let longitud = 0;


var textos = valores.filter(function(valor) {  // Define si es texto
    return typeof valor === 'string';
  });

var numeros = valores.filter(function(valor) { // Define si son numero los ingresados
  return typeof valor === 'number';
});



for (let valor of valores) {  // Comprueba mediante el for si el valor ingresado es texto y medi su valor en caracteres
    tipo = typeof (valor);
    if(tipo == "string"){
        if (valor.length > longitud) {
            mayor = valor
            longitud = valor.length
        }
    }
}



textos.sort(function(elementoA, elementoB) {  // Reordena los textos mediante las longitud de los mismos
    return elementoA.length - elementoB.length;
});
  


var suma = numeros[0] + numeros[1];  // De aqui ya solo hace las operaciones matematicas de los valores numericos ingresados en el array.
var resta = numeros[0] - numeros[1];
var multiplicacion = numeros[0] * numeros[1];
var division = numeros[0] / numeros[1];
  

console.log("El mayor es: " + mayor)
console.log("Elementos ordenados de menor a mayor cantidad de letras: " + textos);
console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);

