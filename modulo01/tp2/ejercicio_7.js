function darvuelta(texto) {  //Funcion para dar vuelta los caracteres y textos.
    var textoReverso = "";
    
    for (var i = texto.length - 1; i >= 0; i--) {
      textoReverso += texto.charAt(i);
    }
    
    return textoReverso;
  }

var textoingresado = prompt ("Ingresar un texto")
Dadovuelta = darvuelta(textoingresado);
console.log("El texto ingresado es: " + textoingresado + " Y dado vuelta seria: " + Dadovuelta)