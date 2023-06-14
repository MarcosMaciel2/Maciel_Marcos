var numeros = [];  // Creo el array para los 100 valores
i = 0
for (i=1;i<=100;i+=1){  // Creo una estructura de 100 repeticiones.
numeros[i] = Math.random() * 100;   // Obtiene un numero random y lo multiplica x 100
document.write("<br>"+numeros[i]+"</br>")  // Escribo en el documento los 100 numeros aleatorios.
}


