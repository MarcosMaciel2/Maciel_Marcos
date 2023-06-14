var numeroMes = parseInt(prompt("Ingrese el número del mes:"));   // Ingresar el numero del mes.

var cantidadDias;   // Se setean la cantidad de dias de los meses
switch (numeroMes) {
  case 1: ;case 3: ;case 5:;case 7: ;case 8: ;case 10: ;case 12: 
    cantidadDias = 31;
    break;
  case 4: ;case 6: ;case 9: ;case 11: 
    cantidadDias = 30;
    break;
  case 2:
    cantidadDias = "28 o 29";
    break;
  default:
    cantidadDias = "inválido";
    break;
}

console.log("El mes " + numeroMes + " tiene " + cantidadDias + " días."); //Imprime por pantalla los dias del mes seleccionado