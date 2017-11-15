// function takeCelsiusGettoKelvin(celsiy_K){
// 	var CONSTANT_BOIL_K = 273;
// 	return CONSTANT_BOIL_K + celsiy_K
// }
// function takeCelsiusGetFarengeight(celsiy_F){
// 	var CONSTANT = 1.8;
// 	var CONSTANT_BOIL_F = 32;
// 	var farengeight = (celsiy_F *CONSTANT) + CONSTANT_BOIL_F;
// 	return farengeight  
// }



// function workProgram(){
// 	var ask = prompt("для преобразования градусов цельсия в градусы кельвина нажмите 'Кельвин" + "\n" + "Дляпреобразования градусов цельсия в фаренгейты нажмите 'Фаренгейт").toLowerCase();
// 	if (ask == "кельвин"){
// 		alert(takeCelsiusGettoKelvin(5));
// 	}else if (ask == "фаренгейт"){
// 		alert(takeCelsiusGetFarengeight(3));
// 	}else{
// 		alert("введеные данные не верны");
// 	}
// }

// workProgram();

// var arr = [34, 24, 11, 70, 45, 60];
// function masive(arr){
// 	var i = 0;
// 	var nakopitel;
// 	var suma_element = arr[0] + arr[1];
// 	while(arr.length > i) {
// 		nakopitel = arr[i] + arr[i +1];
// 		if (nakopitel > suma_element){
// 			suma_element = nakopitel;
// 		}
// 	i++
// 	}
// 	return suma_element;
// }
// alert(masive(arr));