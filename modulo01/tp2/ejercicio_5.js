function AnalizarTexto(cadena) {  // Funcion donde analiza mediante 2 if y un else si el texto ingresado es minusculas, mayusculas o la mezcla de ambos
    if (cadena === cadena.toUpperCase()) {
      return "La cadena está formada solo por mayúsculas";
    } else if (cadena === cadena.toLowerCase()) {
      return "La cadena está formada solo por minúsculas";
    } else {
      return "La cadena está formada por una mezcla de mayúsculas y minúsculas";
    }
  }

  var texto = prompt("Ingresar Texto y verificar si es mayusculas o minusculas")
  var resultado = AnalizarTexto(texto);
  console.log(resultado);