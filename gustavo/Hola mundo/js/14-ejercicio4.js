// ejercicio 14

/*
Mostrar todos los numeros impares que hay 
entre dos numeros introducidos por teclado
*/

do{
	var num1 = parseInt(prompt("ingresa el primer numero:"));
}while(isNaN(num1));

do{
	var num2 = parseInt(prompt("ingresa el segundo numero:"));
}while(isNaN(num2));

if(num1 % 2){
	console.log(num1)
}
