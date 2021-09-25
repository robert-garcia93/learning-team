// Bucle while

var year = 2018;

while(year != 1995){
	console.log("estamos en el año: " + year)

	if(year == 2000){
		break;
	}
	year--;
}

// 10-bucle-do-while

var year = 30;

do{
	alert("Solo cuando sea diferente a 20");
	year--;
	console.log(year)
}while(year > 25)