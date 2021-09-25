// ejercicio 2

/*utilizando un bucle, mostrar la suma y la media de
los numeros introducidos hasta introducir un numero
negativo y ahi mostrar el resultado
*/

var suma = 0;
var contador = 1;
var media = 0;
do{
	do{
	var numero = parseInt(prompt("ingresa un numero:"));
    }while(isNaN(numero));
	
	if(numero >= 0){
	suma = suma + numero;
	media = suma / contador;
	}

	console.log(suma, media);
	contador++;
}while(numero >= 0);

alert("la suma total es: " + suma);
alert("la media de los numero es: " + media);
