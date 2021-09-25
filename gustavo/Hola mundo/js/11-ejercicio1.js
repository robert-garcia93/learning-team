/* Un programa que nos pida 2 numeros
y determinar el mayor, el menor y si son
iguales

PLUS: si lo ingresado por teclado no son numeros o son menores a cero
vuelve a pedir los numeros*/


do{
	var num1 = parseInt(prompt("Ingresa el primer valor: "));
}while(num1 <= 0 || isNaN(num1));

do{
	var num2 = parseInt(prompt("Ingresa el segundo valor: "));
}while(num2 <= 0 || isNaN(num2));


if(num1 > num2){
	console.log("El primer valor " + num1 + ", es mayor que el segudo " + num2);
}else if(num1 < num2){
	console.log("El segundo valor " + num2 + ", es mayor que el primero " + num1);
}else if(num1 = num2){
	console.log("los dos valores son iguales");
}

