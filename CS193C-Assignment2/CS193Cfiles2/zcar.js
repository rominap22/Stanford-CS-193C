var configs = new Array();
configs["GT Manual"] = 17790;
configs["GT Automatic"] = 18590;
configs["GT-S Manual"] = 22455;
configs["GT-S Sportshift"] = 23455;
function getConfigPrice() {
	var configPrice = 0;
	var carForm = document.forms["carCalculations"];
	var userPrice = carForm.elements["config"];
	for(var i = 0; i < userPrice.length; i++) {
		if(userPrice[i].checked) {
			configPrice = configs[userPrice[i].value];
			break;
		}
	}
	return configPrice;
}
var combos  = new Array();
combos["Option Combo #1"] = 1235;
combos["Option Combo #2"] = 3354;
combos["No Combo"] = 0;
function getFactoryPrice() {
	var factoryPrice = 0;
	var carForm = document.forms["carCalculations"];
	var userPrice = carForm.elements["combo"];
	for(var i = 0; i < userPrice.length; i++) {
		if(userPrice[i].checked) {
			factoryPrice = combos[userPrice[i].value];
			break;
		}
	}
	return factoryPrice;
}
function getDealerPrice() {
	var dealerPrice = 0;
	var carForm = document.forms["carCalculations"];
	var userPrice = carForm.elements["dealer"];
	var userPrice1 = carForm.elements["dealer1"];
	var userPrice2 = carForm.elements["dealer2"];
	if(userPrice.checked == true) {
		dealerPrice += 550;
	}
	if(userPrice1.checked == true) {
		dealerPrice += 399;
	}
	if(userPrice2.checked == true) {
		dealerPrice += 295;
	}
	return dealerPrice;
}
function getTotalConfigPrice() {
	var carPrice = getConfigPrice();
	
	var car = document.getElementById('textbox');
	car.innerHTML = "Total Price: $" + carPrice;
	return carPrice;
}
function getTotalFactoryPrice() {
	var carPrice = getFactoryPrice();
	
	var car = document.getElementById('textbox');
	car.innerHTML = "Total Price: $" + carPrice;
	return carPrice;
}
function getTotalDealerPrice() {
	var carPrice = getDealerPrice();
	
	var car = document.getElementById('textbox');
	car.innerHTML = "Total Price: $" + carPrice;
	return carPrice;
}
function displayCarPrice() {
	var carPrice = getTotalConfigPrice() + getTotalFactoryPrice() + getTotalDealerPrice();
	document.getElementById('textbox').value = "$" + carPrice;
}