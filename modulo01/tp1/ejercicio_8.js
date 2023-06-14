let val1, val2, num1, num2;   //Declaro las variables a utilizar
val1 = prompt("Introduce primer número ?", "0"); //Pido por pantalla val1
num1 = parseInt(val1); //Setea el valor de lo ingresado al num1
val2 = prompt("Introduce segundo número ?", "0");//Pido por pantalla val2
num2 = parseInt(val2);//Setea el valor de lo ingresado al num2
let resultado = num1 + num2; // Suma los 2 valores.
document.write(`<br/> <br/> La suma es ${resultado} ` ); // Escribe en la pagina el resultado de la suma
// El método parseInt analiza un valor como una cadena y devuelve el primer entero. https://www.w3schools.com/jsref/jsref_parseint.asp