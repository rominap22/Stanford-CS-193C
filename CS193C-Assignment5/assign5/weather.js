const API = "f70cadc0d8f94379fa3d20d61d935202";
var request = null;
var zipcode = document.getElementById("zipcode");
var getweather = document.getElementById("getweather");
var clear = document.getElementById("clear");
var weather  = document.getElementById("weather");

function clear() {
	weather.value = "";
}
function result() {
	request = new XMLHttpRequest();
	request.addEventListener("load", weatherData, null);
	var zipcode1 = zipcode.value;
	var url = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipcode1 + ",us&units=imperial&APPID=" + API + "&mode=xml";
	request.open("GET", url, true);
	request.send(null);
}
function weatherData() {
	var result = request.responseXML.getElementById("0").getAttribute("name");
	var result1 = request.responseXML.getElementsByTagName("temperature")[0].getAttribute("value");
	weather.value = result + ": " + result1 + weather.value;
}
getweather.addEventListener("click", result, false);
clear.addEventListener("click", clear, false);