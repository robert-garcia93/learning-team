// Condicionales:

// Condicional if:
var numero1 = 33;
var numero2 = 13;

var cadena1 = "A " + numero1 + " es mayor que B " + numero2 ;
var cadena2 = "A es menor que B";


/*if(numero1 > numero2)
	alert(cadena1);
else
	alert(cadena2);*/

/*
// operadores relacionales:
	mayor: >
	menor: <
	mayor o igual: >=
	menor o igual: <=
	igual: ==
	diferente !=
*/

var edad = 24;
var nombre = "Gustavo Cardona";

if(edad >= 18){
	console.log(nombre + " tiene " + edad + " años, es mayor de edad");
	if(edad <= 33){
		console.log("todavia eres milenial");
	}else if(edad >= 70){
		console.log("eres anciano");
	}else{
		console.log("ya no eres milenial");
	}
}else{
	console.log(nombre + " tiene " + edad + " años, es menor de edad")
}

/*
Operadores Logicos
&& ---> AND(y)
|| ---> OR(ó)
! ----> Negación
*/

var year = 2018;
// Negación:
if(year != 2016){
	console.log("El año no es 2016");
}

// and
if(year >= 2000 && year <= 2020 && year != 2018){
	console.log("Estamos en la era actual");
}else{
	console.log("Estamos en la era postmoderna");
}

//or
if(year == 2008 || year ==2018){
	console.log("Es el año " + year)
}