function TakeCelsiusGettoKelvin(celsiy_K){
	var Constant_kelvin = 273;
	var kelvin = Constant_kelvin + celsiy_K;
	return kelvin + "Градусов кельвина";
}
function TakeCelsiusGetFarengeight(celsiy_F){
	var Constant_farengeight = 1.8;
	var Constant_farengeight2 = 32;
	var farengeight = (celsiy_F *Constant_farengeight) + Constant_farengeight2;
	return farengeight + "Градусов фаренгейта";
}



function WorkProgram(){
	var ask = prompt("для преобразования градусов цельсия в градусы кельвина нажмите 'Кельвин" + "\n" + "Дляпреобразования градусов цельсия в фаренгейты нажмите 'Фаренгейт").toLowerCase();
	if (ask == "кельвин"){
		alert(TakeCelsiusGettoKelvin(5));
	}else if (ask == "фаренгейт"){
		alert(TakeCelsiusGetFarengeight(3));
	}else{
	alert("введеные данные не верны");
	}
}

WorkProgram();
