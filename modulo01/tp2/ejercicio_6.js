var palabra = prompt("Introduce una palabra");

function Vocal(caracter) {    // Funcion para detectar las vocales
    var vocales = ['a', 'e', 'i', 'o', 'u'];
    return vocales.includes(caracter.toLowerCase());  // Aca se include los caracteres a minusculas
  }

  var posicion = -1;  // Desde la posicion -1 se empieza a evaluar
  for (var i = 0; i < palabra.length; i++) {
    if (Vocal(palabra[i])) {
      posicion = i;
      break;
    }
  }

  Valorfinal= posicion + 1  // Para la posicion le sumo 1, para evitar arrancar desde 0

  if (posicion !== -1) {  
    console.log("La vocal de la palabra: " + palabra + " se encuentra en la posición: " + Valorfinal);
  } else {
    console.log("No hay vocales en esta palabra : " + palabra);
  }