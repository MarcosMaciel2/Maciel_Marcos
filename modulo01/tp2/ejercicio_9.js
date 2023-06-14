function valoresmaximos(mensaje) {    //Esta funcion es la encargada de evaluar los valores maximos que podran usarse.
    var nota;
    do {
      nota = parseInt(prompt(mensaje));
    } while ( nota < 1 || nota > 10);
    return nota;
  }

//var nota = []
//for (i=1;i<=3;i+=1){
//nota[i] = parseInt(prompt("Ingrese la "+ i +"º nota "));
//}

var nota1 = valoresmaximos("Ingrese la nota 1:");  //Pide que ingrese las 3 notas.
var nota2 = valoresmaximos("Ingrese la nota 2:");
var nota3 = valoresmaximos("Ingrese la nota 3:");

  

var promedio = (nota1 + nota2 + nota3) / 3;  //Obtener promedio

var Estado;   // Se expresa mediante el promedio, que estado, estara evaluada la nota.
if (promedio < 5) {
    Estado = "Reprobado";
} else if (promedio >= 6 && promedio <= 8) {
    Estado = "Aprobado";
} else {
    Estado = "Sobresaliente";
}

console.log("Promedio: " + promedio);
console.log("Estado: " + Estado);