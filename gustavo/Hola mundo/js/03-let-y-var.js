// pruebas con let y var
//alert("aquie estamos")

// prueba con var
var numero = 40;
console.log(numero); // valor 40

if (true) {
	numero = 50;
	console.log(numero); // valor 50
}

console.log(numero); // valor 50

// prueba con let
var texto = "Curso JS Gustavo Cardona";
console.log(texto); // el valor es el mismo

if (true) {
	let texto = "Aqui ya cambia";
	console.log(texto); // valor 50
}

console.log(texto); // el valor pasa a ser el anterior