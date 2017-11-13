function fromCelsiustoKelvin(){
	var kelvin = 273 + celsiy_K;
	alert("Вы ввели " + celsiy_K +"°C= " + kelvin + "°К")
	return;
}
function fromCelsiustoFarengeight(){
	var farengeight = (celsiy_F *1.8) + 32;
	alert("Вы ввели " + celsiy_F +"°C= " + farengeight + "°F")
	return;
}

var ask = prompt("для преобразования градусов цельсия в градусы кельвина нажмите 'Кельвин" + "\n" + "Дляпреобразования градусов цельсия в фаренгейты нажмите 'Фаренгейт").toLowerCase();
if (ask == "кельвин"){
	var celsiy_K = +prompt("Введите числом количество градусов цельсия которое вы желаете перевести в кельвины");
		if (isNaN(celsiy_K)){
			alert("Вы ввели неверные данные");
		}else{
			fromCelsiustoKelvin();
		}
}else if (ask == "фаренгейт"){
	var celsiy_F = +prompt("для преобразования введите количество градусов цельсия которые хотите перевести в градусы фаренгейта");
		if (isNaN(celsiy_F)){
			alert("Вы ввели неверные данные");
		}else{
			fromCelsiustoFarengeight();
		}
}else{
	alert("введеные данные не верны");
}

