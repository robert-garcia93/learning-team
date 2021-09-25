// Ejercicio 3

/* mostrar todos los numeros que hay entre 
dos numero introducidos por el usuario*/

do{
	var num1 = parseInt(prompt("ingresa el primer numero:"));
}while(isNaN(num1));

do{
	var num2 = parseInt(prompt("ingresa el segundo numero:"));
}while(isNaN(num2));


if (num1 > num2){
	document.write("<h2>Del " + num1 + " al " + num2 + " estan estos numeros:</h2>");
	for (var i = num1; i >= num2; i--) {
		document.write(i + "<br>");
		//console.log(i);
    }
}

if (num1 < num2){
	document.write("<h2>Del " + num1 + " al " + num2 + " estan estos numeros:</h2>");
	for (var i = num1; i <= num2; i++) {
		document.write(i + "<br>");
		//console.log(i);
    }
}

