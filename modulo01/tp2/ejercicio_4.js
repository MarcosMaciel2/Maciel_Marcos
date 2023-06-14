function Esnumeroparoimpar(numero) {  // Deteccion de numero impar o par mediante la funcion. Usando el % 2
    if (numero % 2 === 0) {
      return "par";
    } else {
      return "impar";
    }
  }


var numero = prompt("Ingresar un numero para determinar si es par o impar")
var resultado = Esnumeroparoimpar(numero);
console.log("El número " + numero + " es " + resultado);